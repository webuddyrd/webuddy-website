import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Globe, Smartphone, Share2, Palette, TrendingUp, Target, Pencil, Code, Rocket, BarChart } from 'lucide-react';
import { ServiceCard } from '../components/ServiceCard';
import { PortfolioCard } from '../components/PortfolioCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { SEO } from '../components/SEO';
import { portfolio } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Home() {
  const { t, i18n } = useTranslation();
  const heroAnimation = useScrollAnimation();
  const servicesAnimation = useScrollAnimation();
  const portfolioAnimation = useScrollAnimation();
  const processAnimation = useScrollAnimation();
  const testimonialsAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  const services = [
    { icon: <Globe size={24} />, titleKey: 'website', descKey: 'website' },
    { icon: <Smartphone size={24} />, titleKey: 'mobileApp', descKey: 'mobileApp' },
    { icon: <Share2 size={24} />, titleKey: 'social', descKey: 'social' },
    { icon: <Palette size={24} />, titleKey: 'branding', descKey: 'branding' },
    { icon: <TrendingUp size={24} />, titleKey: 'strategy', descKey: 'strategy' }
  ];

  const processSteps = [
    { icon: <Target size={32} />, titleKey: 'strategy', descKey: 'strategy' },
    { icon: <Pencil size={32} />, titleKey: 'design', descKey: 'design' },
    { icon: <Code size={32} />, titleKey: 'development', descKey: 'development' },
    { icon: <Rocket size={32} />, titleKey: 'launch', descKey: 'launch' },
    { icon: <BarChart size={32} />, titleKey: 'growth', descKey: 'growth' }
  ];

  const featuredProjects = portfolio.slice(0, 6);

  return (
    <>
      <SEO
        title={t('common.nav.home')}
        description={t('home.hero.subtitle')}
      />

      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-blue-600/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div
            ref={heroAnimation.ref}
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
              heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {t('home.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                {t('common.cta.startProject')}
              </Link>
              <Link
                to="/portfolio"
                className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-lg font-semibold hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                {t('common.cta.viewPortfolio')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section ref={servicesAnimation.ref} className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            servicesAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              {t('home.services.title')}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              {t('home.services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.titleKey}
                icon={service.icon}
                title={t(`home.services.${service.titleKey}.title`)}
                description={t(`home.services.${service.descKey}.description`)}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      <section ref={portfolioAnimation.ref} className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            portfolioAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              {t('home.portfolio.title')}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              {t('home.portfolio.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
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

          <div className="text-center">
            <Link
              to="/portfolio"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              {t('common.cta.viewAll')}
            </Link>
          </div>
        </div>
      </section>

      <section ref={processAnimation.ref} className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            processAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              {t('home.process.title')}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              {t('home.process.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={step.titleKey}
                className={`text-center transition-all duration-700 ${
                  processAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {t(`home.process.${step.titleKey}.title`)}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {t(`home.process.${step.descKey}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={testimonialsAnimation.ref} className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            testimonialsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              {t('home.testimonials.title')}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              {t('home.testimonials.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((num, index) => (
              <TestimonialCard
                key={num}
                quote={t(`home.testimonials.testimonial${num}.quote`)}
                author={t(`home.testimonials.testimonial${num}.author`)}
                role={t(`home.testimonials.testimonial${num}.role`)}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      <section ref={ctaAnimation.ref} className="py-24 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="container mx-auto px-4">
          <div
            className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
              ctaAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('home.cta.title')}
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              {t('home.cta.subtitle')}
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              {t('common.cta.startProject')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
