import type { Localized } from '../i18n/lang';

// Projects the founders delivered before Webuddy, in previous roles. Clients stay anonymous
// (only the industry is shown) and these must never be presented as Webuddy clients.
export type ExperienceId =
  | 'field-audit'
  | 'insurance-quoting'
  | 'offline-pos'
  | 'mobile-banking'
  | 'retail-ordering'
  | 'proptech-platform'
  | 'admin-systems';

export interface Experience {
  id: ExperienceId;
  sector: Localized;
  title: Localized;
  summary: Localized;
  role: Localized;
  tech: string[];
  featured?: boolean;
}

export const experience: Experience[] = [
  {
    id: 'field-audit',
    sector: { es: 'Telecomunicaciones', en: 'Telecommunications' },
    title: {
      es: 'Sistema móvil de auditoría de campo a escala nacional',
      en: 'Nationwide mobile field-audit system',
    },
    summary: {
      es: 'Aplicación para que auditores gestionen cientos de socios comerciales en todo el país, digitalicen las operaciones de campo y aceleren el reporte y la resolución de incidencias.',
      en: 'An app that lets auditors manage hundreds of commercial partners nationwide, digitize field operations and speed up incident reporting and resolution.',
    },
    role: { es: 'Arquitectura y desarrollo', en: 'Architecture and development' },
    tech: ['React Native'],
    featured: true,
  },
  {
    id: 'insurance-quoting',
    sector: { es: 'Seguros', en: 'Insurance' },
    title: {
      es: 'Plataforma de cotización de seguros en tiempo real',
      en: 'Real-time insurance quoting platform',
    },
    summary: {
      es: 'Comparación instantánea de planes con precios dinámicos, utilizada por miles de usuarios.',
      en: 'Instant plan comparison with dynamic pricing, used by thousands of users.',
    },
    role: { es: 'Desarrollo de la plataforma', en: 'Platform development' },
    tech: ['React', 'Node.js'],
    featured: true,
  },
  {
    id: 'offline-pos',
    sector: { es: 'Hospitalidad y eventos', en: 'Hospitality & events' },
    title: {
      es: 'Punto de venta offline-first para eventos masivos',
      en: 'Offline-first point of sale for large-scale events',
    },
    summary: {
      es: 'Ventas simultáneas en múltiples puntos de venta, continuidad de la operación sin conexión a internet y control de inventario integrado.',
      en: 'Simultaneous sales across multiple points of sale, uninterrupted operation without internet access and integrated inventory control.',
    },
    role: { es: 'Desarrollo del sistema', en: 'System development' },
    tech: ['React Native', 'Firebase'],
    featured: true,
  },
  {
    id: 'mobile-banking',
    sector: { es: 'Banca', en: 'Banking' },
    title: {
      es: 'Banca móvil con más de 160 mil usuarios recurrentes',
      en: 'Mobile banking app with 160,000+ recurring users',
    },
    summary: {
      es: 'Nuevas funcionalidades, migración tecnológica y rediseño de una aplicación de banca personal para iOS y Android, además de un portal digital para la emisión de productos con tecnología contactless.',
      en: 'New features, a technology migration and a redesign of a personal banking app for iOS and Android, plus a digital portal for issuing contactless products.',
    },
    role: { es: 'Desarrollo y migración', en: 'Development and migration' },
    tech: ['Angular', 'Ionic'],
    featured: true,
  },
  {
    id: 'retail-ordering',
    sector: { es: 'Consumo masivo', en: 'Consumer goods' },
    title: {
      es: 'Plataforma web y móvil de pedidos para comercios de barrio',
      en: 'Web and mobile ordering platform for neighborhood stores',
    },
    summary: {
      es: 'Versiones para consumidores y para colmados de una gran empresa de consumo masivo, desarrolladas con Scrum.',
      en: "Consumer and store-owner versions for a major consumer goods company's network of neighborhood stores, delivered with Scrum.",
    },
    role: { es: 'Dirección y gestión del desarrollo', en: 'Project leadership' },
    tech: ['Scrum', 'Jira'],
  },
  {
    id: 'proptech-platform',
    sector: { es: 'Bienes raíces', en: 'Real estate' },
    title: {
      es: 'Plataforma PropTech de gestión comercial',
      en: 'PropTech sales management platform',
    },
    summary: {
      es: 'Visión, roadmap y evolución de un producto que integra CRM, inventario, ventas, reservas, contratos, pagos y analítica, con automatización de procesos comerciales y operativos.',
      en: 'Vision, roadmap and evolution of a product that brings together CRM, inventory, sales, reservations, contracts, payments and analytics, with automated sales and operational processes.',
    },
    role: { es: 'Dirección de producto', en: 'Product leadership' },
    tech: [],
  },
  {
    id: 'admin-systems',
    sector: { es: 'Varios sectores', en: 'Multiple industries' },
    title: {
      es: 'Sistemas de gestión administrativa, comercial y de facturación',
      en: 'Administrative, sales and billing management systems',
    },
    summary: {
      es: 'Análisis, diseño y dirección del desarrollo de sistemas de gestión administrativa y comercial, facturación y evaluación de personal.',
      en: 'Analysis, design and development leadership for administrative and sales management, billing and employee evaluation systems.',
    },
    role: { es: 'Análisis, diseño y dirección', en: 'Analysis, design and leadership' },
    tech: ['Angular', 'Node.js', 'PostgreSQL', 'ASP.NET MVC', 'SQL Server'],
  },
];

export const getExperience = (ids: ExperienceId[]) =>
  ids.map((id) => experience.find((e) => e.id === id)).filter((e): e is Experience => Boolean(e));
