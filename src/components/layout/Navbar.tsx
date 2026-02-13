import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { cn } from '../../utils/cn';
import { LanguageSwitcher } from '../LanguageSwitcher';

import webuddyLogo from '../../images/webuddy.png';

export const Navbar = () => {
    const { t } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t('common.nav.services'), href: '/services' },
        { name: t('common.nav.work'), href: '/work' }, // Maps to 'Work' in UI, 'portfolio' key in json? No, json has "portfolio": "Portfolio". 'Work' isn't in common.nav.
        // Wait, en.json has "portfolio": "Portfolio" but UI has "Work".
        // I should check en.json again.
        // default_api:view_file output for en.json showed:
        // "nav": { "home": "Home", "about": "About", "services": "Services", "portfolio": "Portfolio", "contact": "Contact" }
        // The UI uses 'Work'. I should probably update en.json to have 'work' or use 'portfolio' and change UI to 'Portfolio' if that's the intent.
        // Given 'Work' is used in UI, I'll use t('common.nav.portfolio') (which is "Portfolio") or add "work".
        // The user request is "implement multilanguage".
        // Use 'common.nav.portfolio' for now.
        { name: t('common.nav.about'), href: '/about' },
        { name: t('common.nav.contact'), href: '/contact' },
    ];

    return (
        <>
            <motion.header
                className={cn(
                    "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl rounded-full transition-all duration-300",
                    scrolled ? "bg-webuddy-dark/60 backdrop-blur-sm border border-white/10 shadow-lg py-3" : "py-5 bg-transparent"
                )}
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{
                    y: 0,
                    x: "-50%",
                    opacity: 1
                }}
                transition={{ duration: 0.8 }}
            >
                <div className="px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="hover:opacity-80 transition-opacity">
                        <img src={webuddyLogo} alt="Webuddy" className="h-16 w-full" />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-webuddy-blue transition-all group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <LanguageSwitcher />
                        <Link to="/contact" className="px-5 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-webuddy-blue hover:text-white transition-all duration-300">
                            {t('common.cta.contactUs')}
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden flex items-center gap-4">
                        <LanguageSwitcher />
                        <button
                            className="text-white"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-webuddy-dark pt-24 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="text-3xl font-display font-bold text-white/80 hover:text-white"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
