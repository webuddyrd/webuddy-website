import type { Localized } from '../i18n/lang';
import type { SolutionSlug } from './solutions';

// "Sound familiar?": the bridge from a visitor's need to the solution that answers it.
export const problems: { solution: SolutionSlug; problem: Localized; answer: Localized }[] = [
  {
    solution: 'business-software',
    problem: {
      es: 'Tu operación depende de Excel, correos y WhatsApp.',
      en: 'Your operation runs on spreadsheets, email and WhatsApp.',
    },
    answer: {
      es: 'Lo convertimos en un sistema con flujos, roles y trazabilidad.',
      en: 'We turn it into a system with workflows, roles and traceability.',
    },
  },
  {
    solution: 'integrations',
    problem: {
      es: 'Tus sistemas no se hablan entre sí.',
      en: "Your systems don't talk to each other.",
    },
    answer: {
      es: 'Los integramos para que la información fluya sin doble digitación.',
      en: 'We integrate them so data flows without double entry.',
    },
  },
  {
    solution: 'automation-ai',
    problem: {
      es: 'Tu equipo pierde horas en tareas repetitivas.',
      en: 'Your team loses hours to repetitive tasks.',
    },
    answer: {
      es: 'Automatizamos el proceso y aplicamos IA donde realmente aporta.',
      en: 'We automate the process and apply AI where it actually helps.',
    },
  },
  {
    solution: 'digital-products',
    problem: {
      es: 'Tienes una idea de producto, pero no un equipo técnico.',
      en: 'You have a product idea, but no technical team.',
    },
    answer: {
      es: 'La validamos, la diseñamos, la construimos y la hacemos crecer contigo.',
      en: 'We validate, design, build and grow it with you.',
    },
  },
  {
    solution: 'modernization',
    problem: {
      es: 'Tu sistema actual se quedó corto o es difícil de mantener.',
      en: 'Your current system falls short or is hard to maintain.',
    },
    answer: {
      es: 'Lo modernizamos por etapas, sin detener tu operación.',
      en: 'We modernize it in stages, without stopping your operation.',
    },
  },
  {
    solution: 'digital-commerce',
    problem: {
      es: 'Vendes en línea, pero la tienda no se conecta con tu operación.',
      en: "You sell online, but your store isn't connected to your operation.",
    },
    answer: {
      es: 'Conectamos tu canal digital con inventario, pagos y facturación.',
      en: 'We connect your digital channel to inventory, payments and billing.',
    },
  },
];
