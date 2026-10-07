import { ArrowRight } from 'lucide-react';
import { useLocalized, useT } from '../../i18n/lang';
import { capabilities } from '../../content/capabilities';
import { LocalizedLink } from '../LocalizedLink';
import { Reveal } from '../ui/Reveal';

export function Capabilities() {
  const { t } = useT();
  const pick = useLocalized();

  return (
    <Reveal className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
      {capabilities.map((group) => (
        <div key={group.title.en} className="bg-ink-950 p-6">
          <h3 className="eyebrow">{pick(group.title)}</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {pick(group.items).map((item) => (
              <li key={item} className="chip">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <LocalizedLink to="/contact" className="group flex flex-col justify-between gap-4 bg-ink-950 p-6 transition-colors hover:bg-ink-900">
        <p className="text-sm leading-relaxed text-zinc-400">{t('home.capabilities.note')}</p>
        <ArrowRight size={16} className="text-zinc-500 transition-all group-hover:translate-x-1 group-hover:text-white" />
      </LocalizedLink>
    </Reveal>
  );
}
