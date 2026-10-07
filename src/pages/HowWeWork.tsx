import { useT } from '../i18n/lang';
import { SEO } from '../components/SEO';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Reveal } from '../components/ui/Reveal';
import { ProcessSteps } from '../components/sections/ProcessSteps';
import { Faq } from '../components/sections/Faq';
import { CtaBand } from '../components/sections/CtaBand';

interface Item {
  title: string;
  text: string;
}

export const HowWeWork = () => {
  const { t } = useT();
  const models = t('howWeWork.models.items', { returnObjects: true }) as (Item & { best: string })[];
  const principles = t('howWeWork.principles.items', { returnObjects: true }) as Item[];
  const faq = t('howWeWork.faq.items', { returnObjects: true }) as { q: string; a: string }[];

  return (
    <>
      <SEO title={t('seo.howWeWork.title')} description={t('seo.howWeWork.description')} />
      <PageHero eyebrow={t('howWeWork.eyebrow')} title={t('howWeWork.title')} lead={t('howWeWork.lead')} />

      <section className="wrap pb-24 md:pb-28">
        <p className="eyebrow mb-6">{t('howWeWork.steps.title')}</p>
        <ProcessSteps detailed />
      </section>

      <section className="border-y border-white/[0.06] bg-ink-900/40">
        <div className="wrap py-24 md:py-28">
          <SectionHeader index="01" eyebrow={t('howWeWork.models.eyebrow')} title={t('howWeWork.models.title')} />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {models.map((model, i) => (
              <Reveal key={model.title} delay={i * 70} className="card flex flex-col p-7">
                <span className="font-mono text-xs text-brand-accent">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 text-xl font-semibold text-white">{model.title}</h3>
                <p className="mt-3 leading-relaxed text-zinc-400">{model.text}</p>
                <p className="mt-auto border-t border-white/[0.08] pt-5 text-sm leading-relaxed text-zinc-300">{model.best}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap py-24 md:py-28">
        <SectionHeader index="02" eyebrow={t('howWeWork.principles.eyebrow')} title={t('howWeWork.principles.title')} />
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-5">
          {principles.map((principle) => (
            <Reveal key={principle.title} className="bg-ink-950 p-6 sm:[&:last-child:nth-child(odd)]:col-span-2 lg:[&:last-child:nth-child(odd)]:col-span-1">
              <h3 className="text-lg font-semibold text-white">{principle.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{principle.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="wrap grid gap-10 pb-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] md:gap-12">
        <Reveal>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">{t('howWeWork.faq.title')}</h2>
        </Reveal>
        <Faq items={faq} />
      </section>

      <CtaBand />
    </>
  );
};
