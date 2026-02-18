import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_zh07kgt';
const TEMPLATE_ID = 'template_dhf9cuc';
const PUBLIC_KEY = 'sgT0gJQ9Aaz6zwBT-';

export interface EmailData {
    name: string;
    email: string;
    message: string;
}

export const sendEmail = async (data: EmailData) => {
    try {
        const response = await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            {
                from_name: data.name,
                from_email: data.email,
                message: data.message,
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
