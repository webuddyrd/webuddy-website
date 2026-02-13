import { motion } from 'framer-motion';
import { useState } from 'react';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  features?: string[];
  variant?: 'interactive' | 'static';
  index?: number;
}

export const ServiceCard = ({ icon: Icon, title, description, features = [], variant = 'static', index = 0 }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const isInteractive = variant === 'interactive';

  const cardContent = (
    <>
      <div
        className="absolute inset-0 bg-gradient-to-br from-webuddy-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      />

      {!isInteractive && (
        <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none">
          <Icon size={120} />
        </div>
      )}

      <div className="relative z-10 h-full flex flex-col justify-between min-h-[280px]">
        <div>
          <div className={`mb-6 p-3 width-fit w-fit rounded-xl text-webuddy-electric transition-all duration-300 ${isInteractive ? 'bg-white/5 group-hover:scale-110 group-hover:bg-webuddy-blue/20' : 'bg-webuddy-blue/20 group-hover:scale-110'}`}>
            <Icon size={32} />
          </div>

          <h3 className={`text-2xl font-bold mb-4 ${isInteractive ? 'font-display group-hover:text-webuddy-blue' : 'text-white'} transition-colors`}>
            {title}
          </h3>

          <p className="text-gray-400 leading-relaxed mb-6">
            {description}
          </p>
        </div>

        {isInteractive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isHovered ? 'auto' : 0,
              opacity: isHovered ? 1 : 0
            }}
            className="overflow-hidden"
          >
            <ul className="space-y-2 pt-4 border-t border-white/10">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-sm text-gray-300">
                  <span className="w-1.5 h-1.5 bg-webuddy-electric rounded-full mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {!isInteractive && features.length > 0 && (
          <ul className="space-y-2 mb-8">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-1.5 h-1.5 rounded-full bg-webuddy-blue" />
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );

  return (
    <motion.div
      className={`group relative rounded-2xl overflow-hidden transition-all duration-500 ${isInteractive
        ? 'bg-webuddy-card border border-white/5 hover:border-webuddy-blue/30 p-8'
        : 'p-8 bg-white/5 border border-white/10 hover:border-webuddy-blue/50 hover:bg-white/10'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      {cardContent}
    </motion.div>
  );
};
