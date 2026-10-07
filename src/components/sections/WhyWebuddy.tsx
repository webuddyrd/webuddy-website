import { Globe, ListChecks, Target, Users } from 'lucide-react';
import { useT } from '../../i18n/lang';
import { Reveal } from '../ui/Reveal';

const icons = [Target, Users, ListChecks, Globe];

export function WhyWebuddy() {
  const { t } = useT();
  const items = t('home.why.items', { returnObjects: true }) as { title: string; text: string }[];

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item, i) => {
        const Icon = icons[i % icons.length];
        return (
          <Reveal key={item.title} delay={(i % 2) * 70} className="card p-7">
            <Icon size={20} className="text-brand-accent" aria-hidden="true" />
            <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 leading-relaxed text-zinc-400">{item.text}</p>
          </Reveal>
        );
      })}
    </div>
  );
}
