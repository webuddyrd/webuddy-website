import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { LangContext, useT } from '../../i18n/lang';
import { LANG_STORAGE_KEY, localizePath, type Lang } from '../../i18n/routing';
import ScrollToTop from '../ScrollToTop';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

let languageChecked = false;

// On the first visit to an English page, send Spanish-speaking visitors to the Spanish version.
// It never redirects away from a Spanish URL, so crawlers can always index both languages.
function LanguageRedirect({ lang }: { lang: Lang }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (languageChecked) return;
    languageChecked = true;
    if (lang !== 'en') return;

    let preferred: string | null = null;
    try {
      preferred = localStorage.getItem(LANG_STORAGE_KEY);
    } catch {
      // Storage unavailable: fall back to the browser language.
    }
    const browserLang = (navigator.languages?.[0] ?? navigator.language ?? '').toLowerCase();
    if (preferred === 'es' || (!preferred && browserLang.startsWith('es'))) {
      navigate(localizePath(location.pathname, 'es') + location.search + location.hash, { replace: true });
    }
  }, [lang, location, navigate]);

  return null;
}

function SkipLink() {
  const { t } = useT();
  return (
    <a
      href="#main"
      className="sr-only z-[60] rounded-lg bg-white px-4 py-2 text-sm font-medium text-ink-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
    >
      {t('common.a11y.skip')}
    </a>
  );
}

export function LanguageLayout({ lang }: { lang: Lang }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider value={lang}>
      <LanguageRedirect lang={lang} />
      <ScrollToTop />
      <SkipLink />
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </LangContext.Provider>
  );
}
