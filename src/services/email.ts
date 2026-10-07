const SERVICE_ID = 'service_zh07kgt';
const TEMPLATE_ID = 'template_dhf9cuc';
const PUBLIC_KEY = 'sgT0gJQ9Aaz6zwBT-';

export interface EmailData {
    name: string;
    email: string;
    message: string;
    company?: string;
    phone?: string;
    need?: string;
    stage?: string;
    budget?: string;
    language?: string;
}

// The current EmailJS template only renders name, email and message, so the qualification
// fields are also folded into the message body. They are sent as separate params too, in case
// the template is updated to use them.
const composeMessage = (data: EmailData) => {
    const details: [string, string | undefined][] = [
        ['Empresa', data.company],
        ['Teléfono / WhatsApp', data.phone],
        ['Necesidad', data.need],
        ['Etapa', data.stage],
        ['Presupuesto', data.budget],
        ['Idioma del sitio', data.language],
    ];
    const header = details
        .filter(([, value]) => value)
        .map(([label, value]) => `${label}: ${value}`)
        .join('\n');
    return header ? `${header}\n\n${data.message}` : data.message;
};

export const sendEmail = async (data: EmailData) => {
    try {
        // Loaded on demand: only visitors who submit the form download the EmailJS client.
        const { default: emailjs } = await import('@emailjs/browser');
        const response = await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            {
                from_name: data.name,
                from_email: data.email,
                reply_to: data.email,
                message: composeMessage(data),
                company: data.company ?? '',
                phone: data.phone ?? '',
                need: data.need ?? '',
                stage: data.stage ?? '',
                budget: data.budget ?? '',
                to_email: 'hello@webuddy.dev',
            },
            PUBLIC_KEY
        );
        return { success: true, response };
    } catch (error) {
        console.error('EmailJS Error:', error);
        return { success: false, error };
    }
};
