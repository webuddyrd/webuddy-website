import type { ReactNode } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { useLocalized, useT } from '../i18n/lang';
import { getSolution, solutions } from '../content/solutions';
import { getExperience } from '../content/experience';
import { getCases } from '../content/cases';
import { getInsight } from '../content/insights';
import { SEO } from '../components/SEO';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { ButtonLink } from '../components/ui/Button';
import { LocalizedLink } from '../components/LocalizedLink';
import { ExperienceGrid } from '../components/sections/ExperienceGrid';
import { CaseCard } from '../components/sections/CaseCard';
import { Faq } from '../components/sections/Faq';
import { CtaBand } from '../components/sections/CtaBand';
import { NotFound } from './NotFound';

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="wrap grid gap-8 border-t border-white/[0.08] py-16 md:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] md:gap-12 md:py-20">
      <Reveal>
        <h2 className="text-2xl font-semibold text-white md:text-3xl">{title}</h2>
      </Reveal>
      <div>{children}</div>
    </section>
  );
}

export const SolutionDetail = () => {
  const { slug } = useParams();
  const { t } = useT();
  const pick = useLocalized();
  const solution = getSolution(slug);

  if (!solution) return <NotFound />;

  const relatedExperience = getExperience(solution.experience);
  const relatedCases = getCases(solution.cases);
  const insight = getInsight(solution.insight);
  const others = solutions.filter((s) => s.slug !== solution.slug);

  return (
    <>
      <SEO title={`${pick(solution.title)} | Webuddy`} description={pick(solution.lead)} />
      <PageHero
        eyebrow={
          <span className="flex items-center gap-2">
            <LocalizedLink to="/solutions" className="transition-colors hover:text-white">
              {t('solution.breadcrumb')}
            </LocalizedLink>
            <span aria-hidden="true">/</span>
            <span className="text-zinc-300">{pick(solution.title)}</span>
          </span>
        }
        title={pick(solution.title)}
        lead={pick(solution.lead)}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink to={`/contact?need=${solution.slug}`}>
            {t('common.cta.talk')}
            <ArrowRight size={16} />
          </ButtonLink>
          <ButtonLink to="/how-we-work" variant="secondary">
            {t('home.hero.secondary')}
          </ButtonLink>
        </div>
      </PageHero>

      <Block title={t('solution.problems')}>
        <ul className="grid gap-3 sm:grid-cols-2">
          {pick(solution.problems).map((problem, i) => (
            <Reveal as="li" key={problem} delay={(i % 2) * 60} className="card flex gap-3 p-5 text-zinc-200">
              <Check size={18} className="mt-0.5 shrink-0 text-brand-accent" />
              {problem}
            </Reveal>
          ))}
        </ul>
      </Block>

      <Block title={t('solution.deliverables')}>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2">
          {pick(solution.deliverables).map((item) => (
            <div key={item.title} className="bg-ink-950 p-6 sm:[&:last-child:nth-child(odd)]:col-span-2">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.text}</p>
            </div>
          ))}
        </div>
      </Block>

      <Block title={t('solution.approach')}>
        <ol className="space-y-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08]">
          {pick(solution.approach).map((step, i) => (
            <li key={step.title} className="flex gap-5 bg-ink-950 p-6">
              <span className="font-mono text-xs text-brand-accent">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="font-semibold text-white">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Block>

      {relatedCases.length > 0 && (
        <Block title={t('solution.cases')}>
          <div className="grid gap-4 sm:grid-cols-2">
            {relatedCases.map((item) => (
              <CaseCard key={item.slug} item={item} />
            ))}
          </div>
        </Block>
      )}

      {relatedExperience.length > 0 && (
        <Block title={t('solution.experience')}>
          <ExperienceGrid items={relatedExperience} />
        </Block>
      )}

      <Block title={t('solution.stack')}>
        <ul className="flex flex-wrap gap-2">
          {solution.stack.map((tech) => (
            <li key={tech} className="chip text-sm">
              {tech}
            </li>
          ))}
        </ul>
      </Block>

      <Block title={t('solution.faq')}>
        <Faq items={pick(solution.faq)} />
      </Block>

      {insight && (
        <Block title={t('solution.insight')}>
          <Reveal>
            <LocalizedLink to={`/insights/${insight.slug}`} className="card group block p-7 transition-colors hover:border-white/20">
              <h3 className="text-xl font-semibold text-white">{pick(insight.title)}</h3>
              <p className="mt-3 leading-relaxed text-zinc-400">{pick(insight.summary)}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-white">
                {t('insights.read')}
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </LocalizedLink>
          </Reveal>
        </Block>
      )}

      <CtaBand title={t('solution.ctaTitle')} text={t('solution.ctaText')} need={solution.slug} />

      <nav className="wrap pb-24" aria-label={t('solution.others')}>
        <p className="eyebrow">{t('solution.others')}</p>
        <ul className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {others.map((other) => (
            <li key={other.slug} className="bg-ink-950">
              <LocalizedLink
                to={`/solutions/${other.slug}`}
                className="group flex h-full items-center justify-between gap-4 p-5 text-sm text-zinc-300 transition-colors hover:bg-ink-900 hover:text-white"
              >
                <span className="flex items-center gap-3">
                  <other.icon size={16} className="shrink-0 text-zinc-500 group-hover:text-brand-accent" />
                  {pick(other.title)}
                </span>
                <ArrowRight size={14} className="shrink-0 text-zinc-600 group-hover:text-white" />
              </LocalizedLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
