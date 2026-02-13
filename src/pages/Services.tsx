import { Section } from '../components/ui/Section';
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
          {/* Header */}
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

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-webuddy-blue/50 hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {/* Background Icon */}
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
                  <service.icon size={120} />
                </div>

                <div className="relative z-10">
                  <div className="bg-webuddy-blue/20 w-fit p-4 rounded-2xl mb-6 text-webuddy-electric group-hover:scale-110 transition-transform duration-300">
                    <service.icon size={32} />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-webuddy-blue" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};
