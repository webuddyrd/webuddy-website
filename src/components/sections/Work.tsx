import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: "FinTech Dashboard",
        category: "Web Application",
        description: "Real-time financial analytics platform handling millions in transactions.",
        color: "from-blue-600 to-cyan-400",
        image: "linear-gradient(45deg, #1e3a8a, #3b82f6)" // Placeholder for actual image
    },
    {
        title: "Luxury Commerce",
        category: "E-Commerce",
        description: "Immersive shopping experience with 3D product view integration.",
        color: "from-purple-600 to-pink-500",
        image: "linear-gradient(45deg, #581c87, #d946ef)"
    },
    {
        title: "HealthAI System",
        category: "AI Platform",
        description: "Diagnostic assistance tool powered by machine learning algorithms.",
        color: "from-emerald-600 to-teal-400",
        image: "linear-gradient(45deg, #064e3b, #14b8a6)"
    }
];

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
                    <button className="flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-white transition-colors">
                        View All Case Studies <ArrowUpRight size={16} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={`group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer ${index === 2 ? 'md:col-span-2 md:aspect-[21/9]' : ''}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {/* Background Image Placeholder */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${project.image} transition-transform duration-700 group-hover:scale-105`}
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
                                    <h4 className="text-3xl font-bold text-white mb-2">{project.title}</h4>
                                    <p className="text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 text-sm max-w-md">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="absolute top-8 right-8 bg-white/10 p-3 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <ArrowUpRight className="text-white" size={20} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
