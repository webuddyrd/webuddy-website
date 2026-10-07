import type { Localized } from '../i18n/lang';
import type { SolutionSlug } from './solutions';

export type InsightSlug =
  | 'custom-vs-off-the-shelf-software'
  | 'which-processes-to-automate-first'
  | 'how-to-prepare-a-software-project';

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'callout'; title: string; text: string }
  | { type: 'checklist'; title: string; items: string[] }
  | { type: 'brief'; title: string; intro: string; fields: { label: string; hint: string }[] };

export interface Insight {
  slug: InsightSlug;
  date: string;
  title: Localized;
  summary: Localized;
  body: Localized<Block[]>;
  solution: SolutionSlug;
}

export const insights: Insight[] = [
  {
    slug: 'custom-vs-off-the-shelf-software',
    date: '2026-10-06',
    solution: 'business-software',
    title: {
      es: '¿Software a medida o software del mercado? Cinco preguntas para decidir',
      en: 'Custom or off-the-shelf software? Five questions to help you decide',
    },
    summary: {
      es: 'No siempre conviene construir. Estas cinco preguntas te ayudan a decidir cuándo un software del mercado es suficiente y cuándo un sistema a medida es la mejor inversión.',
      en: "Building isn't always the answer. These five questions help you decide when off-the-shelf software is enough and when a custom system is the better investment.",
    },
    body: {
      es: [
        { type: 'p', text: 'Una de las primeras preguntas que nos hacen es si conviene desarrollar un sistema a medida o usar un software que ya existe. La respuesta honesta es que depende, y que muchas veces la mejor decisión es no construir. Estas son las preguntas que usamos para decidirlo con nuestros clientes.' },
        { type: 'h2', text: '1. ¿El proceso es parte de lo que te diferencia?' },
        { type: 'p', text: 'Si la forma en que haces algo es parte de lo que te hace competitivo (cómo cotizas, cómo atiendes a tus clientes, cómo opera tu equipo en campo), forzarla dentro de un software genérico puede costarte esa ventaja. Si el proceso es estándar, como la contabilidad, la nómina o el correo, lo razonable es usar una herramienta probada.' },
        { type: 'h2', text: '2. ¿Cuántas excepciones necesita tu equipo para trabajar con la herramienta actual?' },
        { type: 'p', text: 'Hojas de cálculo paralelas, pasos manuales, datos que se copian de un sistema a otro: cada excepción es un costo oculto que se paga todos los días. Si tu equipo pasa más tiempo trabajando alrededor del software que con él, vale la pena evaluar alternativas.' },
        { type: 'h2', text: '3. ¿El problema es el software, o que no se conecta con nada?' },
        { type: 'p', text: 'Muchas veces la herramienta funciona bien, pero vive aislada. Antes de reemplazar un sistema, conviene preguntarse si una integración resuelve el problema con una inversión menor.' },
        { type: 'h2', text: '4. ¿Cuál es el costo total en el tiempo?' },
        { type: 'p', text: 'El software del mercado suele tener un costo inicial bajo, pero sus licencias crecen con cada usuario y cada módulo. Un sistema a medida requiere una inversión inicial mayor, pero te da control sobre su evolución. Compara ambos escenarios a tres o cinco años, incluyendo licencias, adaptaciones, mantenimiento y el tiempo de tu equipo.' },
        { type: 'h2', text: '5. ¿Quién lo va a mantener?' },
        { type: 'p', text: 'Un sistema a medida necesita a alguien que lo mantenga y lo haga evolucionar. Define desde el inicio cómo se dará ese soporte: un equipo interno, un proveedor de confianza o una combinación de ambos.' },
        { type: 'callout', title: 'Una regla práctica', text: 'Si un software del mercado resuelve la mayor parte de tu necesidad sin obligarte a cambiar lo que te hace diferente, úsalo e intégralo. Construye a medida lo que es central para tu negocio o lo que ninguna herramienta resuelve bien.' },
        { type: 'p', text: 'Si estás en este punto de la decisión, un Discovery corto puede ahorrarte meses: entendemos el proceso, evaluamos las alternativas disponibles y te damos una recomendación clara, aunque esa recomendación sea no construir.' },
      ],
      en: [
        { type: 'p', text: 'One of the first questions we get is whether to build a custom system or use software that already exists. The honest answer is that it depends, and quite often the best decision is not to build. These are the questions we use to make that call with our clients.' },
        { type: 'h2', text: '1. Is the process part of what sets you apart?' },
        { type: 'p', text: 'If the way you do something is part of what makes you competitive (how you quote, how you serve customers, how your field team operates), forcing it into generic software can cost you that edge. If the process is standard, like accounting, payroll or email, the sensible choice is a proven tool.' },
        { type: 'h2', text: '2. How many workarounds does your team need to use the current tool?' },
        { type: 'p', text: "Side spreadsheets, manual steps, data copied from one system to another: every workaround is a hidden cost you pay every day. If your team spends more time working around the software than with it, it's worth looking at alternatives." },
        { type: 'h2', text: "3. Is the problem the software, or that it doesn't connect to anything?" },
        { type: 'p', text: 'Often the tool works fine but lives in isolation. Before replacing a system, ask whether an integration would solve the problem for a smaller investment.' },
        { type: 'h2', text: "4. What's the total cost over time?" },
        { type: 'p', text: "Off-the-shelf software usually has a low upfront cost, but licenses grow with every user and module. A custom system needs a larger initial investment but gives you control over how it evolves. Compare both scenarios over three to five years, including licenses, customizations, maintenance and your team's time." },
        { type: 'h2', text: '5. Who will maintain it?' },
        { type: 'p', text: 'A custom system needs someone to maintain and evolve it. Decide from the start how that support will work: an in-house team, a trusted vendor or a mix of both.' },
        { type: 'callout', title: 'A rule of thumb', text: 'If an off-the-shelf product covers most of your needs without forcing you to change what makes you different, use it and integrate it. Build custom what is core to your business or what no tool handles well.' },
        { type: 'p', text: "If you're at this decision point, a short Discovery can save you months: we map the process, evaluate the available options and give you a clear recommendation, even if that recommendation is not to build." },
      ],
    },
  },
  {
    slug: 'which-processes-to-automate-first',
    date: '2026-10-06',
    solution: 'automation-ai',
    title: {
      es: '¿Qué procesos conviene automatizar primero?',
      en: 'Which processes should you automate first?',
    },
    summary: {
      es: 'Automatizar el proceso equivocado sale caro. Esta guía te ayuda a identificar buenos candidatos, priorizarlos y empezar con un piloto medible.',
      en: 'Automating the wrong process is expensive. This guide helps you spot good candidates, prioritize them and start with a measurable pilot.',
    },
    body: {
      es: [
        { type: 'p', text: 'La automatización y la inteligencia artificial prometen mucho, pero el valor real aparece cuando se aplican al proceso correcto. Antes de elegir una herramienta, conviene elegir bien el problema.' },
        { type: 'h2', text: 'Señales de un buen candidato' },
        {
          type: 'list',
          items: [
            'Se repite con frecuencia: a diario o cada semana, no una vez al trimestre.',
            'Sigue reglas relativamente claras, aunque tenga excepciones.',
            'Ocupa el tiempo de personas valiosas en tareas de bajo valor.',
            'Implica copiar información entre sistemas, correos o documentos.',
            'Los errores manuales tienen un costo: reprocesos, reclamos o pérdidas.',
          ],
        },
        { type: 'h2', text: 'Señales de que todavía no es el momento' },
        {
          type: 'list',
          items: [
            'El proceso cambia constantemente o nadie puede describirlo con claridad.',
            'Ocurre pocas veces y el ahorro sería mínimo.',
            'Depende casi por completo del criterio de una persona experta.',
            'Los datos necesarios no existen o no están en condiciones de usarse.',
          ],
        },
        { type: 'p', text: 'En estos casos, el primer paso suele ser ordenar el proceso o los datos, no automatizar.' },
        { type: 'h2', text: 'Cómo priorizar' },
        { type: 'p', text: 'Para cada candidato, estima tres cosas y empieza por el que combine más impacto con menor complejidad:' },
        {
          type: 'list',
          items: [
            'Impacto: cuántas horas consume a la semana y cuántas personas participan.',
            'Riesgo: cuánto cuesta un error cuando ocurre.',
            'Complejidad: cuántos sistemas, reglas y excepciones están involucrados.',
          ],
        },
        { type: 'h2', text: '¿Y la inteligencia artificial?' },
        { type: 'p', text: 'La IA es especialmente útil cuando el proceso involucra lenguaje o documentos: clasificar solicitudes, extraer datos de facturas, resumir información o responder preguntas frecuentes. Para reglas fijas, una automatización tradicional suele ser más simple, más barata y más predecible. Y en procesos donde un error tiene costo, conviene que una persona revise los casos dudosos.' },
        { type: 'h2', text: 'Empieza con un piloto' },
        { type: 'p', text: 'Elige un proceso, mide el punto de partida (tiempo, volumen y errores), automatiza una parte acotada y compara. Un piloto bien medido te dice si conviene escalar y te da los argumentos para hacerlo.' },
        {
          type: 'checklist',
          title: 'Antes de automatizar, verifica que:',
          items: [
            'El proceso está documentado, aunque sea de forma sencilla.',
            'Sabes cuánto tiempo consume hoy.',
            'Tienes acceso a los datos y sistemas involucrados.',
            'Hay una persona responsable del proceso.',
            'Definiste cómo vas a medir el resultado.',
          ],
        },
      ],
      en: [
        { type: 'p', text: "Automation and artificial intelligence promise a lot, but the real value shows up when they're applied to the right process. Before choosing a tool, choose the problem carefully." },
        { type: 'h2', text: 'Signs of a good candidate' },
        {
          type: 'list',
          items: [
            'It happens often: daily or weekly, not once a quarter.',
            'It follows fairly clear rules, even if there are exceptions.',
            "It takes up valuable people's time with low-value work.",
            'It involves copying information between systems, emails or documents.',
            'Manual errors are costly: rework, complaints or losses.',
          ],
        },
        { type: 'h2', text: "Signs it's not time yet" },
        {
          type: 'list',
          items: [
            'The process changes constantly, or nobody can describe it clearly.',
            'It rarely happens and the savings would be minimal.',
            "It depends almost entirely on an expert's judgment.",
            "The data you need doesn't exist or isn't usable yet.",
          ],
        },
        { type: 'p', text: 'In these cases, the first step is usually to organize the process or the data, not to automate it.' },
        { type: 'h2', text: 'How to prioritize' },
        { type: 'p', text: 'For each candidate, estimate three things and start with the one that combines the most impact with the least complexity:' },
        {
          type: 'list',
          items: [
            'Impact: how many hours it takes each week and how many people are involved.',
            'Risk: how much an error costs when it happens.',
            'Complexity: how many systems, rules and exceptions are involved.',
          ],
        },
        { type: 'h2', text: 'What about artificial intelligence?' },
        { type: 'p', text: 'AI is especially useful when the process involves language or documents: classifying requests, extracting data from invoices, summarizing information or answering common questions. For fixed rules, traditional automation is usually simpler, cheaper and more predictable. And where mistakes are costly, a person should review the uncertain cases.' },
        { type: 'h2', text: 'Start with a pilot' },
        { type: 'p', text: 'Pick one process, measure the baseline (time, volume and errors), automate a well-scoped part and compare. A well-measured pilot tells you whether to scale and gives you the arguments to do it.' },
        {
          type: 'checklist',
          title: 'Before you automate, make sure:',
          items: [
            'The process is documented, even simply.',
            'You know how much time it takes today.',
            'You have access to the data and systems involved.',
            'Someone owns the process.',
            "You've defined how you'll measure the result.",
          ],
        },
      ],
    },
  },
  {
    slug: 'how-to-prepare-a-software-project',
    date: '2026-10-06',
    solution: 'discovery',
    title: {
      es: 'Cómo preparar tu proyecto de software antes de hablar con un proveedor',
      en: 'How to prepare your software project before talking to a vendor',
    },
    summary: {
      es: 'No necesitas un documento técnico para empezar. Estas son las preguntas que conviene responder para que la primera conversación sea útil, con una plantilla lista para imprimir.',
      en: "You don't need a technical document to get started. These are the questions worth answering so the first conversation is useful, plus a printable template.",
    },
    body: {
      es: [
        { type: 'p', text: 'Muchas empresas posponen la conversación con un proveedor de software porque sienten que todavía no tienen todo definido. La buena noticia es que no hace falta. Lo que sí ayuda es tener claras algunas respuestas sobre el problema, no sobre la tecnología.' },
        { type: 'h2', text: '1. El problema, en palabras del negocio' },
        { type: 'p', text: 'Describe qué pasa hoy y por qué es un problema. Por ejemplo: «Los pedidos llegan por WhatsApp y por correo, y perdemos tiempo y ventas consolidándolos». Evita empezar por la solución («necesitamos una app»): describir el problema abre más alternativas.' },
        { type: 'h2', text: '2. Quiénes participan' },
        { type: 'p', text: '¿Qué personas o áreas intervienen en el proceso? ¿Clientes, equipo interno, proveedores? ¿Cuántos usuarios, aproximadamente?' },
        { type: 'h2', text: '3. Qué existe hoy' },
        { type: 'p', text: 'Sistemas, hojas de cálculo, herramientas y datos actuales. Si algo debe mantenerse o integrarse, menciónalo desde el inicio.' },
        { type: 'h2', text: '4. Cómo se ve el éxito' },
        { type: 'p', text: '¿Qué debería cambiar cuando el proyecto funcione? Menos horas de trabajo manual, menos errores, más ventas, mejor visibilidad. Si puedes ponerle un número aproximado, mucho mejor.' },
        { type: 'h2', text: '5. Restricciones y decisiones' },
        { type: 'p', text: 'Fechas importantes, presupuesto aproximado, requisitos legales o de seguridad, y quién toma las decisiones.' },
        { type: 'h2', text: 'Lo que no necesitas tener resuelto' },
        { type: 'p', text: 'La arquitectura, las tecnologías, el diseño de las pantallas o el detalle de cada funcionalidad. Esa es justamente la parte en la que un buen equipo de software te ayuda.' },
        {
          type: 'brief',
          title: 'Plantilla: brief de proyecto',
          intro: 'Imprímela o guárdala como PDF, complétala con tu equipo y llévala a la primera conversación.',
          fields: [
            { label: 'Empresa y persona de contacto', hint: 'Nombre, cargo y área.' },
            { label: 'El problema hoy', hint: 'Qué pasa, desde cuándo y qué impacto tiene.' },
            { label: 'Personas involucradas', hint: 'Quién participa en el proceso y cuántos usuarios hay, aproximadamente.' },
            { label: 'Sistemas y datos actuales', hint: 'Herramientas, hojas de cálculo y sistemas que existen hoy.' },
            { label: 'Cómo se ve el éxito', hint: 'Qué debería cambiar y cómo lo medirías.' },
            { label: 'Fechas y restricciones', hint: 'Plazos, requisitos legales o de seguridad.' },
            { label: 'Presupuesto aproximado', hint: 'Un rango es suficiente.' },
            { label: 'Quién toma las decisiones', hint: 'Personas que aprueban el alcance y la inversión.' },
          ],
        },
        { type: 'p', text: 'Con estas respuestas, la primera conversación puede enfocarse en lo importante: entender tu necesidad y definir el siguiente paso.' },
      ],
      en: [
        { type: 'p', text: "Many companies put off talking to a software vendor because they feel they don't have everything figured out yet. The good news is that you don't need to. What does help is having clear answers about the problem, not the technology." },
        { type: 'h2', text: '1. The problem, in business terms' },
        { type: 'p', text: "Describe what happens today and why it's a problem. For example: “Orders come in through WhatsApp and email, and we lose time and sales consolidating them.” Avoid starting with the solution (“we need an app”): describing the problem opens up more options." },
        { type: 'h2', text: "2. Who's involved" },
        { type: 'p', text: 'Which people or departments take part in the process? Customers, internal teams, suppliers? Roughly how many users?' },
        { type: 'h2', text: '3. What exists today' },
        { type: 'p', text: 'Current systems, spreadsheets, tools and data. If something needs to be kept or integrated, mention it from the start.' },
        { type: 'h2', text: '4. What success looks like' },
        { type: 'p', text: 'What should change once the project works? Fewer hours of manual work, fewer errors, more sales, better visibility. If you can put a rough number on it, even better.' },
        { type: 'h2', text: '5. Constraints and decisions' },
        { type: 'p', text: 'Key dates, approximate budget, legal or security requirements, and who makes the decisions.' },
        { type: 'h2', text: "What you don't need to have figured out" },
        { type: 'p', text: "The architecture, the technologies, the screen designs or the details of every feature. That's exactly the part a good software team helps you with." },
        {
          type: 'brief',
          title: 'Template: project brief',
          intro: 'Print it or save it as a PDF, fill it in with your team and bring it to the first conversation.',
          fields: [
            { label: 'Company and contact person', hint: 'Name, title and department.' },
            { label: 'The problem today', hint: 'What happens, since when and what impact it has.' },
            { label: 'People involved', hint: 'Who takes part in the process and roughly how many users there are.' },
            { label: 'Current systems and data', hint: 'Tools, spreadsheets and systems in place today.' },
            { label: 'What success looks like', hint: "What should change and how you'd measure it." },
            { label: 'Dates and constraints', hint: 'Deadlines, legal or security requirements.' },
            { label: 'Approximate budget', hint: 'A range is enough.' },
            { label: 'Decision makers', hint: 'People who approve the scope and the investment.' },
          ],
        },
        { type: 'p', text: 'With these answers, the first conversation can focus on what matters: understanding your need and defining the next step.' },
      ],
    },
  },
];

export const getInsight = (slug: string | undefined) => insights.find((i) => i.slug === slug);

export function readingMinutes(blocks: Block[]) {
  const words = blocks
    .flatMap((b) => {
      if (b.type === 'list' || b.type === 'checklist') return b.items;
      if (b.type === 'brief') return b.fields.map((f) => `${f.label} ${f.hint}`);
      if (b.type === 'callout') return [b.title, b.text];
      return [b.text];
    })
    .join(' ')
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
