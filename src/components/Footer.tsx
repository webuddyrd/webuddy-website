import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';
import W from '../images/W.png';

export function Footer() {
  const { t } = useTranslation();

  const navLinks = [
    { path: '/', label: t('common.nav.home') },
    { path: '/about', label: t('common.nav.about') },
    { path: '/services', label: t('common.nav.services') },
    { path: '/portfolio', label: t('common.nav.portfolio') },
    { path: '/contact', label: t('common.nav.contact') }
  ];

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' }
  ];

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg">
                <img className='w-24' src={W} />
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white">Webuddy</span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              {t('home.hero.subtitle')}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
              {t('common.footer.quickLinks')}
            </h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
              {t('common.footer.followUs')}
            </h3>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-gradient-to-tr from-[#F64F71] via-[#7A36F4] to-[#FFB02E] hover:text-white transition-colors"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            {t('common.footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
