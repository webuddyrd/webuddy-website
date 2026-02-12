import { useState } from 'react';
import { Section } from '../components/ui/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const categories = ["All", "Web", "Mobile", "Fintech", "E-Commerce"];

const projects = [
  {
    title: "FinTech Dashboard",
    category: "Fintech",
    description: "Real-time financial analytics platform.",
    image: "linear-gradient(45deg, #1e3a8a, #3b82f6)"
  },
  {
    title: "Luxury Commerce",
    category: "E-Commerce",
    description: "Immersive shopping experience with 3D.",
    image: "linear-gradient(45deg, #581c87, #d946ef)"
  },
  {
    title: "HealthAI System",
    category: "Web",
    description: "Diagnostic assistance tool powered by AI.",
    image: "linear-gradient(45deg, #064e3b, #14b8a6)"
  },
  {
    title: "Crypto Wallet",
    category: "Mobile",
    description: "Secure mobile wallet for digital assets.",
    image: "linear-gradient(45deg, #ea580c, #facc15)"
  },
  {
    title: "Real Estate VR",
    category: "Web",
    description: "Virtual tours for luxury properties.",
    image: "linear-gradient(45deg, #374151, #9ca3af)"
  },
  {
    title: "Social Connect",
    category: "Mobile",
    description: "Next-gen social network for creators.",
    image: "linear-gradient(45deg, #be123c, #fb7185)"
  }
];

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="bg-webuddy-dark min-h-screen pt-32 pb-20">
      <Section>
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h1
              className="text-5xl md:text-7xl font-display font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-webuddy-blue to-webuddy-electric">Work</span>
            </motion.h1>

            {/* Filters */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === cat
                      ? "bg-white text-black border-white"
                      : "bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
                >
                  {/* Background Image Placeholder */}
                  <div
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                    style={{ background: project.image }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-xs font-bold text-white/80 uppercase tracking-wider mb-2 block p-1 px-3 bg-white/10 w-fit rounded-full backdrop-blur-md">
                        {project.category}
                      </span>
                      <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                      <p className="text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                        {project.description}
                      </p>
                    </div>
                    <div className="absolute top-6 right-6 bg-white/10 p-2 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <ArrowUpRight className="text-white" size={20} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};
