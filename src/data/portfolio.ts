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
    image: "projects/spring-tours.webp",
    url: "https://spring-tours.com/",
    category: "Web"
  },
  {
    title: "Blue Digital Agency",
    description_en: "Digital agency website showcasing services and client portfolio with a modern, animated design.",
    description_es: "Sitio web de agencia digital que muestra servicios y portafolio de clientes con un diseño animado y moderno.",
    image: "projects/blue.webp",
    url: "https://www.blueadigital.com/",
    category: "Web"
  },
  {
    title: "Proyecto 455",
    description_en: "Digital agency website showcasing services and client portfolio with a modern, animated design.",
    description_es: "Sitio web de agencia digital que muestra servicios y portafolio de clientes con un diseño animado y moderno.",
    image: "projects/proyecto-455.webp",
    url: "https://www.proyecto455.com/",
    category: "Web"
  },
  {
    title: "455 Auto Servicio",
    description_en: "An informative website showcasing the company, its history, and the services it offers, with a focus on providing a clear and accessible experience for its customers.",
    description_es: "Sitio web informativo que presenta la empresa, su trayectoria y los servicios que ofrece, con un enfoque en brindar una experiencia clara y accesible para sus clientes.",
    image: "projects/455AS.webp",
    url: "https://proyecto455.com/auto-services",
    category: "Web"
  },
  {
    title: "Shaft Dominicana",
    description_en: "An informative website for the SHAFT brand, integrating a catalog of helmets and apparel, facilitating an organized and intuitive browsing experience.",
    description_es: "Sitio web informativo para la marca SHAFT, que integra un catálogo de cascos y textiles, facilitando la exploración de sus productos de forma organizada e intuitiva.",
    image: "projects/shaft.webp",
    url: "https://proyecto455.com/shaft",
    category: "Web"
  },
  {
    title: "Nexx Dominicana",
    description_en: "An informative website for the premium helmet brand NEXX, featuring a product catalog designed to highlight its quality, innovation, and design.",
    description_es: "Sitio web informativo para la marca de cascos premium NEXX, con un catálogo de productos diseñado para destacar su calidad, innovación y diseño.",
    image: "projects/nexx.webp",
    url: "https://proyecto455.com/nexx",
    category: "Web"
  },
  {
    title: "Cruva Construcciones",
    description_en: "Professional corporate website showcasing construction services and portfolio.",
    description_es: "Sitio web corporativo profesional que muestra servicios de construcción y portafolio.",
    image: "projects/cruva.webp",
    url: "https://cruvaconstrucciones.com/",
    category: "Web"
  },
  {
    title: "Germsout Dominicana",
    description_en: "Online store for hygiene and cleaning products with smooth shopping experience.",
    description_es: "Tienda online de productos de higiene y limpieza con una experiencia de compra fluida.",
    image: "projects/germsout.webp",
    url: "https://germsout.store/",
    category: "E-Commerce"
  }
  // ,
  // {
  //   title: "Orki Beauty Solutions",
  //   description_en: "Elegant e-commerce site for beauty supplies with a clean, modern design.",
  //   description_es: "Elegante sitio de comercio electrónico de productos de belleza con un diseño limpio y moderno.",
  //   image: OrkiBS,
  //   url: "http://orkibeautysolutions.com/",
  //   category: "E-Commerce"
  // }
];
