import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';
import Logo from '../images/webuddy.png';

export function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: t('common.nav.home') },
    { path: '/about', label: t('common.nav.about') },
    { path: '/services', label: t('common.nav.services') },
    { path: '/portfolio', label: t('common.nav.portfolio') },
    { path: '/contact', label: t('common.nav.contact') }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <img className='h-40' src={Logo} />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${isActive(link.path)
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-slate-700 dark:text-slate-300'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <Link
              to="/contact"
              className="ml-4 px-6 py-2.5 bg-gradient-to-tr from-[#F64F71] via-[#7A36F4] to-[#FFB02E] text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              {t('common.cta.startProject')}
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-medium transition-colors ${isActive(link.path)
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-slate-700 dark:text-slate-300'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 pt-4 border-t border-slate-200 dark:border-slate-800">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="px-6 py-2.5 bg-gradient-to-tr from-[#F64F71] via-[#7A36F4] to-[#FFB02E] text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
            >
              {t('common.cta.startProject')}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
