import { useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Printer } from 'lucide-react';
import { useLang, useLocalized, useT } from '../i18n/lang';
import { getInsight, readingMinutes, type Block } from '../content/insights';
import { getSolution } from '../content/solutions';
import { SITE } from '../config/site';
import { localizePath } from '../i18n/routing';
import { SEO } from '../components/SEO';
import { LocalizedLink } from '../components/LocalizedLink';
import { CtaBand } from '../components/sections/CtaBand';
import { formatDate } from '../utils/formatDate';
import { NotFound } from './NotFound';

function printBrief() {
  const root = document.documentElement;
  root.classList.add('print-brief');
  window.addEventListener('afterprint', () => root.classList.remove('print-brief'), { once: true });
  window.print();
}

function ArticleBlock({ block }: { block: Block }) {
  const { t } = useT();

  switch (block.type) {
    case 'h2':
      return <h2 className="mt-12 text-2xl font-semibold text-white">{block.text}</h2>;
    case 'p':
      return <p className="mt-5 text-lg leading-relaxed text-zinc-300">{block.text}</p>;
    case 'list':
      return (
        <ul className="mt-5 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-lg leading-relaxed text-zinc-300">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      );
    case 'callout':
      return (
        <aside className="mt-10 rounded-2xl border border-white/[0.1] bg-ink-900 p-7">
          <p className="eyebrow text-brand-accent">{block.title}</p>
          <p className="mt-3 text-lg leading-relaxed text-zinc-200">{block.text}</p>
        </aside>
      );
    case 'checklist':
      return (
        <aside className="mt-10 rounded-2xl border border-white/[0.1] bg-ink-900 p-7">
          <p className="font-semibold text-white">{block.title}</p>
          <ul className="mt-4 space-y-3">
            {block.items.map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed text-zinc-300">
                <Check size={18} className="mt-1 shrink-0 text-brand-accent" />
                {item}
              </li>
            ))}
          </ul>
        </aside>
      );
    case 'brief':
      return (
        <section className="brief mt-12 rounded-2xl border border-white/[0.1] bg-ink-900 p-7 md:p-9">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-white">{block.title}</h2>
              <p className="mt-2 max-w-xl leading-relaxed text-zinc-400">{block.intro}</p>
            </div>
            <button
              type="button"
              onClick={printBrief}
              className="no-print inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-white/[0.04]"
            >
              <Printer size={16} />
              {t('insights.print')}
            </button>
          </div>
          <ol className="mt-8 space-y-6">
            {block.fields.map((field, i) => (
              <li key={field.label} className="border-t border-white/[0.08] pt-5">
                <p className="font-medium text-white">
                  <span className="mr-3 font-mono text-xs text-brand-accent">{String(i + 1).padStart(2, '0')}</span>
                  {field.label}
                </p>
                <p className="mt-1 text-sm text-zinc-500">{field.hint}</p>
                <div className="mt-4 h-16 rounded-lg border border-dashed border-white/[0.12]" aria-hidden="true" />
              </li>
            ))}
          </ol>
          <p className="mt-10 hidden font-mono text-xs print:block">
            Webuddy · {SITE.url.replace('https://', '')} · {SITE.email} · {SITE.phone.display}
          </p>
        </section>
      );
  }
}

export const InsightArticle = () => {
  const { slug } = useParams();
  const { t } = useT();
  const lang = useLang();
  const pick = useLocalized();
  const insight = getInsight(slug);

  if (!insight) return <NotFound />;

  const body = pick(insight.body);
  const solution = getSolution(insight.solution);
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: pick(insight.title),
    description: pick(insight.summary),
    datePublished: insight.date,
    inLanguage: lang,
    url: `${SITE.url}${localizePath(`/insights/${insight.slug}`, lang)}`,
    author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    publisher: { '@type': 'Organization', name: SITE.name, logo: { '@type': 'ImageObject', url: `${SITE.url}/brand/webuddy-icon-512.png` } },
  };

  return (
    <>
      <SEO title={`${pick(insight.title)} | Webuddy`} description={pick(insight.summary)} type="article" jsonLd={[articleJsonLd]} />

      <article className="wrap pb-8 pt-32 md:pt-40">
        <div className="mx-auto max-w-3xl">
          <LocalizedLink to="/insights" className="no-print inline-flex items-center gap-2 font-mono text-xs text-zinc-500 transition-colors hover:text-white">
            <ArrowLeft size={14} />
            {t('insights.back')}
          </LocalizedLink>
          <h1 className="mt-8 animate-fade-up text-4xl font-semibold leading-[1.1] text-white md:text-5xl">{pick(insight.title)}</h1>
          <p className="mt-6 animate-fade-up text-xl leading-relaxed text-zinc-400 [animation-delay:80ms]">{pick(insight.summary)}</p>
          <p className="mt-8 flex flex-wrap gap-x-4 gap-y-1 border-y border-white/[0.08] py-4 font-mono text-xs text-zinc-500">
            <span>{t('insights.by')}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={insight.date}>{formatDate(insight.date, lang)}</time>
            <span aria-hidden="true">·</span>
            <span>{t('insights.readingTime', { count: readingMinutes(body) })}</span>
          </p>

          <div className="mt-6">
            {body.map((block, i) => (
              <ArticleBlock key={i} block={block} />
            ))}
          </div>

          {solution && (
            <LocalizedLink
              to={`/solutions/${solution.slug}`}
              className="no-print card group mt-14 flex items-center justify-between gap-6 p-6 transition-colors hover:border-white/20"
            >
              <span className="flex items-center gap-4">
                <solution.icon size={20} className="shrink-0 text-brand-accent" />
                <span>
                  <span className="eyebrow block">{t('insights.relatedSolution')}</span>
                  <span className="mt-1 block font-semibold text-white">{pick(solution.title)}</span>
                </span>
              </span>
              <ArrowRight size={18} className="shrink-0 text-zinc-500 transition-all group-hover:translate-x-1 group-hover:text-white" />
            </LocalizedLink>
          )}
        </div>
      </article>

      <div className="no-print">
        <CtaBand title={t('insights.ctaTitle')} text={t('insights.ctaText')} need={insight.solution} />
      </div>
    </>
  );
};
