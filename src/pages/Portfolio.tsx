import { useState } from 'react';
import { Section } from '../components/ui/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolio } from '../data/portfolio';
import { WorkCard } from '../components/ui/WorkCard';
import { useTranslation } from 'react-i18next';

export const Portfolio = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { key: "All", label: t('portfolio.filters.all') },
    { key: "Web", label: t('portfolio.filters.web') },
    { key: "Mobile", label: t('portfolio.filters.mobile') },
    { key: "E-Commerce", label: t('portfolio.filters.ecommerce') }
  ];

  const filteredProjects = activeCategory === "All"
    ? portfolio
    : portfolio.filter(p => p.category === activeCategory);

  return (
    <div className="bg-webuddy-dark min-h-screen pt-32 pb-20">
      <Section>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h1
              className="text-5xl md:text-7xl font-display font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {t('portfolio.hero.titlePrefix')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-webuddy-blue to-webuddy-electric">{t('portfolio.hero.titleSuffix')}</span>
            </motion.h1>
            <motion.div
              className="flex flex-wrap justify-center gap-4 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === cat.key
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </motion.div>
          </div>
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <WorkCard
                  key={project.title}
                  project={project}
                  index={index}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};
