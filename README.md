# Webuddy — sitio web

Sitio de [www.webuddy.dev](https://www.webuddy.dev): React, Vite y Tailwind. Inglés en la raíz (`/solutions`) y español bajo `/es` (`/es/solutions`). Todas las páginas se prerenderizan a HTML estático en ambos idiomas.

## Comandos

- `npm run dev`: servidor de desarrollo (sin prerender).
- `npm run build`: compila el cliente, renderiza cada página y cada idioma a HTML y genera `sitemap.xml` y `404.html` en `dist/`.
- `npm run preview`: sirve el build en `http://localhost:4173`.
- `npm run typecheck` y `npm run lint`.

## Dónde se edita el contenido

| Contenido | Archivo |
|---|---|
| Textos de interfaz y de páginas (ES / EN) | `src/i18n/locales/es.json`, `src/i18n/locales/en.json` |
| Soluciones (páginas `/solutions/*`) | `src/content/solutions.ts` |
| Proyectos de Webuddy (`/work`) | `src/content/cases.ts` |
| Experiencia previa de los socios | `src/content/experience.ts` |
| Testimonios | `src/content/testimonials.ts` |
| Socios y disciplinas del equipo | `src/content/team.ts` |
| Artículos (`/insights/*`) | `src/content/insights.ts` |
| Tecnologías | `src/content/capabilities.ts` |
| Email, WhatsApp, link de agenda, LinkedIn de empresa | `src/config/site.ts` |

Reglas de contenido:

- No publicar clientes, métricas ni resultados que no estén confirmados.
- La experiencia previa de los socios se muestra por sector: nunca con el nombre del cliente ni como cliente de Webuddy.
- Los botones de agenda y el LinkedIn de empresa se muestran solos cuando `calendarUrl` y `linkedin` tienen valor en `src/config/site.ts`.

## Agregar una página

1. Crear el componente en `src/pages/` y su ruta en `src/App.tsx`.
2. Agregar la ruta a `src/routes.ts` para que se prerenderice.
3. Incluir `<SEO>` con título y descripción traducidos.

## Despliegue

Vercel compila desde el código (`npm run build`, salida `dist/`). `vercel.json` sirve los HTML sin extensión (`cleanUrls`), redirige las rutas antiguas `/services` y `/portfolio`, y usa `404.html` para rutas que no existen.
