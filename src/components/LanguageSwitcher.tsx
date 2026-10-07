import { Link, useLocation } from 'react-router-dom';
import { useLang, useT } from '../i18n/lang';
import { LANG_STORAGE_KEY, LANGS, localizePath, stripLang, type Lang } from '../i18n/routing';
import { cn } from '../utils/cn';

function remember(lang: Lang) {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch {
    // Storage can be unavailable (private mode); the URL still carries the language.
  }
}

export function LanguageSwitcher({ className }: { className?: string }) {
  const lang = useLang();
  const { t } = useT();
  const { pathname } = useLocation();
  const base = stripLang(pathname);

  return (
    <div
      role="group"
      aria-label={t('common.lang.label')}
      className={cn('flex items-center rounded-lg border border-white/10 p-0.5 font-mono text-xs', className)}
    >
      {LANGS.map((l) => (
        <Link
          key={l}
          to={localizePath(base, l)}
          hrefLang={l}
          lang={l}
          title={t(`common.lang.${l}`)}
          aria-current={l === lang ? 'true' : undefined}
          onClick={() => remember(l)}
          className={cn(
            'rounded-md px-2 py-1 uppercase transition-colors',
            l === lang ? 'bg-white/10 text-white' : 'text-zinc-500 hover:text-white'
          )}
        >
          {l}
        </Link>
      ))}
    </div>
  );
}
