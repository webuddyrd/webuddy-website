import { createContext, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { localizePath, type Lang } from './routing';

export type Localized<T = string> = Record<Lang, T>;

// The language comes from the URL, so it is provided by the route layout instead of being global state.
export const LangContext = createContext<Lang>('en');

export const useLang = () => useContext(LangContext);

export function useT() {
  return useTranslation(undefined, { lng: useLang() });
}

export function useLocalized() {
  const lang = useLang();
  return <T>(value: Localized<T>): T => value[lang];
}

export function useLocalizedPath() {
  const lang = useLang();
  return (path: string) => localizePath(path, lang);
}
