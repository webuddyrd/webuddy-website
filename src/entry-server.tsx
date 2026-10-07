import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import './i18n/config';
import App from './App';
import { HeadContext, headToHtml, type HeadCollector } from './seo/head';
import { LANGS, langFromPath, localizePath } from './i18n/routing';
import { staticPaths } from './routes';
import { SITE } from './config/site';

// Used at build time by scripts/prerender.mjs.
export const siteUrl = SITE.url;

export const pages = LANGS.flatMap((lang) =>
  staticPaths.map((path) => ({ path: localizePath(path, lang), base: path, lang }))
);

export function render(url: string) {
  const collector: HeadCollector = {};
  const html = renderToString(
    <StrictMode>
      <HeadContext.Provider value={collector}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HeadContext.Provider>
    </StrictMode>
  );
  return {
    html,
    head: collector.head ? headToHtml(collector.head) : '',
    lang: langFromPath(url),
  };
}
