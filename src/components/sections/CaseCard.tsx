import { useLocalized } from '../../i18n/lang';
import type { CaseStudy } from '../../content/cases';
import { LocalizedLink } from '../LocalizedLink';
import { Reveal } from '../ui/Reveal';

export function CaseCard({ item, delay = 0 }: { item: CaseStudy; delay?: number }) {
  const pick = useLocalized();

  return (
    <Reveal as="article" delay={delay} className="card group overflow-hidden">
      <LocalizedLink to={`/work#${item.slug}`} className="flex h-full flex-col">
        <div className="aspect-[16/10] overflow-hidden border-b border-white/[0.08] bg-ink-800">
          <img
            src={item.image}
            alt={`${item.client}: ${pick(item.title)}`}
            loading="lazy"
            width={1600}
            height={900}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="eyebrow">{pick(item.sector)}</p>
          <h3 className="mt-3 text-lg font-semibold text-white">{item.client}</h3>
          <p className="mt-1 text-sm text-zinc-300">{pick(item.title)}</p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">{pick(item.summary)}</p>
          <ul className="mt-auto flex flex-wrap gap-2 pt-5">
            {item.stack.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </LocalizedLink>
    </Reveal>
  );
}
