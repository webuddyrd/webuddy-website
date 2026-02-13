import { motion, HTMLMotionProps } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PortfolioItem } from '../../data/portfolio';
import { useTranslation } from 'react-i18next';

interface WorkCardProps extends HTMLMotionProps<'div'> {
    project: PortfolioItem;
    index: number;
    className?: string;
}

export const WorkCard = ({ project, index, className = '', ...props }: WorkCardProps) => {
    const { t, i18n } = useTranslation();
    const description = i18n.language.startsWith('es') ? project.description_es : project.description_en;
    const categoryKey = project.category.toLowerCase().replace('-', '');

    return (
        <motion.div
            layout
            className={`group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer ${className}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            {...props}
        >
            <img src={project.image} alt={project.title} />

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-xs font-bold text-white/80 uppercase tracking-wider mb-2 block p-1 px-3 bg-white/10 w-fit rounded-full backdrop-blur-md">
                        {t(`portfolio.filters.${categoryKey}`, { defaultValue: project.category })}
                    </span>
                    <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h4>
                    <p className="text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 text-sm max-w-md">
                        {description}
                    </p>
                </div>
                <Link to={project.url} target='_blank' rel="noopener noreferrer" className="absolute top-8 right-8 bg-white/10 p-3 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowUpRight className="text-white" size={20} />
                </Link>
            </div>
        </motion.div>
    );
};
