import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { Code, Smartphone, Palette, Globe, Instagram, Cpu, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const services = [
    {
        icon: <Code className="w-8 h-8" />,
        title: "Web Applications",
        description: "Scalable, high-performance web applications built with Next.js and React. Engineered for speed and SEO.",
        details: ["SPA/PWA Architecture", "Next.js SSR/ISR", "Headless CMS Integration", "WebGL Experiences"]
    },
    {
        icon: <Smartphone className="w-8 h-8" />,
        title: "Mobile Development",
        description: "Native iOS and Android apps, or cross-platform solutions that deliver exceptional user experiences. We build apps that users love and that drive real business results.",
        details: ["iOS & Android", "Cross-Platform", "User-Centered Design", "App Store Optimization"]
    },
    {
        icon: <Instagram className="w-8 h-8" />,
        title: "Social Media Management",
        description: "Strategic social media management that grows your audience and builds meaningful connections. We create content, manage communities, and analyze performance to maximize your social presence.",
        details: ["Content Strategy", "Community Management", "Analytics & Reporting", "Paid Campaigns"]
    }
];

export const Services = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
                    <motion.div
                        key={index}
                        className="group relative bg-webuddy-card border border-white/5 rounded-2xl p-8 overflow-hidden hover:border-webuddy-blue/30 transition-colors duration-500"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        {/* Hover Gradient Background */}
                        <div
                            className="absolute inset-0 bg-gradient-to-br from-webuddy-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        />

                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col justify-between min-h-[280px]">
                            <div>
                                <div className="mb-6 p-3 bg-white/5 w-fit rounded-xl text-webuddy-electric group-hover:scale-110 group-hover:bg-webuddy-blue/20 transition-all duration-300">
                                    {service.icon}
                                </div>

                                <h3 className="text-2xl font-bold mb-4 font-display group-hover:text-webuddy-blue transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed mb-6">
                                    {service.description}
                                </p>
                            </div>

                            {/* Expandable Details */}
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{
                                    height: hoveredIndex === index ? 'auto' : 0,
                                    opacity: hoveredIndex === index ? 1 : 0
                                }}
                                className="overflow-hidden"
                            >
                                <ul className="space-y-2 pt-4 border-t border-white/10">
                                    {service.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-gray-300">
                                            <span className="w-1.5 h-1.5 bg-webuddy-electric rounded-full mr-2" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Arrow Icon */}
                            <div className={`mt-auto pt-4 flex items-center text-sm font-medium text-webuddy-electric transition-transform duration-300 ${hoveredIndex === index ? 'translate-x-2' : ''}`}>
                                Explore Capability →
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
