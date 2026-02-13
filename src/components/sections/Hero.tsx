import { motion } from 'framer-motion';
import { HeroScene } from '../3d/HeroScene';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* 3D Background */}
            <HeroScene />

            {/* Content Overlay */}
            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center pointer-events-none">
                <motion.div
                    className="max-w-4xl mx-auto space-y-8"
                >
                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-tight pointer-events-auto"
                        animate={{ opacity: [0, 1], y: [20, 0] }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Engineering <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-webuddy-blue via-webuddy-electric to-webuddy-purple">
                            Digital Excellence
                        </span>
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto pointer-events-auto"
                        animate={{ opacity: [0, 1] }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        We build high-performance digital systems for ambitious companies.
                    </motion.p>

                    <motion.div
                        className="flex flex-col md:flex-row items-center justify-center gap-4 pt-8 pointer-events-auto"
                        animate={{ opacity: [0, 1], y: [20, 0] }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <Link to="/contact" className="group relative px-8 py-4 bg-webuddy-blue text-white rounded-full overflow-hidden transition-all hover:shadow-glow">
                            <span className="relative z-10 font-medium">Start a Project</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </Link>
                        <Link to="/work" className="px-8 py-4 text-white border border-white/10 rounded-full hover:bg-white/5 transition-colors backdrop-blur-sm">
                            View Our Work
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
                <ArrowDown size={24} />
            </motion.div>
        </section>
    );
};
