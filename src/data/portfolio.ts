import OrkiBS from '../images/Orki-logo.png';
import Germsout from '../images/Germsout-logo.png';
import Cruva from '../images/Cruva-logo.png';
import Spring from '../images/Spring-logo.png';
import Blue from '../images/Blue-logo.png';
import Proyecto455 from '../images/Proyecto455-logo.png';

export interface PortfolioItem {
  title: string;
  description_en: string;
  description_es: string;
  image: string;
  url: string;
  category: string;
}

export const portfolio: PortfolioItem[] = [
  {
    title: "Spring Tours",
    description_en: "Vibrant tourism site with responsive tour listings and booking features.",
    description_es: "Sitio web turístico dinámico con listados de tours interactivos y funciones de reserva.",
    image: Spring,
    url: "https://spring-tours.com/",
    category: "Web"
  },
  {
    title: "Blue Digital Agency",
    description_en: "Digital agency website showcasing services and client portfolio with a modern, animated design.",
    description_es: "Sitio web de agencia digital que muestra servicios y portafolio de clientes con un diseño animado y moderno.",
    image: Blue,
    url: "https://www.blueadigital.com/",
    category: "Web"
  },
  {
    title: "Proyecto 455",
    description_en: "Digital agency website showcasing services and client portfolio with a modern, animated design.",
    description_es: "Sitio web de agencia digital que muestra servicios y portafolio de clientes con un diseño animado y moderno.",
    image: Proyecto455,
    url: "https://www.proyecto455.com/",
    category: "Web"
  },
  {
    title: "Cruva Construcciones",
    description_en: "Professional corporate website showcasing construction services and portfolio.",
    description_es: "Sitio web corporativo profesional que muestra servicios de construcción y portafolio.",
    image: Cruva,
    url: "https://cruvaconstrucciones.com/",
    category: "Web"
  },
  {
    title: "Germsout Dominicana",
    description_en: "Online store for hygiene and cleaning products with smooth shopping experience.",
    description_es: "Tienda online de productos de higiene y limpieza con una experiencia de compra fluida.",
    image: Germsout,
    url: "https://germsout.store/",
    category: "Ecommerce"
  },
  {
    title: "Orki Beauty Solutions",
    description_en: "Elegant e-commerce site for beauty supplies with a clean, modern design.",
    description_es: "Elegante sitio de comercio electrónico de productos de belleza con un diseño limpio y moderno.",
    image: OrkiBS,
    url: "http://orkibeautysolutions.com/",
    category: "Ecommerce"
  }
];
