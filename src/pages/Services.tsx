import { Section } from '../components/ui/Section';
import { ServiceCard } from '../components/ServiceCard';
import { motion } from 'framer-motion';
import { Code, Smartphone, Palette, Globe, Instagram, Cpu } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: "Web Applications",
    description: "We build fast, beautiful, and conversion-optimized websites that work flawlessly across all devices. From landing pages to complex web applications, we create digital experiences that represent your brand perfectly.",
    features: ["Responsive Design", "SEO Optimization", "Performance Focused", "CMS Integration"]
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native iOS and Android apps, or cross-platform solutions that deliver exceptional user experiences. We build apps that users love and that drive real business results.",
    features: ["iOS & Android", "Cross-Platform", "User-Centered Design", "App Store Optimization"]
  },
  {
    icon: Instagram,
    title: "Social Media Management",
    description: "Strategic social media management that grows your audience and builds meaningful connections. We create content, manage communities, and analyze performance to maximize your social presence.",
    features: ["Content Strategy", "Community Management", "Analytics & Reporting", "Paid Campaigns"]
  },
  {
    icon: Globe,
    title: "Digital Strategy",
    description: "Comprehensive audits and roadmaps to align technology with business goals.",
    features: ["Tech Consulting", "SEO & Performance", "Market Analysis"]
  },
  {
    icon: Palette,
    title: "Branding",
    description: "Complete brand identity systems that make your business stand out. From logos to brand guidelines, we create cohesive visual identities that resonate with your audience.",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"]
  },
  {
    icon: Cpu,
    title: "Automation & AI",
    description: "Leveraging AI to streamline operations and create intelligent interfaces and automations.",
    features: ["Workflow Automation", "LLM Integration", "Data Processing"]
  }
];

export const Services = () => {
  return (
    <div className="bg-webuddy-dark min-h-screen pt-32 pb-20">
      <Section>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.h1
              className="text-5xl md:text-7xl font-display font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-webuddy-blue to-webuddy-electric">Services</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              We combine engineering precision with creative strategy to build digital products that define categories.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                variant="static"
                index={index}
              />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};
