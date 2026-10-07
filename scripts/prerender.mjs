// Turns the client build into static HTML: one file per page and language, a 404 page and a sitemap.
// Runs after `vite build` (client) and `vite build --ssr src/entry-server.tsx --outDir dist-server`.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const serverDir = path.join(root, 'dist-server');

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const { render, pages, siteUrl } = await import(pathToFileURL(path.join(serverDir, 'entry-server.js')).href);

const fill = ({ html, head, lang }) =>
  template
    .replace('<html lang="en">', `<html lang="${lang}">`)
    .replace('<!--app-head-->', head)
    .replace('<!--app-html-->', html);

// Flat files ("/es/about" -> es/about.html) are served at extensionless URLs by Vercel's
// cleanUrls and by `vite preview`, without relying on directory-index resolution.
for (const page of pages) {
  const file = page.path === '/' ? 'index.html' : `${page.path.slice(1)}.html`;
  const out = path.join(dist, file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, fill(render(page.path)));
}

// The 404 page ships without prerendered markup: the client renders it in the language of the requested URL.
fs.writeFileSync(path.join(dist, '404.html'), fill({ ...render('/404'), html: '' }));

const url = (p) => `${siteUrl}${p === '/' ? '/' : p}`;
const entries = pages.map((page) => {
  const alternates = pages
    .filter((alt) => alt.base === page.base)
    .map((alt) => `    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${url(alt.path)}" />`)
    .join('\n');
  return `  <url>\n    <loc>${url(page.path)}</loc>\n${alternates}\n    <xhtml:link rel="alternate" hreflang="x-default" href="${url(page.base)}" />\n  </url>`;
});
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join('\n')}\n</urlset>\n`
);

fs.rmSync(serverDir, { recursive: true, force: true });
console.log(`Prerendered ${pages.length} pages, 404.html and sitemap.xml.`);
