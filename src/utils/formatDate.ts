import type { Lang } from '../i18n/routing';

// Dates are stored as YYYY-MM-DD and formatted in UTC so the prerendered HTML and the browser agree.
export const formatDate = (isoDate: string, lang: Lang) =>
  new Intl.DateTimeFormat(lang === 'es' ? 'es-DO' : 'en-US', { dateStyle: 'long', timeZone: 'UTC' }).format(
    new Date(`${isoDate}T00:00:00Z`)
  );
