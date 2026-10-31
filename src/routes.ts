import { solutions } from './content/solutions';
import { insights } from './content/insights';

// Every page that gets prerendered, without the language prefix.
export const staticPaths = [
  '/',
  '/solutions',
  ...solutions.map((solution) => `/solutions/${solution.slug}`),
  '/work',
  '/how-we-work',
  '/about',
  '/insights',
  ...insights.map((insight) => `/insights/${insight.slug}`),
  '/contact',
];

// Prerendered so they load directly, but left out of the sitemap (and marked noindex).
export const unlistedPaths = ['/connect-with-us'];

// Pages rendered without the navbar and footer, like a link-in-bio page.
export const barePaths = ['/connect-with-us'];
