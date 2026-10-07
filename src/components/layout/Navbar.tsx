import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight, ChevronDown, Menu, MessageCircle, X } from 'lucide-react';
import { useLocalized, useT } from '../../i18n/lang';
import { stripLang } from '../../i18n/routing';
import { solutions } from '../../content/solutions';
import { whatsappUrl } from '../../config/site';
import { cn } from '../../utils/cn';
import { LocalizedLink } from '../LocalizedLink';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { Logo } from '../Logo';
import { ButtonLink, ExternalButton } from '../ui/Button';

export const Navbar = () => {
  const { t } = useT();
  const pick = useLocalized();
  const { pathname } = useLocation();
  const base = stripLang(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverOpenedAt = useRef(0);

  const links = [
    { to: '/work', label: t('common.nav.work') },
    { to: '/how-we-work', label: t('common.nav.howWeWork') },
    { to: '/about', label: t('common.nav.about') },
    { to: '/insights', label: t('common.nav.insights') },
  ];
  const isActive = (to: string) => base === to || base.startsWith(`${to}/`);

  useEffect(() => {
    setMenuOpen(false);
    setSolutionsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!solutionsOpen) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) setSolutionsOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSolutionsOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [solutionsOpen]);

  const navLinkClass = (active: boolean) =>
    cn(
      'rounded-lg px-3 py-2 text-sm transition-colors',
      active ? 'text-white' : 'text-zinc-400 hover:text-white'
    );

  return (
    <>
      <header
        className={cn(
          'no-print fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
          scrolled || menuOpen ? 'border-white/[0.08] bg-ink-950/85 backdrop-blur-md' : 'border-transparent'
        )}
      >
        <div className="wrap flex h-16 items-center justify-between gap-6">
          <LocalizedLink to="/" aria-label={t('common.a11y.home')} className="shrink-0">
            <Logo />
          </LocalizedLink>

          <nav className="hidden items-center gap-1 lg:flex">
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => {
                hoverOpenedAt.current = Date.now();
                setSolutionsOpen(true);
              }}
              onMouseLeave={() => setSolutionsOpen(false)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setSolutionsOpen(false);
              }}
            >
              <button
                type="button"
                aria-expanded={solutionsOpen}
                aria-controls="solutions-menu"
                // A click right after hovering would otherwise close the menu the hover just opened.
                onClick={() => setSolutionsOpen((open) => !open || Date.now() - hoverOpenedAt.current < 400)}
                className={cn(navLinkClass(isActive('/solutions')), 'flex items-center gap-1')}
              >
                {t('common.nav.solutions')}
                <ChevronDown size={14} className={cn('transition-transform', solutionsOpen && 'rotate-180')} />
              </button>
              <div
                id="solutions-menu"
                className={cn(
                  'absolute left-0 top-full pt-3 transition duration-200',
                  solutionsOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'
                )}
              >
                <div className="grid w-[660px] grid-cols-2 gap-1 rounded-2xl border border-white/10 bg-ink-900/95 p-2 shadow-2xl shadow-black/50 backdrop-blur-xl">
                  {solutions.map((solution) => (
                    <LocalizedLink
                      key={solution.slug}
                      to={`/solutions/${solution.slug}`}
                      className="group flex gap-3 rounded-xl p-3 transition-colors hover:bg-white/[0.05]"
                    >
                      <solution.icon size={18} className="mt-0.5 shrink-0 text-zinc-500 transition-colors group-hover:text-brand-accent" />
                      <span>
                        <span className="block text-sm font-medium text-white">{pick(solution.title)}</span>
                        <span className="mt-1 block text-xs leading-relaxed text-zinc-500">{pick(solution.short)}</span>
                      </span>
                    </LocalizedLink>
                  ))}
                  <LocalizedLink
                    to="/solutions"
                    className="flex items-center justify-between rounded-xl p-3 text-sm text-zinc-300 transition-colors hover:bg-white/[0.05] hover:text-white"
                  >
                    {t('common.cta.allSolutions')}
                    <ArrowRight size={14} />
                  </LocalizedLink>
                </div>
              </div>
            </div>
            {links.map((link) => (
              <LocalizedLink
                key={link.to}
                to={link.to}
                aria-current={isActive(link.to) ? 'page' : undefined}
                className={navLinkClass(isActive(link.to))}
              >
                {link.label}
              </LocalizedLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher />
            <ButtonLink to="/contact" className="px-4 py-2">
              {t('common.cta.talk')}
            </ButtonLink>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? t('common.a11y.closeMenu') : t('common.a11y.openMenu')}
              onClick={() => setMenuOpen((open) => !open)}
              className="rounded-lg p-2 text-white hover:bg-white/[0.06]"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Rendered outside the header: its backdrop-filter would trap this fixed panel inside the 64px bar. */}
      {menuOpen && (
        <div id="mobile-menu" className="no-print fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-ink-950 lg:hidden">
          <div className="wrap flex flex-col gap-8 py-8">
            <div>
              <LocalizedLink to="/solutions" className="eyebrow">
                {t('common.nav.solutions')}
              </LocalizedLink>
              <ul className="mt-3 flex flex-col">
                {solutions.map((solution) => (
                  <li key={solution.slug}>
                    <LocalizedLink
                      to={`/solutions/${solution.slug}`}
                      className="flex items-center gap-3 py-2.5 text-base text-zinc-200"
                    >
                      <solution.icon size={18} className="shrink-0 text-zinc-500" />
                      {pick(solution.title)}
                    </LocalizedLink>
                  </li>
                ))}
              </ul>
            </div>
            <ul className="flex flex-col border-t border-white/[0.08] pt-6">
              {[...links, { to: '/contact', label: t('common.nav.contact') }].map((link) => (
                <li key={link.to}>
                  <LocalizedLink to={link.to} className="block py-2.5 font-display text-2xl font-medium text-white">
                    {link.label}
                  </LocalizedLink>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3">
              <ButtonLink to="/contact">
                {t('common.cta.talk')}
                <ArrowRight size={16} />
              </ButtonLink>
              <ExternalButton href={whatsappUrl(t('common.whatsappMessage'))} variant="secondary">
                <MessageCircle size={16} />
                {t('common.cta.whatsapp')}
              </ExternalButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
