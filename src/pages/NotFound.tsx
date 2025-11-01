import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home } from 'lucide-react';
import { SEO } from '../components/SEO';

export function NotFound() {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t('notFound.title')}
        description={t('notFound.description')}
      />

      <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-9xl font-bold text-blue-600 dark:text-blue-400 mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t('notFound.title')}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              {t('notFound.description')}
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-tr from-[#F64F71] via-[#7A36F4] to-[#FFB02E] text-white rounded-lg font-semibold hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <Home size={20} />
              {t('notFound.backHome')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
