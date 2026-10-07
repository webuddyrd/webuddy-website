export type Lang = 'en' | 'es';

export const LANGS: readonly Lang[] = ['en', 'es'];

// Remembers the language a visitor picked with the switcher.
export const LANG_STORAGE_KEY = 'webuddy.lang';

// English lives at the root ("/solutions") and Spanish under "/es" ("/es/solutions").
export function langFromPath(pathname: string): Lang {
  return pathname === '/es' || pathname.startsWith('/es/') ? 'es' : 'en';
}

export function stripLang(pathname: string): string {
  if (pathname === '/es') return '/';
  if (pathname.startsWith('/es/')) return pathname.slice(3);
  return pathname;
}

// Takes an unprefixed path (it may include a query or a hash) and returns it for the given language.
export function localizePath(path: string, lang: Lang): string {
  if (lang === 'en') return path;
  const splitAt = path.search(/[?#]/);
  const pathname = splitAt === -1 ? path : path.slice(0, splitAt);
  const suffix = splitAt === -1 ? '' : path.slice(splitAt);
  return (pathname === '/' ? '/es' : `/es${pathname}`) + suffix;
}
