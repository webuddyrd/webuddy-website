import { Section } from '../ui/Section';
import { Code, Smartphone, Instagram, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ServiceCard } from '../ServiceCard';
import { useTranslation } from 'react-i18next';

export const Services = () => {
    const { t } = useTranslation();

    const services = [
        {
            icon: Code,
            title: t('home.services.website.title'),
            description: t('home.services.website.description'),
            details: t('home.services.website.features', { returnObjects: true }) as string[]
        },
        {
            icon: Smartphone,
            title: t('home.services.mobileApp.title'),
            description: t('home.services.mobileApp.description'),
            details: t('home.services.mobileApp.features', { returnObjects: true }) as string[]
        },
        {
            icon: Instagram,
            title: t('home.services.social.title'),
            description: t('home.services.social.description'),
            details: t('home.services.social.features', { returnObjects: true }) as string[]
        }
    ];

    return (
        <Section className="py-32 container mx-auto px-4" id="services">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                            {t('home.services.title').split(' ')[0]} <span className="text-webuddy-blue">{t('home.services.title').split(' ').slice(1).join(' ')}</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl">
                            {t('home.services.subtitle')}
                        </p>
                    </div>
                    <Link to="/services" className="flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-white transition-colors">
                        {t('home.services.viewAll')} <ArrowUpRight size={16} />
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                        features={service.details}
                        variant="interactive"
                        index={index}
                    />
                ))}
            </div>
        </Section>
    );
};
