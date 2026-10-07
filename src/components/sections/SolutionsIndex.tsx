import { ArrowRight } from 'lucide-react';
import { useLocalized, useT } from '../../i18n/lang';
import { solutions, type Solution } from '../../content/solutions';
import { LocalizedLink } from '../LocalizedLink';
import { Reveal } from '../ui/Reveal';

function FeaturedRow({ solution, label }: { solution: Solution; label: string }) {
  const pick = useLocalized();
  return (
    <Reveal>
      <LocalizedLink
        to={`/solutions/${solution.slug}`}
        className="group relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-white/[0.1] bg-ink-900 p-7 transition-colors hover:border-white/20 md:flex-row md:items-center md:justify-between md:p-8"
      >
        <span className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-brand-violet via-brand-pink to-brand-orange" aria-hidden="true" />
        <div className="flex gap-5">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
            <solution.icon size={20} className="text-brand-accent" />
          </span>
          <div>
            <p className="eyebrow text-brand-accent">{label}</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">{pick(solution.title)}</h3>
            <p className="mt-2 max-w-xl leading-relaxed text-zinc-400">{pick(solution.short)}</p>
          </div>
        </div>
        <ArrowRight size={20} className="shrink-0 text-zinc-500 transition-all group-hover:translate-x-1 group-hover:text-white" />
      </LocalizedLink>
    </Reveal>
  );
}

// Compact index of every solution line: Discovery as the entry point, the five build lines,
// and ongoing evolution after launch.
export function SolutionsIndex() {
  const { t } = useT();
  const pick = useLocalized();
  const entry = solutions.filter((s) => s.kind === 'entry');
  const core = solutions.filter((s) => s.kind === 'core');
  const continuous = solutions.filter((s) => s.kind === 'continuous');

  return (
    <div className="space-y-4">
      {entry.map((solution) => (
        <FeaturedRow key={solution.slug} solution={solution} label={t('home.solutions.entry')} />
      ))}
      <ul className="divide-y divide-white/[0.08] overflow-hidden rounded-2xl border border-white/[0.08]">
        {core.map((solution, i) => (
          <Reveal as="li" key={solution.slug} delay={i * 50}>
            <LocalizedLink
              to={`/solutions/${solution.slug}`}
              className="group grid gap-3 p-6 transition-colors hover:bg-white/[0.02] md:grid-cols-[2.5rem_1fr_1.1fr_auto] md:items-center md:gap-8 md:p-7"
            >
              <span className="font-mono text-xs text-zinc-600">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="flex items-center gap-3 text-lg font-semibold text-white">
                <solution.icon size={18} className="shrink-0 text-zinc-500 transition-colors group-hover:text-brand-accent" />
                {pick(solution.title)}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400">{pick(solution.short)}</p>
              <ArrowRight size={18} className="hidden text-zinc-600 transition-all group-hover:translate-x-1 group-hover:text-white md:block" />
            </LocalizedLink>
          </Reveal>
        ))}
      </ul>
      {continuous.map((solution) => (
        <FeaturedRow key={solution.slug} solution={solution} label={t('home.solutions.continuous')} />
      ))}
    </div>
  );
}
