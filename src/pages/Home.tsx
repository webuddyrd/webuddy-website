import { ArrowRight } from 'lucide-react';
import { useT } from '../i18n/lang';
import { SEO } from '../components/SEO';
import { organizationJsonLd } from '../seo/head';
import { Hero } from '../components/home/Hero';
import { SectorsStrip } from '../components/home/SectorsStrip';
import { ProblemsGrid } from '../components/home/ProblemsGrid';
import { SolutionsIndex } from '../components/sections/SolutionsIndex';
import { ExperienceGrid } from '../components/sections/ExperienceGrid';
import { CaseCard } from '../components/sections/CaseCard';
import { TestimonialCard } from '../components/sections/TestimonialCard';
import { ProcessSteps } from '../components/sections/ProcessSteps';
import { WhyWebuddy } from '../components/sections/WhyWebuddy';
import { Capabilities } from '../components/sections/Capabilities';
import { CtaBand } from '../components/sections/CtaBand';
import { SectionHeader } from '../components/ui/SectionHeader';
import { LocalizedLink } from '../components/LocalizedLink';
import { experience } from '../content/experience';
import { cases } from '../content/cases';
import { testimonials } from '../content/testimonials';

function MoreLink({ to, children }: { to: string; children: string }) {
  return (
    <LocalizedLink to={to} className="group inline-flex items-center gap-1.5 text-sm font-medium text-white">
      <span className="underline decoration-white/30 underline-offset-4 transition-colors group-hover:decoration-white">{children}</span>
      <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
    </LocalizedLink>
  );
}

export const Home = () => {
  const { t } = useT();

  return (
    <>
      <SEO title={t('seo.home.title')} description={t('seo.home.description')} jsonLd={[organizationJsonLd]} />
      <Hero />
      <SectorsStrip />

      <section className="wrap py-24 md:py-32">
        <SectionHeader index="01" eyebrow={t('home.problems.eyebrow')} title={t('home.problems.title')} lead={t('home.problems.lead')} />
        <div className="mt-14">
          <ProblemsGrid />
        </div>
      </section>

      <section className="wrap py-24 md:py-32">
        <SectionHeader index="02" eyebrow={t('home.solutions.eyebrow')} title={t('home.solutions.title')} lead={t('home.solutions.lead')} />
        <div className="mt-14">
          <SolutionsIndex />
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-ink-900/40">
        <div className="wrap py-24 md:py-32">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeader index="03" eyebrow={t('home.experience.eyebrow')} title={t('home.experience.title')} lead={t('home.experience.lead')} />
            <MoreLink to="/work#experience">{t('home.experience.cta')}</MoreLink>
          </div>
          <div className="mt-14">
            <ExperienceGrid items={experience.filter((item) => item.featured)} />
          </div>
        </div>
      </section>

      <section className="wrap py-24 md:py-32">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeader index="04" eyebrow={t('home.work.eyebrow')} title={t('home.work.title')} lead={t('home.work.lead')} />
          <MoreLink to="/work">{t('home.work.cta')}</MoreLink>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {cases
            .filter((item) => item.featured)
            .map((item, i) => (
              <CaseCard key={item.slug} item={item} delay={i * 70} />
            ))}
        </div>
        <h3 className="eyebrow mt-20">{t('home.work.testimonials')}</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>

      <section className="wrap py-24 md:py-32">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeader index="05" eyebrow={t('home.process.eyebrow')} title={t('home.process.title')} lead={t('home.process.lead')} />
          <MoreLink to="/how-we-work">{t('home.process.cta')}</MoreLink>
        </div>
        <div className="mt-14">
          <ProcessSteps />
        </div>
      </section>

      <section className="wrap py-24 md:py-32">
        <SectionHeader index="06" eyebrow={t('home.why.eyebrow')} title={t('home.why.title')} />
        <div className="mt-14">
          <WhyWebuddy />
        </div>
      </section>

      <section className="wrap py-24 md:py-32">
        <SectionHeader index="07" eyebrow={t('home.capabilities.eyebrow')} title={t('home.capabilities.title')} lead={t('home.capabilities.lead')} />
        <div className="mt-14">
          <Capabilities />
        </div>
      </section>

      <CtaBand title={t('home.cta.title')} text={t('home.cta.text')} />
    </>
  );
};
