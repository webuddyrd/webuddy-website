import type { ReactNode } from 'react';
import { ArrowUpRight, CalendarDays, Facebook, Globe, Instagram, Linkedin, Mail, MessageCircle, type LucideIcon } from 'lucide-react';
import { useT } from '../i18n/lang';
import { SITE, whatsappUrl } from '../config/site';
import { SEO } from '../components/SEO';
import { LocalizedLink } from '../components/LocalizedLink';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { buttonClass } from '../components/ui/buttonStyles';

// Link-in-bio page for social profiles (replaces the Linktree). It renders without the navbar
// and footer (see barePaths in src/routes.ts) and is kept out of the sitemap.

interface ChannelLink {
  icon: LucideIcon;
  label: string;
  hint: string;
  href: string;
  internal?: boolean;
}

const cardClass =
  'group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-ink-900/80 p-4 transition-colors hover:border-white/20 hover:bg-ink-850';

function ChannelCard({ link, delay }: { link: ChannelLink; delay: number }) {
  const content: ReactNode = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
        <link.icon size={20} className="text-brand-accent" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-medium text-white">{link.label}</span>
        <span className="mt-0.5 block truncate text-sm text-zinc-500">{link.hint}</span>
      </span>
      <ArrowUpRight size={18} className="shrink-0 text-zinc-600 transition-colors group-hover:text-white" />
    </>
  );
  const style = { animationDelay: `${delay}ms` };

  return (
    <li className="animate-fade-up" style={style}>
      {link.internal ? (
        <LocalizedLink to={link.href} className={cardClass}>
          {content}
        </LocalizedLink>
      ) : (
        <a href={link.href} target={link.href.startsWith('mailto:') ? undefined : '_blank'} rel="noopener noreferrer" className={cardClass}>
          {content}
        </a>
      )}
    </li>
  );
}

export const ConnectWithUs = () => {
  const { t } = useT();

  const channels: ChannelLink[] = [
    { icon: Globe, label: t('connect.website'), hint: t('connect.websiteHint'), href: '/', internal: true },
    { icon: Linkedin, label: 'LinkedIn', hint: t('connect.linkedinHint'), href: SITE.linkedin },
    { icon: Instagram, label: 'Instagram', hint: '@webuddyrd', href: SITE.instagram },
    { icon: Facebook, label: 'Facebook', hint: 'Webuddyrd', href: SITE.facebook },
    { icon: Mail, label: t('connect.email'), hint: SITE.email, href: `mailto:${SITE.email}` },
  ].filter((link) => link.href);

  const explore = [
    { to: '/solutions', label: t('common.nav.solutions') },
    { to: '/work', label: t('common.nav.work') },
    { to: '/how-we-work', label: t('common.nav.howWeWork') },
    { to: '/insights', label: t('common.nav.insights') },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <SEO title={`${t('seo.connect.title')} | Webuddy`} description={t('seo.connect.description')} noindex />
      <span className="absolute inset-x-0 top-0 h-1 bg-brand-gradient" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-[-12rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-brand-teal-light/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,black,transparent)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-md flex-col px-5 pb-12 pt-6">
        <div className="flex justify-end">
          <LanguageSwitcher />
        </div>

        <header className="mt-6 flex animate-fade-up flex-col items-center text-center">
          <LocalizedLink to="/" aria-label={t('common.a11y.home')}>
            <img src="/images/webuddy-icono-color-fondo-oscuro.svg" alt="" width={96} height={64} className="h-16 w-auto" />
          </LocalizedLink>
          <h1 className="mt-5 text-2xl font-semibold text-white">Webuddy</h1>
          <p className="mt-1 font-mono text-xs text-zinc-500">@webuddyrd</p>
          <p className="mt-6 font-display text-[1.65rem] font-semibold leading-tight text-white">{t('home.hero.title')}</p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">{t('connect.subtitle')}</p>
        </header>

        <div className="mt-8 flex animate-fade-up flex-col gap-3 [animation-delay:80ms]">
          <a href={whatsappUrl(t('common.whatsappMessage'))} target="_blank" rel="noopener noreferrer" className={buttonClass('primary', 'w-full py-3.5 text-base')}>
            <MessageCircle size={18} />
            {t('connect.whatsapp')}
          </a>
          {SITE.calendarUrl && (
            <a href={SITE.calendarUrl} target="_blank" rel="noopener noreferrer" className={buttonClass('secondary', 'w-full py-3.5 text-base')}>
              <CalendarDays size={18} />
              {t('connect.calendar')}
            </a>
          )}
        </div>

        <p className="eyebrow mt-10">{t('connect.linksTitle')}</p>
        <ul className="mt-4 flex flex-col gap-3">
          {channels.map((link, i) => (
            <ChannelCard key={link.label} link={link} delay={140 + i * 50} />
          ))}
        </ul>

        <p className="eyebrow mt-10">{t('connect.explore')}</p>
        <ul className="mt-4 grid grid-cols-2 gap-3">
          {explore.map((item) => (
            <li key={item.to}>
              <LocalizedLink
                to={item.to}
                className="block rounded-xl border border-white/[0.08] px-4 py-3 text-center text-sm text-zinc-300 transition-colors hover:border-white/20 hover:text-white"
              >
                {item.label}
              </LocalizedLink>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-center font-mono text-[11px] text-zinc-600">
          © {new Date().getFullYear()} Webuddy · {t('common.footer.location')}
        </p>
      </div>
    </div>
  );
};
