import type { Localized } from '../i18n/lang';

export interface Founder {
  id: string;
  name: string;
  initials: string;
  role: Localized;
  bio: Localized;
  skills: string[];
  linkedin: string;
  // Optional portrait in /public/team. Initials are shown until a photo is added.
  photo?: string;
}

export const founders: Founder[] = [
  {
    id: 'jerickson',
    name: 'Jerickson Abreu',
    initials: 'JA',
    role: { es: 'Fundador · Ingeniería de software', en: 'Founder · Software Engineering' },
    bio: {
      es: 'Ingeniero de software senior con más de 11 años construyendo aplicaciones web y móviles para empresas de telecomunicaciones, seguros, hospitalidad y otros sectores. Licenciado en Administración de Empresas y con formación en gestión de proyectos (preparación PMP), une la ejecución técnica con los objetivos del negocio.',
      en: 'Senior software engineer with 11+ years building web and mobile applications for telecom, insurance, hospitality and other industries. With a degree in Business Administration and project management training (PMP prep), Jerickson connects technical execution with business goals.',
    },
    skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'React Native', 'Business Analysis'],
    linkedin: 'https://www.linkedin.com/in/jerickson-abreu/',
  },
  {
    id: 'mirla',
    name: 'Mirla Del Rio',
    initials: 'MD',
    role: { es: 'Socia · Proyectos y producto', en: 'Partner · Project & Product Leadership' },
    bio: {
      es: 'Ingeniera de Sistemas con Maestría Ejecutiva en Dirección de Proyectos y más de 10 años liderando proyectos tecnológicos y equipos multidisciplinarios con metodologías ágiles y predictivas. Ha dirigido desarrollos de software para banca, consumo masivo, bienes raíces y otros sectores.',
      en: "Systems engineer with an Executive Master's in Project Management and 10+ years leading technology projects and cross-functional teams with agile and predictive methods. Mirla has led software development for banking, consumer goods, real estate and other industries.",
    },
    skills: ['Project Management', 'Product Strategy', 'Scrum', 'Solution Architecture', 'Business Analysis'],
    linkedin: 'https://www.linkedin.com/in/mirla-del-rio',
  },
];

export const teamDisciplines: Localized<string[]> = {
  es: [
    'Ingeniería web y backend',
    'Desarrollo móvil',
    'Diseño UX/UI',
    'QA y pruebas',
    'DevOps y cloud',
    'IA y automatización',
    'Dirección de proyectos',
  ],
  en: [
    'Web & backend engineering',
    'Mobile development',
    'UX/UI design',
    'QA & testing',
    'DevOps & cloud',
    'AI & automation',
    'Project management',
  ],
};
