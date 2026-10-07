import { useT } from '../../i18n/lang';

// Systems map for the hero: existing tools flow into what Webuddy builds. Pure SVG, so it
// prerenders and needs no 3D runtime; the flow dots are hidden for reduced-motion users.
const NODE_W = 98;
const NODE_H = 38;
const GAP = 16;
const centers = [0, 1, 2, 3].map((i) => i * (NODE_W + GAP) + NODE_W / 2);
const SOURCES_Y = 34;
const OUTPUTS_Y = 362;
const CORE = { x: 100, y: 150, w: 240, h: 100 };

const inPath = (cx: number) => `M ${cx} ${SOURCES_Y + NODE_H} C ${cx} 112, 220 110, 220 ${CORE.y}`;
const outPath = (cx: number) => `M 220 ${CORE.y + CORE.h} C 220 290, ${cx} 322, ${cx} ${OUTPUTS_Y}`;

function Node({ cx, y, label }: { cx: number; y: number; label: string }) {
  return (
    <g>
      <rect x={cx - NODE_W / 2} y={y} width={NODE_W} height={NODE_H} rx={8} fill="#0e0e11" stroke="rgba(255,255,255,0.12)" />
      <text x={cx} y={y + 24} textAnchor="middle" className="font-mono" fontSize={12} fill="#d4d4d8">
        {label}
      </text>
    </g>
  );
}

function FlowDot({ path, begin, color }: { path: string; begin: number; color: string }) {
  return (
    <circle r={2.6} fill={color} className="flow-dot" opacity={0}>
      <animateMotion dur="3s" begin={`${begin}s`} repeatCount="indefinite" path={path} />
      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="3s" begin={`${begin}s`} repeatCount="indefinite" />
    </circle>
  );
}

export function SystemDiagram() {
  const { t } = useT();
  const sources = t('home.diagram.sources', { returnObjects: true }) as string[];
  const outputs = t('home.diagram.outputs', { returnObjects: true }) as string[];

  return (
    <svg viewBox="0 0 440 440" role="img" aria-label={t('home.diagram.label')} className="h-auto w-full">
      <defs>
        <linearGradient id="wb-core-stroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#8b5cf6" />
          <stop offset="0.5" stopColor="#ec4899" />
          <stop offset="1" stopColor="#f59e0b" />
        </linearGradient>
        <radialGradient id="wb-core-glow">
          <stop offset="0" stopColor="#ec4899" stopOpacity="0.22" />
          <stop offset="1" stopColor="#ec4899" stopOpacity="0" />
        </radialGradient>
      </defs>

      <text x={220} y={18} textAnchor="middle" className="font-mono" fontSize={11} fill="#71717a" letterSpacing="0.12em">
        {t('home.diagram.sourcesTitle')}
      </text>
      <text x={220} y={432} textAnchor="middle" className="font-mono" fontSize={11} fill="#71717a" letterSpacing="0.12em">
        {t('home.diagram.outputsTitle')}
      </text>

      <g fill="none" stroke="rgba(255,255,255,0.14)">
        {centers.map((cx) => (
          <path key={`in-${cx}`} d={inPath(cx)} />
        ))}
        {centers.map((cx) => (
          <path key={`out-${cx}`} d={outPath(cx)} />
        ))}
      </g>

      <ellipse cx={220} cy={200} rx={190} ry={90} fill="url(#wb-core-glow)" />
      <rect x={CORE.x} y={CORE.y} width={CORE.w} height={CORE.h} rx={16} fill="#111114" stroke="url(#wb-core-stroke)" strokeWidth={1.5} />
      <text x={220} y={197} textAnchor="middle" className="font-display" fontSize={24} fontWeight={600} fill="#ffffff">
        {t('home.diagram.core')}
      </text>
      <text x={220} y={224} textAnchor="middle" className="font-mono" fontSize={11} fill="#a1a1aa">
        {t('home.diagram.coreSub')}
      </text>

      {centers.map((cx, i) => (
        <Node key={`s-${cx}`} cx={cx} y={SOURCES_Y} label={sources[i]} />
      ))}
      {centers.map((cx, i) => (
        <Node key={`o-${cx}`} cx={cx} y={OUTPUTS_Y} label={outputs[i]} />
      ))}

      {centers.map((cx, i) => (
        <FlowDot key={`fi-${cx}`} path={inPath(cx)} begin={i * 0.75} color="#a78bfa" />
      ))}
      {centers.map((cx, i) => (
        <FlowDot key={`fo-${cx}`} path={outPath(cx)} begin={1.5 + i * 0.75} color="#fb923c" />
      ))}
    </svg>
  );
}
