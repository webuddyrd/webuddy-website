export interface PortfolioItem {
  title: string;
  description_en: string;
  description_es: string;
  image: string;
  url: string;
  tags: string[];
}

export const portfolio: PortfolioItem[] = [
  {
    title: "Spring Tours",
    description_en: "Travel booking experience for a tour operator.",
    description_es: "Experiencia de reservas para un operador turístico.",
    image: "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://spring-tours.com/",
    tags: ["Web", "UX/UI"]
  },
  {
    title: "Alsike Group",
    description_en: "Corporate site for an industrial group.",
    description_es: "Sitio corporativo para un grupo industrial.",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://alsikegroup.com/",
    tags: ["Web", "Corporate"]
  },
  {
    title: "TechStart Mobile",
    description_en: "iOS and Android app for a fintech startup.",
    description_es: "App iOS y Android para una startup fintech.",
    image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Apps", "Fintech"]
  },
  {
    title: "Bloom Cosmetics",
    description_en: "Complete brand identity and packaging design.",
    description_es: "Identidad de marca completa y diseño de packaging.",
    image: "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Branding", "Design"]
  },
  {
    title: "FitLife Platform",
    description_en: "Fitness tracking web application with social features.",
    description_es: "Aplicación web de fitness con funciones sociales.",
    image: "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Web", "Apps"]
  },
  {
    title: "Urban Eats",
    description_en: "Food delivery app with real-time tracking.",
    description_es: "App de entrega de comida con seguimiento en tiempo real.",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Apps", "Mobile"]
  },
  {
    title: "Nexus Consulting",
    description_en: "Professional services website with client portal.",
    description_es: "Sitio web de servicios profesionales con portal de cliente.",
    image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Web", "Corporate"]
  },
  {
    title: "Artisan Coffee Co.",
    description_en: "E-commerce platform and brand refresh.",
    description_es: "Plataforma e-commerce y renovación de marca.",
    image: "https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Web", "Branding"]
  }
];
