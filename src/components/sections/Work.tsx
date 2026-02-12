import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { portfolio } from '../../data/portfolio';
import { Link } from 'react-router-dom';

export const Work = () => {
    return (
        <section id="work" className="py-32 bg-webuddy-dark relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-sm font-bold text-webuddy-blue tracking-widest uppercase mb-4">Selected Work</h2>
                        <h3 className="text-4xl md:text-5xl font-display font-bold text-white">
                            Digital Products that <br />
                            <span className="text-gray-500">Define Categories.</span>
                        </h3>
                    </div>
                    <Link to="/work" className="flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-white transition-colors">
                        View All Work <ArrowUpRight size={16} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {portfolio.slice(0, 3).map((project, index) => (
                        <motion.div
                            key={index}
                            className={`group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer ${index === 2 ? 'md:col-span-2 md:aspect-[21/9]' : ''}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <img src={project.image} alt={project.title} />

                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="text-xs font-bold text-white/80 uppercase tracking-wider mb-2 block p-1 px-3 bg-white/10 w-fit rounded-full backdrop-blur-md">
                                        {project.category}
                                    </span>
                                    <h4 className="text-3xl font-bold text-white mb-2">{project.title}</h4>
                                    <p className="text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 text-sm max-w-md">
                                        {project.description_en}
                                    </p>
                                </div>
                                <Link to={project.url} target='blank' className="absolute top-8 right-8 bg-white/10 p-3 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <ArrowUpRight className="text-white" size={20} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
