import { useT } from '../i18n/lang';
import { SEO } from '../components/SEO';
import { ButtonLink } from '../components/ui/Button';

export const NotFound = () => {
  const { t } = useT();

  return (
    <section className="wrap flex min-h-[80vh] flex-col items-start justify-center pb-24 pt-32">
      <SEO title={t('seo.notFound.title')} description={t('seo.notFound.description')} noindex />
      <p className="eyebrow text-brand-accent">404</p>
      <h1 className="mt-5 text-4xl font-semibold text-white md:text-6xl">{t('notFound.title')}</h1>
      <p className="mt-5 max-w-lg text-lg text-zinc-400">{t('notFound.description')}</p>
      <div className="mt-9 flex flex-wrap gap-3">
        <ButtonLink to="/">{t('notFound.backHome')}</ButtonLink>
        <ButtonLink to="/solutions" variant="secondary">
          {t('common.cta.allSolutions')}
        </ButtonLink>
      </div>
    </section>
  );
};
