import { Section } from '../ui/Section';
import { TestimonialCard } from '../TestimonialCard';
import { useTranslation } from 'react-i18next';

export const Testimonials = () => {
    const { t } = useTranslation();

    const testimonials = [
        {
            quote: t('home.testimonials.testimonial1.quote'),
            author: t('home.testimonials.testimonial1.author'),
            role: t('home.testimonials.testimonial1.role')
        },
        {
            quote: t('home.testimonials.testimonial2.quote'),
            author: t('home.testimonials.testimonial2.author'),
            role: t('home.testimonials.testimonial2.role')
        },
        {
            quote: t('home.testimonials.testimonial3.quote'),
            author: t('home.testimonials.testimonial3.author'),
            role: t('home.testimonials.testimonial3.role')
        }
    ];

    return (
        <Section className="py-32 container mx-auto px-4" id="testimonials">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                        {t('home.testimonials.title')}
                    </h2>
                    <p className="text-xl text-gray-400">
                        {t('home.testimonials.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            quote={testimonial.quote}
                            author={testimonial.author}
                            role={testimonial.role}
                            delay={index * 100}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
};
