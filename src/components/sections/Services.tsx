import { Section } from '../ui/Section';
import { Code, Smartphone, Instagram, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ServiceCard } from '../ServiceCard';

const services = [
    {
        icon: Code,
        title: "Web Applications",
        description: "We build fast, beautiful, and conversion-optimized websites that work flawlessly across all devices. From landing pages to complex web applications, we create digital experiences that represent your brand perfectly.",
        details: ["Responsive Design", "SEO Optimization", "Performance Focused", "CMS Integration"]
    },
    {
        icon: Smartphone,
        title: "Mobile Development",
        description: "Native iOS and Android apps, or cross-platform solutions that deliver exceptional user experiences. We build apps that users love and that drive real business results.",
        details: ["iOS & Android", "Cross-Platform", "User-Centered Design", "App Store Optimization"]
    },
    {
        icon: Instagram,
        title: "Social Media Management",
        description: "Strategic social media management that grows your audience and builds meaningful connections. We create content, manage communities, and analyze performance to maximize your social presence.",
        details: ["Content Strategy", "Community Management", "Analytics & Reporting", "Paid Campaigns"]
    }
];

export const Services = () => {

    return (
        <Section className="py-32 container mx-auto px-4" id="services">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                            Our <span className="text-webuddy-blue">Services</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl">
                            We don't just build websites. We engineer digital products that scale, perform, and drive business growth.
                        </p>
                    </div>
                    <Link to="/services" className="flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-white transition-colors">
                        View All Services <ArrowUpRight size={16} />
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                        features={service.details}
                        variant="interactive"
                        index={index}
                    />
                ))}
            </div>
        </Section>
    );
};
