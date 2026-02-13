import { motion } from 'framer-motion';
import AnimatedCounter from '../ui/AnimatedCounter';
import { useTranslation } from 'react-i18next';

export const Trust = () => {
    const { t } = useTranslation();

    const metrics = [
        { label: t('home.trust.yearsExperience'), value: 6, suffix: "+" },
        { label: t('home.trust.projectsDelivered'), value: 15, suffix: "+" },
        { label: t('home.trust.clientSatisfaction'), value: 100, suffix: "%" },
        { label: t('home.trust.countriesServed'), value: 3, suffix: "+" },
    ];

    const clients = [
        "TechCorp", "InnovateX", "FutureFlow", "DataSystems", "CloudNine", "AlphaWave", "NextGen", "SmartSoft"
    ];

    return (
        <section className="py-24 bg-black border-y border-white/5">
            <div className="container mx-auto px-4 md:px-6 mb-20 text-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors border border-white/5"
                        >
                            <h3 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-webuddy-blue to-webuddy-electric mb-2">
                                <AnimatedCounter to={metric.value} suffix={metric.suffix} />
                            </h3>
                            <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">{metric.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="w-full overflow-hidden relative">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

                <div className="flex animate-scroll whitespace-nowrap">
                    {[...clients, ...clients, ...clients].map((client, i) => (
                        <span key={i} className="text-2xl font-bold text-white/20 mx-12 font-display uppercase tracking-widest">
                            {client}
                        </span>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 30s linear infinite;
                }
            `}</style>
        </section>
    );
};
