import { ArrowRight, Instagram, Github, Facebook, AtSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-webuddy-dark pb-12 overflow-hidden relative">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-webuddy-blue/10 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
                    <div className="max-w-2xl">
                        <h2 className="text-6xl md:text-8xl font-bold font-display tracking-tighter text-white mb-8">
                            {t('common.footer.readyTo')} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-webuddy-blue to-webuddy-electric">{t('common.footer.scaleUp')}</span>
                        </h2>
                        <Link to="/contact" className="group flex items-center gap-4 text-2xl text-white font-medium hover:text-webuddy-blue transition-colors">
                            {t('common.footer.startProject')} <span className="bg-white/10 p-3 rounded-full group-hover:bg-webuddy-blue group-hover:text-white transition-all"><ArrowRight /></span>
                        </Link>
                    </div>

                    <div className="flex flex-col gap-6 text-right w-full md:w-auto">
                        <a href="mailto:hello@webuddy.dev" className="text-2xl text-gray-300 hover:text-white transition-colors">
                            hello@webuddy.dev
                        </a>
                        <p className="text-gray-500">
                            {t('common.footer.city')} <br />
                            {t('common.footer.country')}
                        </p>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        {t('common.footer.rights').replace('2025', new Date().getFullYear().toString())}
                    </p>

                    <div className="flex gap-6">
                        <a href="https://www.instagram.com/webuddyrd/" target='_blank' className="text-gray-400 hover:text-white transition-colors">
                            <Instagram size={20} />
                        </a>
                        <a href="https://www.facebook.com/Webuddyrd" target='_blank' className="text-gray-400 hover:text-white transition-colors">
                            <Facebook size={20} />
                        </a>
                        <a href="https://www.threads.com/@webuddyrd" target='_blank' className="text-gray-400 hover:text-white transition-colors">
                            <AtSign size={20} />
                        </a>
                        <a href="https://github.com/webuddyrd" target='_blank' className="text-gray-400 hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
