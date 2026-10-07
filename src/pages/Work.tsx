import { ArrowUpRight, Check } from 'lucide-react';
import { useLocalized, useT } from '../i18n/lang';
import { cases, type CaseStudy } from '../content/cases';
import { experience } from '../content/experience';
import { getTestimonial } from '../content/testimonials';
import { SEO } from '../components/SEO';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Reveal } from '../components/ui/Reveal';
import { ExperienceGrid } from '../components/sections/ExperienceGrid';
import { TestimonialCard } from '../components/sections/TestimonialCard';
import { CtaBand } from '../components/sections/CtaBand';

function VisitLink({ url }: { url: string }) {
  const { t } = useT();
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1.5 text-sm font-medium text-white"
    >
      <span className="underline decoration-white/30 underline-offset-4 transition-colors group-hover:decoration-white">
        {t('common.labels.visit')}
      </span>
      <ArrowUpRight size={15} />
    </a>
  );
}

function CaseStudyRow({ item, index }: { item: CaseStudy; index: number }) {
  const { t } = useT();
  const pick = useLocalized();
  const testimonial = getTestimonial(item.testimonial);

  return (
    <Reveal as="article" id={item.slug} className="grid gap-10 border-t border-white/[0.08] py-16 lg:grid-cols-2 lg:gap-14">
      <div>
        <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-800">
          <img
            src={item.image}
            alt={`${item.client}: ${pick(item.title)}`}
            loading="lazy"
            width={1600}
            height={900}
            className="h-full w-full object-cover object-top"
          />
        </div>
        {item.gallery && (
          <div className="mt-3 grid grid-cols-3 gap-3">
            {item.gallery.map((image) => (
              <figure key={image.src}>
                <div className="aspect-[16/10] overflow-hidden rounded-lg border border-white/[0.08] bg-ink-800">
                  <img src={image.src} alt={image.label} loading="lazy" className="h-full w-full object-cover object-top" />
                </div>
                <figcaption className="mt-2 font-mono text-[11px] text-zinc-500">{image.label}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>

      <div>
        <p className="eyebrow flex items-center gap-3">
          <span className="text-brand-accent">{String(index + 1).padStart(2, '0')}</span>
          {pick(item.sector)}
        </p>
        <h3 className="mt-4 text-3xl font-semibold text-white">{item.client}</h3>
        <p className="mt-2 text-lg text-zinc-300">{pick(item.title)}</p>

        {item.context && (
          <>
            <p className="eyebrow mt-9">{t('work.context')}</p>
            <p className="mt-3 leading-relaxed text-zinc-400">{pick(item.context)}</p>
          </>
        )}

        {item.built && (
          <>
            <p className="eyebrow mt-9">{t('work.built')}</p>
            <ul className="mt-3 space-y-2.5">
              {pick(item.built).map((line) => (
                <li key={line} className="flex gap-3 leading-relaxed text-zinc-300">
                  <Check size={16} className="mt-1 shrink-0 text-brand-accent" />
                  {line}
                </li>
              ))}
            </ul>
          </>
        )}

        <ul className="mt-8 flex flex-wrap gap-2">
          {item.stack.map((tech) => (
            <li key={tech} className="chip">
              {tech}
            </li>
          ))}
        </ul>

        {testimonial && <TestimonialCard testimonial={testimonial} className="mt-8" />}

        <div className="mt-8">
          <VisitLink url={item.url} />
        </div>
      </div>
    </Reveal>
  );
}

export const Work = () => {
  const { t } = useT();
  const pick = useLocalized();
  const featured = cases.filter((item) => item.featured);
  const more = cases.filter((item) => !item.featured);

  return (
    <>
      <SEO title={t('seo.work.title')} description={t('seo.work.description')} />
      <PageHero eyebrow={t('work.eyebrow')} title={t('work.title')} lead={t('work.lead')} />

      <section className="wrap pb-12">
        <SectionHeader index="01" eyebrow={t('work.webuddyEyebrow')} title={t('work.webuddyTitle')} />
        <div className="mt-12">
          {featured.map((item, i) => (
            <CaseStudyRow key={item.slug} item={item} index={i} />
          ))}
        </div>

        <div className="border-t border-white/[0.08] pt-16">
          <p className="eyebrow">{t('work.others')}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {more.map((item) => {
              const testimonial = getTestimonial(item.testimonial);
              return (
                <Reveal as="article" key={item.slug} id={item.slug} className="card overflow-hidden">
                  <div className="aspect-[16/9] overflow-hidden border-b border-white/[0.08] bg-ink-800">
                    <img
                      src={item.image}
                      alt={`${item.client}: ${pick(item.title)}`}
                      loading="lazy"
                      width={1600}
                      height={900}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6">
                    <p className="eyebrow">{pick(item.sector)}</p>
                    <h3 className="mt-3 text-lg font-semibold text-white">{item.client}</h3>
                    <p className="mt-1 text-sm text-zinc-300">{pick(item.title)}</p>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">{pick(item.summary)}</p>
                    {testimonial && (
                      <p className="mt-4 border-l-2 border-brand-accent/60 pl-3 text-sm italic leading-relaxed text-zinc-300">
                        “{pick(testimonial.excerpt)}” <span className="not-italic text-zinc-500">· {testimonial.author}</span>
                      </p>
                    )}
                    <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                      <ul className="flex flex-wrap gap-2">
                        {item.stack.map((tech) => (
                          <li key={tech} className="chip">
                            {tech}
                          </li>
                        ))}
                      </ul>
                      <VisitLink url={item.url} />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="experience" className="mt-16 border-y border-white/[0.06] bg-ink-900/40">
        <div className="wrap py-24 md:py-28">
          <SectionHeader index="02" eyebrow={t('work.experienceEyebrow')} title={t('work.experienceTitle')} lead={t('home.experience.lead')} />
          <div className="mt-12">
            <ExperienceGrid items={experience} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
};
