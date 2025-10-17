import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PortfolioCard } from '../components/PortfolioCard';
import { SEO } from '../components/SEO';
import { portfolio } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Portfolio() {
  const { t, i18n } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');
  const heroAnimation = useScrollAnimation();

  const filters = [
    { key: 'all', label: t('portfolio.filters.all') },
    { key: 'Web', label: t('portfolio.filters.web') },
    { key: 'App', label: t('portfolio.filters.apps') },
    { key: 'Ecommerce', label: t('portfolio.filters.ecommerce') },
    { key: 'Branding', label: t('portfolio.filters.branding') }
  ];

  const filteredPortfolio = activeFilter === 'all'
    ? portfolio
    : portfolio.filter(item => item.tags.includes(activeFilter));

  return (
    <>
      <SEO
        title={t('common.nav.portfolio')}
        description={t('portfolio.hero.subtitle')}
      />

      <section ref={heroAnimation.ref} className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950">
        <div className="container mx-auto px-4">
          <div
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
              heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              {t('portfolio.hero.title')}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              {t('portfolio.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map(filter => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeFilter === filter.key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((project, index) => (
              <PortfolioCard
                key={project.title}
                title={project.title}
                description={i18n.language === 'es' ? project.description_es : project.description_en}
                image={project.image}
                url={project.url}
                tags={project.tags}
                delay={index * 100}
              />
            ))}
          </div>

          {filteredPortfolio.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-slate-600 dark:text-slate-400">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
