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
