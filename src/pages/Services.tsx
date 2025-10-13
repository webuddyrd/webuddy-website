import { useTranslation } from 'react-i18next';
import { Globe, Smartphone, Share2, Palette, TrendingUp, Check } from 'lucide-react';
import { SEO } from '../components/SEO';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Services() {
  const { t } = useTranslation();
  const heroAnimation = useScrollAnimation();

  const services = [
    {
      icon: <Globe size={40} />,
      key: 'websites',
      features: t('services.websites.features', { returnObjects: true }) as string[]
    },
    {
      icon: <Smartphone size={40} />,
      key: 'mobileApps',
      features: t('services.mobileApps.features', { returnObjects: true }) as string[]
    },
    {
      icon: <Share2 size={40} />,
      key: 'social',
      features: t('services.social.features', { returnObjects: true }) as string[]
    },
    {
      icon: <Palette size={40} />,
      key: 'branding',
      features: t('services.branding.features', { returnObjects: true }) as string[]
    },
    {
      icon: <TrendingUp size={40} />,
      key: 'strategy',
      features: t('services.strategy.features', { returnObjects: true }) as string[]
    }
  ];

  return (
    <>
      <SEO
        title={t('common.nav.services')}
        description={t('services.hero.subtitle')}
      />

      <section ref={heroAnimation.ref} className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950">
        <div className="container mx-auto px-4">
          <div
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
              heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              {t('services.hero.title')}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              {t('services.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => {
              const animation = useScrollAnimation();
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.key}
                  ref={animation.ref}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
                    animation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  } ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="w-16 h-16 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                      {service.icon}
                    </div>
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                      {t(`services.${service.key}.title`)}
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                      {t(`services.${service.key}.description`)}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={20} />
                          <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={isEven ? '' : 'lg:order-1'}>
                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-slate-100 dark:from-blue-900/30 dark:to-slate-800 p-12 flex items-center justify-center">
                      <div className="text-blue-600 dark:text-blue-400" style={{ transform: 'scale(3)' }}>
                        {service.icon}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
