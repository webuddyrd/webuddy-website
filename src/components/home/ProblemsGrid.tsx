import { ArrowRight } from 'lucide-react';
import { useLocalized } from '../../i18n/lang';
import { problems } from '../../content/problems';
import { getSolution } from '../../content/solutions';
import { LocalizedLink } from '../LocalizedLink';
import { Reveal } from '../ui/Reveal';

export function ProblemsGrid() {
  const pick = useLocalized();

  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 lg:grid-cols-3">
      {problems.map((item, i) => {
        const solution = getSolution(item.solution);
        return (
          <Reveal key={item.solution} delay={(i % 3) * 70} className="bg-ink-950">
            <LocalizedLink
              to={`/solutions/${item.solution}`}
              className="group flex h-full flex-col justify-between gap-10 p-7 transition-colors hover:bg-ink-900"
            >
              <p className="text-lg font-medium leading-snug text-white">{pick(item.problem)}</p>
              <div>
                <p className="text-sm leading-relaxed text-zinc-400">{pick(item.answer)}</p>
                {solution && (
                  <p className="mt-5 flex items-center gap-1.5 font-mono text-xs text-zinc-500 transition-colors group-hover:text-brand-accent">
                    {pick(solution.title)}
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                  </p>
                )}
              </div>
            </LocalizedLink>
          </Reveal>
        );
      })}
    </div>
  );
}
