import { ArrowRight, Check } from 'lucide-react';
import { useLocalized, useT } from '../i18n/lang';
import { solutions } from '../content/solutions';
import { SEO } from '../components/SEO';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Reveal } from '../components/ui/Reveal';
import { ButtonLink } from '../components/ui/Button';
import { LocalizedLink } from '../components/LocalizedLink';
import { Capabilities } from '../components/sections/Capabilities';
import { CtaBand } from '../components/sections/CtaBand';

export const Solutions = () => {
  const { t } = useT();
  const pick = useLocalized();
  const entry = solutions.find((s) => s.kind === 'entry');
  const core = solutions.filter((s) => s.kind === 'core');
  const continuous = solutions.filter((s) => s.kind === 'continuous');

  return (
    <>
      <SEO title={t('seo.solutions.title')} description={t('seo.solutions.description')} />
      <PageHero eyebrow={t('solutionsPage.eyebrow')} title={t('solutionsPage.title')} lead={t('solutionsPage.lead')} />

      {entry && (
        <section className="wrap">
          <Reveal className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-ink-900 p-7 md:p-10">
            <span className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-brand-violet via-brand-pink to-brand-orange" aria-hidden="true" />
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="eyebrow text-brand-accent">{t('solutionsPage.entryTitle')}</p>
                <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">{pick(entry.title)}</h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-zinc-400">{t('solutionsPage.entryText')}</p>
              </div>
              <ButtonLink to={`/solutions/${entry.slug}`} variant="secondary">
                {t('common.cta.learnMore')}
                <ArrowRight size={16} />
              </ButtonLink>
            </div>
          </Reveal>
        </section>
      )}

      <section className="wrap py-24 md:py-28">
        <SectionHeader eyebrow={t('solutionsPage.coreTitle')} title={t('home.solutions.title')} />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {core.map((solution, i) => (
            <Reveal as="article" key={solution.slug} delay={(i % 2) * 70} className="card">
              <LocalizedLink to={`/solutions/${solution.slug}`} className="group flex h-full flex-col p-7 md:p-8">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                    <solution.icon size={20} className="text-zinc-400 transition-colors group-hover:text-brand-accent" />
                  </span>
                  <span className="font-mono text-xs text-zinc-600">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white">{pick(solution.title)}</h3>
                <p className="mt-3 leading-relaxed text-zinc-400">{pick(solution.short)}</p>
                <p className="eyebrow mt-7 text-[10px]">{t('solution.problems')}</p>
                <ul className="mt-3 space-y-2">
                  {pick(solution.problems)
                    .slice(0, 3)
                    .map((problem) => (
                      <li key={problem} className="flex gap-2.5 text-sm text-zinc-300">
                        <Check size={15} className="mt-0.5 shrink-0 text-brand-accent" />
                        {problem}
                      </li>
                    ))}
                </ul>
                <span className="mt-auto flex items-center gap-1.5 pt-7 text-sm font-medium text-white">
                  {t('common.cta.learnMore')}
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </LocalizedLink>
            </Reveal>
          ))}
          <Reveal className="relative flex flex-col justify-between gap-8 overflow-hidden rounded-2xl border border-dashed border-white/15 p-7 md:p-8">
            <div>
              <h3 className="text-2xl font-semibold text-white">{t('solutionsPage.comboTitle')}</h3>
              <p className="mt-3 leading-relaxed text-zinc-400">{t('solutionsPage.comboText')}</p>
            </div>
            <ButtonLink to="/contact" className="self-start">
              {t('common.cta.talk')}
              <ArrowRight size={16} />
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      {continuous.map((solution) => (
        <section key={solution.slug} className="wrap">
          <Reveal className="card grid gap-8 p-7 md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <p className="eyebrow text-brand-accent">{t('solutionsPage.continuousTitle')}</p>
              <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">{pick(solution.title)}</h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-zinc-400">{pick(solution.lead)}</p>
            </div>
            <ButtonLink to={`/solutions/${solution.slug}`} variant="secondary">
              {t('common.cta.learnMore')}
              <ArrowRight size={16} />
            </ButtonLink>
          </Reveal>
        </section>
      ))}

      <section className="wrap py-24 md:py-28">
        <SectionHeader eyebrow={t('home.capabilities.eyebrow')} title={t('home.capabilities.title')} lead={t('home.capabilities.lead')} />
        <div className="mt-12">
          <Capabilities />
        </div>
      </section>

      <CtaBand />
    </>
  );
};
