import { ArrowRight } from 'lucide-react';
import { useLang, useLocalized, useT } from '../i18n/lang';
import { insights, readingMinutes } from '../content/insights';
import { SEO } from '../components/SEO';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { LocalizedLink } from '../components/LocalizedLink';
import { CtaBand } from '../components/sections/CtaBand';
import { formatDate } from '../utils/formatDate';

export const Insights = () => {
  const { t } = useT();
  const lang = useLang();
  const pick = useLocalized();

  return (
    <>
      <SEO title={t('seo.insights.title')} description={t('seo.insights.description')} />
      <PageHero eyebrow={t('insights.eyebrow')} title={t('insights.title')} lead={t('insights.lead')} />

      <section className="wrap">
        <ul className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {insights.map((insight, i) => (
            <Reveal as="li" key={insight.slug} delay={i * 60}>
              <LocalizedLink
                to={`/insights/${insight.slug}`}
                className="group grid gap-4 py-10 md:grid-cols-[12rem_1fr_auto] md:items-start md:gap-10"
              >
                <p className="font-mono text-xs text-zinc-500">
                  {formatDate(insight.date, lang)}
                  <br />
                  {t('insights.readingTime', { count: readingMinutes(pick(insight.body)) })}
                </p>
                <div>
                  <h2 className="text-2xl font-semibold leading-snug text-white transition-colors group-hover:text-zinc-200">
                    {pick(insight.title)}
                  </h2>
                  <p className="mt-3 max-w-2xl leading-relaxed text-zinc-400">{pick(insight.summary)}</p>
                </div>
                <ArrowRight size={20} className="hidden text-zinc-600 transition-all group-hover:translate-x-1 group-hover:text-white md:block" />
              </LocalizedLink>
            </Reveal>
          ))}
        </ul>
      </section>

      <CtaBand title={t('insights.ctaTitle')} text={t('insights.ctaText')} />
    </>
  );
};
