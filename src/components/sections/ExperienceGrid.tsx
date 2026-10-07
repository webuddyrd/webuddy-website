import { Info } from 'lucide-react';
import { useLocalized, useT } from '../../i18n/lang';
import type { Experience } from '../../content/experience';
import { Reveal } from '../ui/Reveal';

// The founders' work before Webuddy. The note is always shown so it is never mistaken for Webuddy client work.
export function ExperienceGrid({ items }: { items: Experience[] }) {
  const { t } = useT();
  const pick = useLocalized();

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item, i) => (
          <Reveal as="article" key={item.id} delay={(i % 2) * 70} className="card flex flex-col p-6 md:p-7">
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
              <span className="eyebrow text-zinc-400">{pick(item.sector)}</span>
              <span className="font-mono text-[11px] text-zinc-500">
                {t('common.labels.role')}: {pick(item.role)}
              </span>
            </div>
            <h3 className="mt-4 text-xl font-semibold leading-snug text-white">{pick(item.title)}</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">{pick(item.summary)}</p>
            {item.tech.length > 0 && (
              <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                {item.tech.map((tech) => (
                  <li key={tech} className="chip">
                    {tech}
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        ))}
      </div>
      <p className="mt-6 flex items-start gap-2 text-sm text-zinc-500">
        <Info size={16} className="mt-0.5 shrink-0" />
        {t('home.experience.note')}
      </p>
    </div>
  );
}
