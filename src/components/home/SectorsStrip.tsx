import { useT } from '../../i18n/lang';

// Industries come from the partners' previous work; they replace the old placeholder client logos.
export function SectorsStrip() {
  const { t } = useT();
  const sectors = t('home.sectors.items', { returnObjects: true }) as string[];

  return (
    <section className="border-y border-white/[0.06] bg-ink-900/50">
      <div className="wrap flex flex-col gap-4 py-7 md:flex-row md:items-center md:gap-10">
        <p className="eyebrow shrink-0">{t('home.sectors.label')}</p>
        <ul className="flex flex-wrap gap-x-7 gap-y-2.5 text-sm text-zinc-300">
          {sectors.map((sector) => (
            <li key={sector} className="flex items-center gap-2.5">
              <span className="h-1 w-1 rounded-full bg-zinc-600" aria-hidden="true" />
              {sector}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
