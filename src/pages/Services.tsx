import { Section } from '../components/ui/Section';
import { ServiceCard } from '../components/ServiceCard';
import { motion } from 'framer-motion';
import { Code, Smartphone, Palette, Globe, Instagram, Cpu } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Code,
      title: t('services.websites.title'),
      description: t('services.websites.description'),
      features: t('services.websites.features', { returnObjects: true }) as string[]
    },
    {
      icon: Smartphone,
      title: t('services.mobileApps.title'),
      description: t('services.mobileApps.description'),
      features: t('services.mobileApps.features', { returnObjects: true }) as string[]
    },
    {
      icon: Instagram,
      title: t('services.social.title'),
      description: t('services.social.description'),
      features: t('services.social.features', { returnObjects: true }) as string[]
    },
    {
      icon: Globe,
      title: t('services.strategy.title'),
      description: t('services.strategy.description'),
      features: t('services.strategy.features', { returnObjects: true }) as string[]
    },
    {
      icon: Palette,
      title: t('services.branding.title'),
      description: t('services.branding.description'),
      features: t('services.branding.features', { returnObjects: true }) as string[]
    },
    {
      icon: Cpu,
      title: t('services.automation.title'),
      description: t('services.automation.description'),
      features: t('services.automation.features', { returnObjects: true }) as string[]
    }
  ];

  return (
    <div className="bg-webuddy-dark min-h-screen pt-32 pb-20">
      <Section>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.h1
              className="text-5xl md:text-7xl font-display font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {t('services.hero.title').split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-webuddy-blue to-webuddy-electric">{t('services.hero.title').split(' ').slice(1).join(' ')}</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {t('services.hero.subtitle')}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                variant="static"
                index={index}
              />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};
