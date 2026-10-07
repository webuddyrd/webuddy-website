import { Compass, LayoutDashboard, AppWindow, Cable, Bot, Store, RefreshCcw, type LucideIcon } from 'lucide-react';
import type { Localized } from '../i18n/lang';
import type { ExperienceId } from './experience';
import type { CaseSlug } from './cases';
import type { InsightSlug } from './insights';

export type SolutionSlug =
  | 'discovery'
  | 'business-software'
  | 'digital-products'
  | 'integrations'
  | 'automation-ai'
  | 'digital-commerce'
  | 'modernization';

interface Item {
  title: string;
  text: string;
}

export interface Solution {
  slug: SolutionSlug;
  icon: LucideIcon;
  // entry: where most engagements start; core: what we build; continuous: what happens after launch
  kind: 'entry' | 'core' | 'continuous';
  title: Localized;
  short: Localized;
  lead: Localized;
  problems: Localized<string[]>;
  deliverables: Localized<Item[]>;
  approach: Localized<Item[]>;
  stack: string[];
  faq: Localized<{ q: string; a: string }[]>;
  experience: ExperienceId[];
  cases: CaseSlug[];
  insight?: InsightSlug;
}

export const solutions: Solution[] = [
  {
    slug: 'discovery',
    icon: Compass,
    kind: 'entry',
    title: {
      es: 'Discovery y asesoría tecnológica',
      en: 'Discovery & Technology Advisory',
    },
    short: {
      es: 'Definimos el problema, la solución y el plan antes de construir.',
      en: 'We define the problem, the solution and the plan before writing code.',
    },
    lead: {
      es: 'Un proyecto de software rara vez falla por el código: falla porque el problema no estaba bien definido. En el Discovery trabajamos con tu equipo para entender la operación, priorizar lo que realmente importa y llegar a una propuesta clara de solución, arquitectura, alcance y presupuesto.',
      en: 'Software projects rarely fail because of code. They fail because the problem was never clearly defined. In Discovery, we work with your team to understand the operation, prioritize what really matters and arrive at a clear proposal for the solution, architecture, scope and budget.',
    },
    problems: {
      es: [
        'Sabes que necesitas software, pero no qué construir primero.',
        'Tienes varias propuestas y no sabes cómo compararlas.',
        'El proyecto involucra varias áreas o sistemas existentes.',
        'Necesitas un alcance y un presupuesto confiables para aprobar la inversión.',
      ],
      en: [
        'You know you need software, but not what to build first.',
        'You have several proposals and no clear way to compare them.',
        'The project involves multiple departments or existing systems.',
        'You need a reliable scope and budget to approve the investment.',
      ],
    },
    deliverables: {
      es: [
        { title: 'Mapa del proceso y oportunidades', text: 'Cómo funciona hoy la operación y dónde el software genera más impacto.' },
        { title: 'Alcance priorizado', text: 'Qué entra en la primera versión y qué puede esperar.' },
        { title: 'Arquitectura propuesta', text: 'Componentes, integraciones y tecnologías, explicados en lenguaje claro.' },
        { title: 'Prototipo de los flujos clave', text: 'Para validar la experiencia antes de invertir en desarrollo.' },
        { title: 'Plan y estimación', text: 'Etapas, entregables, equipo y presupuesto.' },
        { title: 'Asesoría tecnológica', text: 'Evaluación de proveedores y sistemas existentes, y acompañamiento en decisiones técnicas.' },
      ],
      en: [
        { title: 'Process map & opportunities', text: 'How the operation works today and where software will have the most impact.' },
        { title: 'Prioritized scope', text: 'What goes into the first release and what can wait.' },
        { title: 'Proposed architecture', text: 'Components, integrations and technologies, explained in plain language.' },
        { title: 'Prototype of key flows', text: 'So you can validate the experience before investing in development.' },
        { title: 'Plan & estimate', text: 'Phases, deliverables, team and budget.' },
        { title: 'Technology advisory', text: 'Assessment of vendors and existing systems, and guidance on technical decisions.' },
      ],
    },
    approach: {
      es: [
        { title: 'Entender', text: 'Entrevistas con las personas involucradas y revisión de procesos, sistemas y datos.' },
        { title: 'Priorizar', text: 'Identificamos qué genera más valor y qué riesgos hay que resolver primero.' },
        { title: 'Diseñar', text: 'Definimos la solución, la arquitectura y los flujos principales.' },
        { title: 'Proponer', text: 'Presentamos alcance, plan y estimación para que tomes una decisión informada.' },
      ],
      en: [
        { title: 'Understand', text: 'Interviews with the people involved and a review of processes, systems and data.' },
        { title: 'Prioritize', text: 'We identify what creates the most value and which risks to address first.' },
        { title: 'Design', text: 'We define the solution, the architecture and the main flows.' },
        { title: 'Propose', text: 'We present scope, plan and estimate so you can make an informed decision.' },
      ],
    },
    stack: ['Business Analysis', 'Solution Architecture', 'Prototyping', 'PMP', 'Scrum'],
    faq: {
      es: [
        { q: '¿Siempre hay que empezar con un Discovery?', a: 'No. Si el alcance ya está claro, podemos pasar directamente al diseño y la construcción. Lo recomendamos cuando hay incertidumbre, varias áreas involucradas o sistemas existentes que integrar.' },
        { q: '¿Cuánto dura?', a: 'Depende del tamaño y la complejidad del problema. Lo definimos contigo desde el inicio, con una duración y un alcance acotados.' },
        { q: '¿Pueden evaluar un sistema o una propuesta que ya tenemos?', a: 'Sí. Revisamos sistemas existentes, propuestas de otros proveedores y decisiones de arquitectura, y te damos una recomendación clara.' },
      ],
      en: [
        { q: 'Do we always need to start with Discovery?', a: 'No. If the scope is already clear, we can go straight to design and development. We recommend it when there is uncertainty, several departments involved or existing systems to integrate.' },
        { q: 'How long does it take?', a: 'It depends on the size and complexity of the problem. We define it with you up front, with a fixed duration and scope.' },
        { q: 'Can you review a system or proposal we already have?', a: 'Yes. We review existing systems, proposals from other vendors and architecture decisions, and give you a clear recommendation.' },
      ],
    },
    experience: ['admin-systems', 'proptech-platform'],
    cases: [],
    insight: 'how-to-prepare-a-software-project',
  },
  {
    slug: 'business-software',
    icon: LayoutDashboard,
    kind: 'core',
    title: {
      es: 'Software empresarial y sistemas internos',
      en: 'Business Software & Internal Systems',
    },
    short: {
      es: 'Sistemas hechos a la medida de tu operación: gestión, control y trazabilidad.',
      en: 'Systems built around how your operation actually works.',
    },
    lead: {
      es: 'Cuando el software genérico no se adapta a tu forma de trabajar, o la operación vive en hojas de cálculo, construimos el sistema que tu empresa necesita: con tus flujos, tus roles y tus reglas de negocio.',
      en: "When off-the-shelf software doesn't fit the way you work, or your operation lives in spreadsheets, we build the system your company needs, around your workflows, roles and business rules.",
    },
    problems: {
      es: [
        'Procesos críticos que viven en Excel, correos y WhatsApp.',
        'Información dispersa que nadie puede consultar a tiempo.',
        'Un software genérico que obliga a tu equipo a trabajar alrededor de él.',
        'Falta de control, aprobaciones y trazabilidad por roles.',
      ],
      en: [
        'Critical processes running on spreadsheets, email and WhatsApp.',
        'Scattered information nobody can access when they need it.',
        'Generic software your team has to work around.',
        'No clear control, approvals or traceability by role.',
      ],
    },
    deliverables: {
      es: [
        { title: 'Sistemas de gestión a medida', text: 'Ventas, inventario, compras, facturación y clientes: ERP y CRM adaptados a tu operación.' },
        { title: 'Portales internos y de clientes', text: 'Autoservicio, solicitudes y seguimiento para clientes, proveedores o equipos.' },
        { title: 'Herramientas operativas y de campo', text: 'Aplicaciones para equipos en terreno: auditorías, inspecciones y reportes.' },
        { title: 'Paneles e informes', text: 'Indicadores y reportes para decidir con datos actualizados.' },
        { title: 'Flujos de aprobación', text: 'Roles, permisos, historial y trazabilidad de cada operación.' },
      ],
      en: [
        { title: 'Custom management systems', text: 'Sales, inventory, purchasing, billing and customers: ERP and CRM tailored to your operation.' },
        { title: 'Internal and customer portals', text: 'Self-service, requests and tracking for customers, suppliers or teams.' },
        { title: 'Operational and field tools', text: 'Apps for field teams: audits, inspections and reporting.' },
        { title: 'Dashboards and reports', text: 'KPIs and reports to make decisions with up-to-date data.' },
        { title: 'Approval workflows', text: 'Roles, permissions, history and traceability for every operation.' },
      ],
    },
    approach: {
      es: [
        { title: 'Levantamiento', text: 'Entendemos el proceso real, no solo el documentado.' },
        { title: 'Diseño de flujos y datos', text: 'Definimos roles, estados, reglas y la estructura de la información.' },
        { title: 'Construcción por módulos', text: 'Empezamos por el módulo de mayor impacto y entregamos por etapas.' },
        { title: 'Adopción', text: 'Migración de datos, capacitación y acompañamiento en la puesta en marcha.' },
      ],
      en: [
        { title: 'Discovery', text: 'We map the real process, not just the documented one.' },
        { title: 'Workflow and data design', text: 'We define roles, states, rules and how information is structured.' },
        { title: 'Module-by-module delivery', text: 'We start with the highest-impact module and deliver in stages.' },
        { title: 'Adoption', text: 'Data migration, training and support during rollout.' },
      ],
    },
    stack: ['React', 'Next.js', 'Angular', 'Node.js', 'ASP.NET / C#', 'PostgreSQL', 'SQL Server', 'React Native'],
    faq: {
      es: [
        { q: '¿Me conviene un sistema a medida o adaptar un software existente?', a: 'Depende. Si un software del mercado resuelve la mayor parte de tu necesidad, probablemente conviene usarlo e integrarlo. Recomendamos un sistema a medida cuando el proceso es un diferencial de tu negocio o cuando las herramientas existentes obligan a demasiadas excepciones.' },
        { q: '¿Pueden migrar la información que ya tenemos?', a: 'Sí. La migración de datos desde hojas de cálculo o sistemas anteriores forma parte del plan del proyecto.' },
        { q: '¿Se puede construir por etapas?', a: 'Sí, y suele ser lo recomendable: empezamos por el módulo de mayor impacto y avanzamos por fases.' },
      ],
      en: [
        { q: 'Should we build custom or adapt existing software?', a: "It depends. If an off-the-shelf product covers most of your needs, it's usually better to use it and integrate it. We recommend custom software when the process is a competitive differentiator or when existing tools force too many workarounds." },
        { q: 'Can you migrate the data we already have?', a: 'Yes. Migrating data from spreadsheets or legacy systems is part of the project plan.' },
        { q: 'Can we build it in phases?', a: "Yes, and it's usually the best approach: we start with the highest-impact module and move forward in phases." },
      ],
    },
    experience: ['field-audit', 'offline-pos', 'admin-systems', 'proptech-platform'],
    cases: [],
    insight: 'custom-vs-off-the-shelf-software',
  },
  {
    slug: 'digital-products',
    icon: AppWindow,
    kind: 'core',
    title: {
      es: 'Productos digitales: web, móvil y SaaS',
      en: 'Digital Products: Web, Mobile & SaaS',
    },
    short: {
      es: 'De la idea a un producto en producción, listo para crecer.',
      en: 'From idea to a product in production, ready to grow.',
    },
    lead: {
      es: 'Diseñamos y construimos aplicaciones web y móviles, plataformas SaaS y MVPs para empresas que lanzan un canal digital o un producto nuevo. Cuidamos tanto la experiencia de usuario como la arquitectura que le permitirá crecer.',
      en: 'We design and build web and mobile apps, SaaS platforms and MVPs for companies launching a new digital channel or product. We care as much about the user experience as about the architecture that will let it grow.',
    },
    problems: {
      es: [
        'Quieres lanzar un producto digital y necesitas un equipo técnico completo.',
        'Necesitas validar una idea con un MVP antes de invertir en grande.',
        'Tu empresa quiere ofrecer una app o plataforma a sus clientes.',
        'Tu producto creció y la base técnica ya no acompaña.',
      ],
      en: [
        'You want to launch a digital product and need a complete technical team.',
        'You need to validate an idea with an MVP before making a bigger investment.',
        'Your company wants to offer an app or platform to its customers.',
        "Your product has grown and its technical foundation can't keep up.",
      ],
    },
    deliverables: {
      es: [
        { title: 'Aplicaciones web', text: 'Plataformas, portales y aplicaciones de negocio.' },
        { title: 'Apps móviles para iOS y Android', text: 'Multiplataforma con React Native, o la tecnología que el caso requiera.' },
        { title: 'Plataformas SaaS', text: 'Multiusuario, roles, suscripciones y panel de administración.' },
        { title: 'MVPs', text: 'Una primera versión enfocada en aprender con usuarios reales.' },
        { title: 'Diseño UX/UI', text: 'Investigación, flujos, prototipos y sistemas de diseño.' },
      ],
      en: [
        { title: 'Web applications', text: 'Platforms, portals and business applications.' },
        { title: 'iOS and Android apps', text: 'Cross-platform with React Native, or whatever technology the case calls for.' },
        { title: 'SaaS platforms', text: 'Multi-tenant, roles, subscriptions and admin panels.' },
        { title: 'MVPs', text: 'A first version focused on learning from real users.' },
        { title: 'UX/UI design', text: 'Research, flows, prototypes and design systems.' },
      ],
    },
    approach: {
      es: [
        { title: 'Definición del producto', text: 'Usuarios, propuesta de valor y alcance de la primera versión.' },
        { title: 'Diseño y prototipo', text: 'Validamos los flujos clave antes de desarrollar.' },
        { title: 'Construcción iterativa', text: 'Entregas frecuentes y demostrables, con QA en cada ciclo.' },
        { title: 'Lanzamiento y evolución', text: 'Publicación, medición y mejoras basadas en el uso real.' },
      ],
      en: [
        { title: 'Product definition', text: 'Users, value proposition and first-release scope.' },
        { title: 'Design and prototype', text: 'We validate key flows before writing production code.' },
        { title: 'Iterative development', text: 'Frequent, demoable releases with QA in every cycle.' },
        { title: 'Launch and evolve', text: 'Release, measurement and improvements based on real usage.' },
      ],
    },
    stack: ['React', 'Next.js', 'TypeScript', 'React Native', 'Ionic', 'Node.js', 'Firebase', 'PostgreSQL'],
    faq: {
      es: [
        { q: '¿Qué incluye un MVP?', a: 'Lo mínimo necesario para que usuarios reales usen el producto y puedas aprender: un flujo principal bien resuelto, sin funcionalidades accesorias. Lo definimos juntos al inicio del proyecto.' },
        { q: '¿App nativa o multiplataforma?', a: 'Para la mayoría de los productos recomendamos multiplataforma: un solo código para iOS y Android con experiencia nativa. Si el caso exige capacidades específicas del dispositivo, evaluamos la mejor alternativa.' },
        { q: '¿Nos acompañan en la publicación en App Store y Google Play?', a: 'Sí, acompañamos todo el proceso de publicación y las actualizaciones posteriores.' },
      ],
      en: [
        { q: 'What does an MVP include?', a: 'The minimum needed for real users to use the product so you can learn: one core flow done well, without nice-to-have features. We define it together at the start of the project.' },
        { q: 'Native or cross-platform?', a: 'For most products we recommend cross-platform: one codebase for iOS and Android with a native experience. If the use case requires specific device capabilities, we evaluate the best option.' },
        { q: 'Will you help us publish on the App Store and Google Play?', a: 'Yes, we support the entire publishing process and future updates.' },
      ],
    },
    experience: ['mobile-banking', 'insurance-quoting', 'retail-ordering', 'field-audit'],
    cases: ['proyecto-455'],
  },
  {
    slug: 'integrations',
    icon: Cable,
    kind: 'core',
    title: {
      es: 'Integraciones, APIs y datos',
      en: 'Integrations, APIs & Data',
    },
    short: {
      es: 'Conectamos tus sistemas para que la información fluya sin doble trabajo.',
      en: 'We connect your systems so data flows without double entry.',
    },
    lead: {
      es: 'ERP, CRM, pasarelas de pago, plataformas de terceros y bases de datos: muchas empresas no necesitan otro sistema, necesitan que los que ya tienen trabajen juntos. Diseñamos e implementamos integraciones y APIs confiables, documentadas y fáciles de mantener.',
      en: "ERP, CRM, payment gateways, third-party platforms and databases: many companies don't need another system, they need the ones they already have to work together. We design and build reliable, documented, maintainable integrations and APIs.",
    },
    problems: {
      es: [
        'Tu equipo copia datos manualmente de un sistema a otro.',
        'Los reportes no cuadran porque cada sistema tiene su propia versión de los datos.',
        'Necesitas compartir información con clientes, socios o aplicaciones.',
        'Vas a incorporar un sistema nuevo que debe convivir con los existentes.',
      ],
      en: [
        'Your team manually copies data from one system to another.',
        "Reports don't match because every system has its own version of the data.",
        'You need to share information with customers, partners or apps.',
        "You're adding a new system that has to coexist with the ones you have.",
      ],
    },
    deliverables: {
      es: [
        { title: 'Integraciones entre sistemas', text: 'ERP, CRM, e-commerce, contabilidad y pasarelas de pago.' },
        { title: 'APIs y backends', text: 'APIs seguras y documentadas para tus aplicaciones y socios.' },
        { title: 'Sincronización y migración de datos', text: 'Entre bases de datos y sistemas, con validaciones y control de errores.' },
        { title: 'Datos consolidados', text: 'Una fuente confiable de información para reportes y decisiones.' },
      ],
      en: [
        { title: 'System-to-system integrations', text: 'ERP, CRM, e-commerce, accounting and payment gateways.' },
        { title: 'APIs and backends', text: 'Secure, documented APIs for your applications and partners.' },
        { title: 'Data sync and migration', text: 'Across databases and systems, with validation and error handling.' },
        { title: 'Consolidated data', text: 'A single, reliable source of information for reporting and decisions.' },
      ],
    },
    approach: {
      es: [
        { title: 'Inventario', text: 'Qué sistemas existen, qué datos manejan y quién es responsable de cada uno.' },
        { title: 'Diseño de la integración', text: 'Flujos, formatos, frecuencia, seguridad y manejo de errores.' },
        { title: 'Implementación y pruebas', text: 'Con datos reales y escenarios de falla.' },
        { title: 'Monitoreo', text: 'Registros y alertas para detectar y resolver problemas a tiempo.' },
      ],
      en: [
        { title: 'Inventory', text: 'Which systems exist, what data they hold and who owns each one.' },
        { title: 'Integration design', text: 'Flows, formats, frequency, security and error handling.' },
        { title: 'Build and test', text: 'With real data and failure scenarios.' },
        { title: 'Monitoring', text: 'Logs and alerts to catch and fix problems early.' },
      ],
    },
    stack: ['Node.js', 'ASP.NET / C#', 'REST APIs', 'SignalR', 'PostgreSQL', 'SQL Server', 'Oracle', 'MongoDB'],
    faq: {
      es: [
        { q: '¿Pueden integrar un sistema que no tiene API?', a: 'Muchas veces sí: mediante acceso a la base de datos, intercambio de archivos u otros mecanismos disponibles. Lo evaluamos caso por caso.' },
        { q: '¿Qué pasa si una integración falla?', a: 'Diseñamos las integraciones con registros, reintentos y alertas, para detectar el problema y resolverlo sin perder información.' },
        { q: '¿Trabajan con ERPs y CRMs del mercado?', a: 'Sí. Nos integramos con sistemas comerciales a través de sus APIs o de los mecanismos de integración que ofrezcan.' },
      ],
      en: [
        { q: 'Can you integrate a system that has no API?', a: 'Often, yes: through database access, file exchange or other available mechanisms. We assess it case by case.' },
        { q: 'What happens if an integration fails?', a: 'We build integrations with logging, retries and alerts, so problems are detected and fixed without losing data.' },
        { q: 'Do you work with commercial ERPs and CRMs?', a: 'Yes. We integrate with commercial systems through their APIs or whatever integration mechanisms they provide.' },
      ],
    },
    experience: ['insurance-quoting', 'mobile-banking', 'offline-pos'],
    cases: [],
  },
  {
    slug: 'automation-ai',
    icon: Bot,
    kind: 'core',
    title: {
      es: 'Automatización e IA aplicada',
      en: 'Automation & Applied AI',
    },
    short: {
      es: 'Menos trabajo manual. IA donde realmente aporta.',
      en: 'Less manual work. AI where it actually adds value.',
    },
    lead: {
      es: 'Automatizamos procesos repetitivos y aplicamos inteligencia artificial a problemas concretos de tu operación: clasificar, extraer, resumir, responder y decidir más rápido. Empezamos por el proceso, no por la herramienta, y medimos el impacto.',
      en: 'We automate repetitive processes and apply artificial intelligence to concrete problems in your operation: classifying, extracting, summarizing, answering and deciding faster. We start with the process, not the tool, and we measure the impact.',
    },
    problems: {
      es: [
        'Tu equipo dedica horas a tareas repetitivas y de bajo valor.',
        'Procesas documentos, correos o solicitudes de forma manual.',
        'Quieres usar IA, pero no sabes dónde genera valor real.',
        'Clientes o equipos internos esperan demasiado por una respuesta.',
      ],
      en: [
        'Your team spends hours on repetitive, low-value tasks.',
        'Documents, emails or requests are processed by hand.',
        "You want to use AI but aren't sure where it creates real value.",
        'Customers or internal teams wait too long for answers.',
      ],
    },
    deliverables: {
      es: [
        { title: 'Automatización de flujos de trabajo', text: 'Aprobaciones, notificaciones y tareas entre sistemas.' },
        { title: 'Procesamiento inteligente de documentos', text: 'Extracción y validación de datos de facturas, formularios y documentos.' },
        { title: 'Asistentes con IA', text: 'Sobre la información de tu empresa, con control de acceso.' },
        { title: 'Clasificación y enrutamiento', text: 'Solicitudes, tickets y correos que llegan al lugar correcto.' },
        { title: 'Reportes asistidos', text: 'Resúmenes y alertas a partir de tus datos.' },
      ],
      en: [
        { title: 'Workflow automation', text: 'Approvals, notifications and tasks across systems.' },
        { title: 'Intelligent document processing', text: 'Extracting and validating data from invoices, forms and documents.' },
        { title: 'AI assistants', text: "Built on your company's information, with access control." },
        { title: 'Classification and routing', text: 'Requests, tickets and emails that reach the right place.' },
        { title: 'Assisted reporting', text: 'Summaries and alerts generated from your data.' },
      ],
    },
    approach: {
      es: [
        { title: 'Identificar', text: 'Buscamos procesos repetitivos, frecuentes y con reglas claras.' },
        { title: 'Medir', text: 'Registramos el punto de partida: tiempo, volumen y errores.' },
        { title: 'Pilotear', text: 'Automatizamos una parte acotada y comparamos resultados.' },
        { title: 'Escalar', text: 'Extendemos lo que funciona y lo integramos con tus sistemas.' },
      ],
      en: [
        { title: 'Identify', text: 'We look for repetitive, frequent processes with clear rules.' },
        { title: 'Measure', text: 'We record the baseline: time, volume and errors.' },
        { title: 'Pilot', text: 'We automate a well-scoped part and compare results.' },
        { title: 'Scale', text: 'We extend what works and integrate it with your systems.' },
      ],
    },
    stack: ['LLMs', 'Python', 'Node.js', 'REST APIs', 'Firebase'],
    faq: {
      es: [
        { q: '¿La IA va a reemplazar a mi equipo?', a: 'Nuestro enfoque es quitarle a tu equipo el trabajo repetitivo para que se concentre en lo que requiere criterio. Donde un error tiene costo, una persona revisa los casos dudosos.' },
        { q: '¿Qué pasa con la confidencialidad de mis datos?', a: 'Definimos contigo qué datos se usan, dónde se procesan y con qué proveedores, y diseñamos cada solución con control de acceso.' },
        { q: '¿Cómo sé si un proceso conviene automatizarlo?', a: 'Si es repetitivo, sigue reglas relativamente claras y consume tiempo de forma constante, es un buen candidato. Lo evaluamos contigo y empezamos con un piloto medible.' },
      ],
      en: [
        { q: 'Will AI replace my team?', a: "Our approach is to take repetitive work off your team's plate so they can focus on work that requires judgment. Where mistakes are costly, a person reviews the uncertain cases." },
        { q: 'What about the confidentiality of my data?', a: "We agree with you on which data is used, where it's processed and by which providers, and we design every solution with access control." },
        { q: 'How do I know if a process is worth automating?', a: "If it's repetitive, follows fairly clear rules and consistently eats up time, it's a good candidate. We assess it with you and start with a measurable pilot." },
      ],
    },
    experience: ['proptech-platform'],
    cases: [],
    insight: 'which-processes-to-automate-first',
  },
  {
    slug: 'digital-commerce',
    icon: Store,
    kind: 'core',
    title: {
      es: 'Comercio digital',
      en: 'Digital Commerce',
    },
    short: {
      es: 'Canales de venta en línea conectados a tu operación.',
      en: 'Online sales channels connected to your operation.',
    },
    lead: {
      es: 'Vender en línea es más que tener un catálogo: es inventario, pagos, logística y atención al cliente. Construimos canales de venta digital conectados con tus sistemas, sobre plataformas probadas o a medida, según lo que tu modelo de negocio necesite.',
      en: "Selling online takes more than a catalog: it's inventory, payments, logistics and customer service. We build digital sales channels connected to your systems, on proven platforms or fully custom, depending on what your business model needs.",
    },
    problems: {
      es: [
        'Quieres vender en línea con una operación ordenada desde el inicio.',
        'Tu tienda no se conecta con el inventario, la facturación o la logística.',
        'Necesitas catálogos B2B, precios por cliente o pedidos recurrentes.',
        'Tu plataforma actual limita el crecimiento.',
      ],
      en: [
        'You want to sell online with a well-organized operation from day one.',
        "Your store isn't connected to inventory, billing or logistics.",
        'You need B2B catalogs, customer-specific pricing or recurring orders.',
        'Your current platform is holding back growth.',
      ],
    },
    deliverables: {
      es: [
        { title: 'Tiendas en línea', text: 'Sobre plataformas consolidadas o a medida, según el caso.' },
        { title: 'Pedidos B2B', text: 'Catálogos, precios y pedidos para distribuidores y clientes corporativos.' },
        { title: 'Reservas y venta de servicios', text: 'Para turismo, eventos y negocios de servicios.' },
        { title: 'Integraciones operativas', text: 'Pagos, inventario, facturación y logística.' },
      ],
      en: [
        { title: 'Online stores', text: 'On established platforms or fully custom, depending on the case.' },
        { title: 'B2B ordering', text: 'Catalogs, pricing and ordering for distributors and corporate customers.' },
        { title: 'Bookings and service sales', text: 'For tourism, events and service businesses.' },
        { title: 'Operational integrations', text: 'Payments, inventory, billing and logistics.' },
      ],
    },
    approach: {
      es: [
        { title: 'Modelo de venta', text: 'Cómo vendes, a quién y qué necesita la operación detrás.' },
        { title: 'Plataforma', text: 'Elegimos entre una plataforma existente o un desarrollo a medida.' },
        { title: 'Construcción e integraciones', text: 'Catálogo, pagos y conexión con tus sistemas.' },
        { title: 'Lanzamiento y mejora', text: 'Medimos el comportamiento de compra y optimizamos.' },
      ],
      en: [
        { title: 'Sales model', text: 'How you sell, to whom, and what the operation behind it needs.' },
        { title: 'Platform', text: 'We choose between an existing platform and a custom build.' },
        { title: 'Build and integrate', text: 'Catalog, payments and connections to your systems.' },
        { title: 'Launch and improve', text: 'We measure buying behavior and optimize.' },
      ],
    },
    stack: ['WooCommerce', 'WordPress', 'Next.js', 'React', 'Node.js', 'React Native', 'Firebase'],
    faq: {
      es: [
        { q: '¿Plataforma existente o desarrollo a medida?', a: 'Si tu modelo de venta es estándar, una plataforma consolidada suele ser más rápida y económica. Recomendamos un desarrollo a medida cuando tu modelo de negocio, tus integraciones o tu escala lo requieren.' },
        { q: '¿Pueden conectar la tienda con nuestro sistema de inventario o facturación?', a: 'Sí. Es una de las partes más importantes del proyecto y la planificamos desde el inicio.' },
      ],
      en: [
        { q: 'Existing platform or custom build?', a: 'If your sales model is standard, an established platform is usually faster and more affordable. We recommend a custom build when your business model, integrations or scale require it.' },
        { q: 'Can you connect the store to our inventory or billing system?', a: "Yes. It's one of the most important parts of the project, and we plan it from the start." },
      ],
    },
    experience: ['offline-pos', 'retail-ordering'],
    cases: ['spring-tours', 'germsout'],
  },
  {
    slug: 'modernization',
    icon: RefreshCcw,
    kind: 'continuous',
    title: {
      es: 'Evolución, modernización y soporte',
      en: 'Modernization, Evolution & Support',
    },
    short: {
      es: 'Software que sigue mejorando después del lanzamiento.',
      en: 'Software that keeps improving after launch.',
    },
    lead: {
      es: 'El software no termina cuando sale a producción. Mantenemos, mejoramos y modernizamos sistemas, incluidos los que no construimos nosotros, para que sigan acompañando el crecimiento de tu empresa.',
      en: "Software isn't finished when it goes live. We maintain, improve and modernize systems, including ones we didn't build, so they keep up with your company's growth.",
    },
    problems: {
      es: [
        'Un sistema crítico depende de tecnología obsoleta.',
        'Nadie en tu equipo entiende del todo cómo funciona el sistema actual.',
        'El proveedor original ya no está disponible.',
        'Necesitas mejoras continuas sin armar un equipo interno.',
      ],
      en: [
        'A critical system depends on outdated technology.',
        'Nobody on your team fully understands how the current system works.',
        'The original vendor is no longer available.',
        'You need continuous improvements without building an in-house team.',
      ],
    },
    deliverables: {
      es: [
        { title: 'Mantenimiento y soporte', text: 'Corrección de errores, actualizaciones y monitoreo.' },
        { title: 'Evolución continua', text: 'Nuevas funcionalidades según tus prioridades de negocio.' },
        { title: 'Modernización por etapas', text: 'Migración de tecnologías heredadas, como .NET Framework o Xamarin, sin detener la operación.' },
        { title: 'Auditoría técnica', text: 'Diagnóstico de código, arquitectura y rendimiento, con un plan de acción.' },
      ],
      en: [
        { title: 'Maintenance and support', text: 'Bug fixes, updates and monitoring.' },
        { title: 'Continuous evolution', text: 'New features based on your business priorities.' },
        { title: 'Incremental modernization', text: 'Migrating legacy technologies, such as .NET Framework or Xamarin, without stopping operations.' },
        { title: 'Technical audit', text: 'Code, architecture and performance assessment, with an action plan.' },
      ],
    },
    approach: {
      es: [
        { title: 'Diagnóstico', text: 'Entendemos el código, la arquitectura, los riesgos y las prioridades.' },
        { title: 'Estabilización', text: 'Resolvemos lo urgente y aseguramos la operación.' },
        { title: 'Plan de evolución', text: 'Definimos qué modernizar, en qué orden y con qué impacto.' },
        { title: 'Mejora continua', text: 'Ciclos regulares de mejoras, con prioridades acordadas contigo.' },
      ],
      en: [
        { title: 'Assessment', text: 'We get to know the code, architecture, risks and priorities.' },
        { title: 'Stabilization', text: "We fix what's urgent and secure the operation." },
        { title: 'Evolution plan', text: 'We define what to modernize, in what order and with what impact.' },
        { title: 'Continuous improvement', text: 'Regular improvement cycles, with priorities agreed with you.' },
      ],
    },
    stack: ['.NET / C#', 'ASP.NET MVC', 'Xamarin', 'Angular', 'React', 'React Native', 'SQL Server', 'Oracle'],
    faq: {
      es: [
        { q: '¿Pueden hacerse cargo de un sistema que desarrolló otro proveedor?', a: 'Sí. Empezamos con un diagnóstico para entender el código, la arquitectura y los riesgos, y a partir de ahí proponemos un plan.' },
        { q: '¿Modernizar significa rehacer todo?', a: 'No necesariamente. Muchas veces conviene modernizar por partes, reemplazando módulos de forma gradual mientras el sistema sigue operando.' },
        { q: '¿Cómo funciona el soporte?', a: 'Lo definimos según tus necesidades: una bolsa de horas, un equipo dedicado o un acuerdo de servicio con tiempos de respuesta definidos.' },
      ],
      en: [
        { q: 'Can you take over a system built by another vendor?', a: 'Yes. We start with an assessment to understand the code, architecture and risks, and then propose a plan.' },
        { q: 'Does modernization mean rebuilding everything?', a: 'Not necessarily. It often makes sense to modernize in parts, gradually replacing modules while the system keeps running.' },
        { q: 'How does support work?', a: 'We tailor it to your needs: a block of hours, a dedicated team or a service agreement with defined response times.' },
      ],
    },
    experience: ['mobile-banking', 'admin-systems'],
    cases: [],
  },
];

export const getSolution = (slug: string | undefined) => solutions.find((s) => s.slug === slug);
