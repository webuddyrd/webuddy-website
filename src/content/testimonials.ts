import type { Localized } from '../i18n/lang';

export type TestimonialId = 'vielka' | 'cintia';

export interface Testimonial {
  id: TestimonialId;
  author: string;
  role: Localized;
  company: string;
  excerpt: Localized;
  quote: Localized;
}

export const testimonials: Testimonial[] = [
  {
    id: 'vielka',
    author: 'Vielka Tavarez',
    role: { es: 'Gerente Comercial', en: 'Sales Manager' },
    company: 'Spring Tours',
    excerpt: {
      es: 'Desde el primer momento, la experiencia fue ágil y eficiente. […] No solo responden rápido, sino que ofrecen alternativas concretas y efectivas, lo que demuestra un alto nivel de compromiso con el cliente.',
      en: 'From the very first moment, the experience was smooth and efficient. […] You not only respond quickly but also offer concrete and effective alternatives, demonstrating a high level of commitment to the client.',
    },
    quote: {
      es: 'Quiero expresar mi satisfacción con el servicio recibido a través de su empresa en mi servicio de creación de web desde cero. Desde el primer momento, la experiencia fue ágil y eficiente. La página es fácil de navegar, la información está clara y cada paso del proceso se siente intuitivo. Además, quiero resaltar la rapidez en la respuesta y la inmediatez con la que brindan soluciones. No solo responden rápido, sino que ofrecen alternativas concretas y efectivas, lo que demuestra un alto nivel de compromiso con el cliente. Se siente la calidad y el profesionalismo en cada interacción. Gracias por ofrecer un servicio tan organizado, confiable y orientado a la satisfacción del usuario. Da gusto trabajar con equipos que realmente valoran la experiencia del cliente.',
      en: "I want to express my satisfaction with the service I received from your company for my website creation from scratch. From the very first moment, the experience was smooth and efficient. The website is easy to navigate, the information is clear, and every step of the process feels intuitive. Furthermore, I want to highlight the speed of your response and the immediacy with which you provide solutions. You not only respond quickly but also offer concrete and effective alternatives, demonstrating a high level of commitment to the client. Quality and professionalism are evident in every interaction. Thank you for offering such an organized, reliable, and user-focused service. It's a pleasure to work with teams that truly value the customer experience.",
    },
  },
  {
    id: 'cintia',
    author: 'Cintia Gonzalez',
    role: { es: 'CEO', en: 'CEO' },
    company: 'Blue Agencia Digital',
    excerpt: {
      es: 'Desde el nivel de detalle hasta la atención brindada hacia nosotros, todo fue impecable.',
      en: 'From the level of detail to the attention they gave us, everything was outstanding.',
    },
    quote: {
      es: 'Trabajar con Webuddy fue excelente; un complemento perfecto para lo que necesitaba mi empresa. Desde el nivel de detalle hasta la atención brindada hacia nosotros, todo fue impecable. Como dueña de agencia, el servicio al cliente siempre es fundamental, y Webuddy cuenta con todo lo que mi equipo necesita. Estoy feliz con el resultado.',
      en: "Working with Webuddy was excellent. A perfect fit for what my company needed. From the level of detail to the attention they gave us, everything was outstanding. As an agency owner, customer service is always paramount, and Webuddy has everything my team needs. I'm thrilled with the result.",
    },
  },
];

export const getTestimonial = (id: TestimonialId | undefined) => testimonials.find((t) => t.id === id);
