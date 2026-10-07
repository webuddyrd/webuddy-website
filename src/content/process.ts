import type { Localized } from '../i18n/lang';

export interface ProcessStep {
  title: Localized;
  text: Localized;
  output: Localized;
  client: Localized;
}

export const processSteps: ProcessStep[] = [
  {
    title: { es: 'Discovery', en: 'Discovery' },
    text: {
      es: 'Entendemos el negocio, el problema y las restricciones.',
      en: 'We understand the business, the problem and the constraints.',
    },
    output: {
      es: 'Alcance, arquitectura propuesta, plan y estimación.',
      en: 'Scope, proposed architecture, plan and estimate.',
    },
    client: {
      es: 'Acceso a las personas y a la información clave.',
      en: 'Access to key people and information.',
    },
  },
  {
    title: { es: 'Diseño', en: 'Design' },
    text: {
      es: 'Definimos flujos, interfaces y arquitectura técnica.',
      en: 'We define flows, interfaces and technical architecture.',
    },
    output: {
      es: 'Prototipo navegable y backlog priorizado.',
      en: 'Clickable prototype and prioritized backlog.',
    },
    client: {
      es: 'Validar flujos y prioridades.',
      en: 'Validate flows and priorities.',
    },
  },
  {
    title: { es: 'Construcción', en: 'Build' },
    text: {
      es: 'Desarrollamos en ciclos cortos, con QA en cada entrega.',
      en: 'We develop in short cycles, with QA in every release.',
    },
    output: {
      es: 'Avances funcionales y demostrables en cada sprint.',
      en: 'Working, demoable progress every sprint.',
    },
    client: {
      es: 'Revisar avances y decidir sobre prioridades.',
      en: 'Review progress and make priority calls.',
    },
  },
  {
    title: { es: 'Lanzamiento', en: 'Launch' },
    text: {
      es: 'Pruebas finales, despliegue y acompañamiento en la salida a producción.',
      en: 'Final testing, deployment and go-live support.',
    },
    output: {
      es: 'Software en producción, documentación y transferencia de conocimiento.',
      en: 'Software in production, documentation and knowledge transfer.',
    },
    client: {
      es: 'Aprobar la salida y preparar a los usuarios.',
      en: 'Approve go-live and prepare users.',
    },
  },
  {
    title: { es: 'Evolución', en: 'Evolve' },
    text: {
      es: 'Medimos, mejoramos y damos soporte.',
      en: 'We measure, improve and provide support.',
    },
    output: {
      es: 'Mejoras continuas y soporte según lo acordado.',
      en: 'Continuous improvements and support as agreed.',
    },
    client: {
      es: 'Compartir las prioridades del negocio.',
      en: 'Share business priorities.',
    },
  },
];
