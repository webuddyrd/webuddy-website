import { Facebook, Github, Instagram, Linkedin } from 'lucide-react';
import { useLocalized, useT } from '../../i18n/lang';
import { solutions } from '../../content/solutions';
import { SITE, whatsappUrl } from '../../config/site';
import { LocalizedLink } from '../LocalizedLink';
import { Logo } from '../Logo';

export const Footer = () => {
  const { t } = useT();
  const pick = useLocalized();

  const company = [
    { to: '/work', label: t('common.nav.work') },
    { to: '/how-we-work', label: t('common.nav.howWeWork') },
    { to: '/about', label: t('common.nav.about') },
    { to: '/insights', label: t('common.nav.insights') },
    { to: '/contact', label: t('common.nav.contact') },
  ];

  const socials = [
    { href: SITE.linkedin, label: 'LinkedIn', icon: Linkedin },
    { href: SITE.github, label: 'GitHub', icon: Github },
    { href: SITE.instagram, label: 'Instagram', icon: Instagram },
    { href: SITE.facebook, label: 'Facebook', icon: Facebook },
  ].filter((social) => social.href);

  const linkClass = 'text-sm text-zinc-400 transition-colors hover:text-white';

  return (
    <footer className="no-print border-t border-white/[0.08] bg-ink-950">
      <div className="wrap grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-zinc-400">{t('common.footer.tagline')}</p>
          <p className="mt-6 text-sm leading-relaxed text-zinc-500">
            {t('common.footer.location')}
            <br />
            {t('common.footer.timezone')}
          </p>
        </div>

        <nav className="md:col-span-3" aria-label={t('common.nav.solutions')}>
          <p className="eyebrow">{t('common.nav.solutions')}</p>
          <ul className="mt-5 space-y-3">
            {solutions.map((solution) => (
              <li key={solution.slug}>
                <LocalizedLink to={`/solutions/${solution.slug}`} className={linkClass}>
                  {pick(solution.title)}
                </LocalizedLink>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="md:col-span-2" aria-label={t('common.footer.company')}>
          <p className="eyebrow">{t('common.footer.company')}</p>
          <ul className="mt-5 space-y-3">
            {company.map((link) => (
              <li key={link.to}>
                <LocalizedLink to={link.to} className={linkClass}>
                  {link.label}
                </LocalizedLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <p className="eyebrow">{t('common.footer.contact')}</p>
          <ul className="mt-5 space-y-3">
            <li>
              <a href={`mailto:${SITE.email}`} className={linkClass}>
                {SITE.email}
              </a>
            </li>
            <li>
              <a href={whatsappUrl(t('common.whatsappMessage'))} target="_blank" rel="noopener noreferrer" className={linkClass}>
                WhatsApp · {SITE.phone.display}
              </a>
            </li>
          </ul>
          <ul className="mt-6 flex gap-2">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition-colors hover:border-white/25 hover:text-white"
                >
                  <social.icon size={16} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/[0.06]">
        <p className="wrap py-6 text-xs text-zinc-500">
          © {new Date().getFullYear()} Webuddy. {t('common.footer.rights')}
        </p>
      </div>
    </footer>
  );
};
