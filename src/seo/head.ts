import { createContext } from 'react';
import { SITE } from '../config/site';
import { LANGS, localizePath, stripLang, type Lang } from '../i18n/routing';

export interface HeadData {
  title: string;
  description: string;
  lang: Lang;
  canonical?: string;
  alternates: { hreflang: string; href: string }[];
  image: string;
  type: 'website' | 'article';
  noindex: boolean;
  jsonLd: object[];
}

// During prerendering the SEO component writes its data here instead of touching the DOM.
export interface HeadCollector {
  head?: HeadData;
}

export const HeadContext = createContext<HeadCollector | null>(null);

const OG_LOCALE: Record<Lang, string> = { en: 'en_US', es: 'es_LA' };

const absolute = (path: string) => `${SITE.url}${path === '/' ? '/' : path.replace(/\/$/, '')}`;

interface BuildHeadOptions {
  title: string;
  description: string;
  lang: Lang;
  pathname: string;
  type?: 'website' | 'article';
  noindex?: boolean;
  jsonLd?: object[];
}

export function buildHead({ title, description, lang, pathname, type = 'website', noindex = false, jsonLd = [] }: BuildHeadOptions): HeadData {
  const base = stripLang(pathname);
  const alternates = noindex
    ? []
    : [
      ...LANGS.map((l) => ({ hreflang: l, href: absolute(localizePath(base, l)) })),
      { hreflang: 'x-default', href: absolute(base) },
    ];
  return {
    title,
    description,
    lang,
    canonical: noindex ? undefined : absolute(localizePath(base, lang)),
    alternates,
    image: `${SITE.url}/og/webuddy-${lang}.png`,
    type,
    noindex,
    jsonLd,
  };
}

const metaTags = (head: HeadData) => [
  { name: 'description', content: head.description },
  { name: 'robots', content: head.noindex ? 'noindex, follow' : 'index, follow' },
  { property: 'og:site_name', content: SITE.name },
  { property: 'og:type', content: head.type },
  { property: 'og:title', content: head.title },
  { property: 'og:description', content: head.description },
  { property: 'og:url', content: head.canonical ?? SITE.url },
  { property: 'og:image', content: head.image },
  { property: 'og:image:width', content: '1200' },
  { property: 'og:image:height', content: '630' },
  { property: 'og:locale', content: OG_LOCALE[head.lang] },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: head.title },
  { name: 'twitter:description', content: head.description },
  { name: 'twitter:image', content: head.image },
];

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function headToHtml(head: HeadData): string {
  const tags = [`<title>${escapeHtml(head.title)}</title>`];
  for (const { name, property, content } of metaTags(head)) {
    const key = name ? `name="${name}"` : `property="${property}"`;
    tags.push(`<meta ${key} content="${escapeHtml(content)}" />`);
  }
  if (head.canonical) tags.push(`<link rel="canonical" href="${head.canonical}" />`);
  for (const alt of head.alternates) {
    tags.push(`<link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}" />`);
  }
  for (const data of head.jsonLd) {
    // "<" is escaped so a string inside the data can never close the script tag.
    tags.push(`<script type="application/ld+json" data-seo>${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`);
  }
  return tags.join('\n    ');
}

function upsert(selector: string, create: () => HTMLElement) {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  return el;
}

// Client-side navigation: keep the tags written by the prerender in sync with the current page.
export function applyHead(head: HeadData) {
  document.title = head.title;
  for (const { name, property, content } of metaTags(head)) {
    const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
    const el = upsert(selector, () => {
      const meta = document.createElement('meta');
      if (name) meta.setAttribute('name', name);
      if (property) meta.setAttribute('property', property);
      return meta;
    });
    el.setAttribute('content', content);
  }

  const canonical = document.head.querySelector('link[rel="canonical"]');
  if (head.canonical) {
    upsert('link[rel="canonical"]', () => Object.assign(document.createElement('link'), { rel: 'canonical' })).setAttribute('href', head.canonical);
  } else {
    canonical?.remove();
  }

  document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());
  for (const alt of head.alternates) {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = alt.hreflang;
    link.href = alt.href;
    document.head.appendChild(link);
  }

  document.head.querySelectorAll('script[data-seo]').forEach((el) => el.remove());
  for (const data of head.jsonLd) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.seo = '';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }
}

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/W.png`,
  email: SITE.email,
  telephone: '+1-849-918-2057',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Santo Domingo',
    addressCountry: 'DO',
  },
  sameAs: [SITE.github, SITE.instagram, SITE.facebook, SITE.linkedin].filter(Boolean),
};
