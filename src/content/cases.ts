import type { Localized } from '../i18n/lang';
import type { TestimonialId } from './testimonials';

export type CaseSlug = 'proyecto-455' | 'spring-tours' | 'germsout' | 'blue' | 'cruva';

// Webuddy's own client work. Everything here is verifiable on the live sites;
// add challenges or results only when the client has confirmed them.
export interface CaseStudy {
  slug: CaseSlug;
  client: string;
  sector: Localized;
  title: Localized;
  summary: Localized;
  context?: Localized;
  built?: Localized<string[]>;
  stack: string[];
  url: string;
  image: string;
  gallery?: { src: string; label: string }[];
  testimonial?: TestimonialId;
  featured: boolean;
}

export const cases: CaseStudy[] = [
  {
    slug: 'proyecto-455',
    client: 'Proyecto 455',
    sector: { es: 'Automotriz y motociclismo', en: 'Automotive & motorcycling' },
    title: {
      es: 'Un ecosistema digital para tres marcas',
      en: 'One digital ecosystem for three brands',
    },
    summary: {
      es: 'Plataforma en Next.js que reúne a Shaft Dominicana, Nexx Dominicana y 455 Auto Servicios sobre una misma base técnica.',
      en: 'A Next.js platform that brings Shaft Dominicana, Nexx Dominicana and 455 Auto Servicios together on a single technical foundation.',
    },
    context: {
      es: 'Proyecto 455 agrupa tres marcas con ofertas distintas: Shaft y Nexx, representantes en República Dominicana de cascos y equipamiento para motociclistas, y 455 Auto Servicios, dedicada al mantenimiento y la reparación automotriz.',
      en: 'Proyecto 455 brings together three brands with different offerings: Shaft and Nexx, Dominican Republic representatives of motorcycle helmets and gear, and 455 Auto Servicios, an automotive maintenance and repair shop.',
    },
    built: {
      es: [
        'Un portal de entrada que presenta las tres marcas y dirige a cada audiencia a su sitio.',
        'Sitios de marca para Shaft y Nexx, con catálogos de cascos y equipamiento.',
        'Un sitio para 455 Auto Servicios con sus servicios, trayectoria y contacto.',
        'Una sola aplicación para las tres marcas: cada una conserva su identidad, mientras el código, el despliegue y el mantenimiento se comparten.',
      ],
      en: [
        'An entry portal that introduces the three brands and routes each audience to the right site.',
        'Brand sites for Shaft and Nexx, with catalogs of helmets and gear.',
        'A site for 455 Auto Servicios covering its services, background and contact details.',
        'A single application for all three brands: each keeps its identity while code, deployment and maintenance are shared.',
      ],
    },
    stack: ['Next.js', 'React'],
    url: 'https://www.proyecto455.com/',
    image: '/projects/proyecto-455.webp',
    gallery: [
      { src: '/projects/shaft.webp', label: 'Shaft Dominicana' },
      { src: '/projects/nexx.webp', label: 'Nexx Dominicana' },
      { src: '/projects/455AS.webp', label: '455 Auto Servicios' },
    ],
    featured: true,
  },
  {
    slug: 'spring-tours',
    client: 'Spring Tours + Travel',
    sector: { es: 'Turismo', en: 'Tourism' },
    title: {
      es: 'Sitio de turismo con reservas en línea',
      en: 'A tourism website with online booking',
    },
    summary: {
      es: 'Sitio web creado desde cero, con listados de tours y funciones de reserva sobre WooCommerce.',
      en: 'A website built from scratch, with tour listings and booking features on WooCommerce.',
    },
    context: {
      es: 'Spring Tours es una agencia de viajes y tours que necesitaba crear su presencia web desde cero y permitir que sus clientes exploren y reserven tours en línea.',
      en: 'Spring Tours is a travel and tour agency that needed to build its web presence from scratch and let customers browse and book tours online.',
    },
    built: {
      es: [
        'Un sitio web completo, diseñado y construido desde cero.',
        'Listados de tours con información clara y navegación sencilla.',
        'Funciones de reserva y compra en línea con WooCommerce.',
        'Contenido administrable en WordPress.',
      ],
      en: [
        'A complete website, designed and built from scratch.',
        'Tour listings with clear information and simple navigation.',
        'Online booking and checkout with WooCommerce.',
        'Content managed in WordPress.',
      ],
    },
    stack: ['WordPress', 'WooCommerce', 'Elementor'],
    url: 'https://spring-tours.com/',
    image: '/projects/spring-tours.webp',
    testimonial: 'vielka',
    featured: true,
  },
  {
    slug: 'germsout',
    client: 'Germsout Dominicana',
    sector: { es: 'Consumo masivo', en: 'Consumer goods' },
    title: {
      es: 'Tienda en línea de productos de higiene',
      en: 'An online store for hygiene products',
    },
    summary: {
      es: 'Tienda en línea con catálogo, carrito y cuentas de cliente, con venta por cajas y presentaciones.',
      en: 'An online store with catalog, cart and customer accounts, selling by case and pack size.',
    },
    context: {
      es: 'Germsout Dominicana vende productos de higiene personal y del hogar, como toallitas con 75% de alcohol.',
      en: 'Germsout Dominicana sells personal and home hygiene products, such as 75% alcohol wipes.',
    },
    built: {
      es: [
        'Catálogo de productos con presentaciones por caja y por paquete.',
        'Carrito de compra y cuentas de cliente.',
        'Tienda administrable sobre WooCommerce.',
      ],
      en: [
        'Product catalog with case and pack options.',
        'Shopping cart and customer accounts.',
        'A store managed on WooCommerce.',
      ],
    },
    stack: ['WordPress', 'WooCommerce'],
    url: 'https://germsout.store/',
    image: '/projects/germsout.webp',
    featured: true,
  },
  {
    slug: 'blue',
    client: 'Blue Agencia Digital',
    sector: { es: 'Marketing digital', en: 'Digital marketing' },
    title: {
      es: 'Sitio corporativo para una agencia de marketing digital',
      en: 'Corporate website for a digital marketing agency',
    },
    summary: {
      es: 'Sitio que presenta los servicios y el portafolio de la agencia, con un diseño moderno y animado.',
      en: "A website showcasing the agency's services and portfolio, with a modern, animated design.",
    },
    stack: ['HTML', 'Tailwind CSS', 'JavaScript'],
    url: 'https://www.blueadigital.com/',
    image: '/projects/blue.webp',
    testimonial: 'cintia',
    featured: false,
  },
  {
    slug: 'cruva',
    client: 'Cruva Construcciones',
    sector: { es: 'Construcción', en: 'Construction' },
    title: {
      es: 'Sitio corporativo para una constructora',
      en: 'Corporate website for a construction company',
    },
    summary: {
      es: 'Presentación de los servicios de ingeniería y del portafolio de proyectos de la empresa.',
      en: "The company's engineering services and project portfolio.",
    },
    stack: ['WordPress'],
    url: 'https://cruvaconstrucciones.com/',
    image: '/projects/cruva.webp',
    featured: false,
  },
];

export const getCases = (slugs: CaseSlug[]) =>
  slugs.map((slug) => cases.find((c) => c.slug === slug)).filter((c): c is CaseStudy => Boolean(c));
