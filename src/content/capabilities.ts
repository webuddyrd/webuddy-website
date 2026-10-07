import type { Localized } from '../i18n/lang';

// Technologies are evidence of capability, not the value proposition: list only what the team uses in practice.
export const capabilities: { title: Localized; items: Localized<string[]> }[] = [
  {
    title: { es: 'Web y frontend', en: 'Web & frontend' },
    items: { es: ['React', 'Next.js', 'TypeScript', 'Angular'], en: ['React', 'Next.js', 'TypeScript', 'Angular'] },
  },
  {
    title: { es: 'Móvil', en: 'Mobile' },
    items: { es: ['React Native', 'Ionic', 'Xamarin'], en: ['React Native', 'Ionic', 'Xamarin'] },
  },
  {
    title: { es: 'Backend y APIs', en: 'Backend & APIs' },
    items: {
      es: ['Node.js', 'ASP.NET / C#', 'APIs REST', 'SignalR'],
      en: ['Node.js', 'ASP.NET / C#', 'REST APIs', 'SignalR'],
    },
  },
  {
    title: { es: 'Datos', en: 'Data' },
    items: {
      es: ['PostgreSQL', 'SQL Server', 'MySQL', 'Oracle', 'MongoDB', 'Firebase'],
      en: ['PostgreSQL', 'SQL Server', 'MySQL', 'Oracle', 'MongoDB', 'Firebase'],
    },
  },
  {
    title: { es: 'Cloud y DevOps', en: 'Cloud & DevOps' },
    items: { es: ['AWS', 'Docker', 'Vercel', 'CI/CD'], en: ['AWS', 'Docker', 'Vercel', 'CI/CD'] },
  },
  {
    title: { es: 'IA y automatización', en: 'AI & automation' },
    items: {
      es: ['Modelos de lenguaje (LLMs)', 'Python', 'Automatización de flujos'],
      en: ['Large language models (LLMs)', 'Python', 'Workflow automation'],
    },
  },
  {
    title: { es: 'Gestión y calidad', en: 'Delivery & quality' },
    items: {
      es: ['Scrum', 'Kanban', 'Jira', 'Confluence', 'QA y pruebas'],
      en: ['Scrum', 'Kanban', 'Jira', 'Confluence', 'QA & testing'],
    },
  },
];
