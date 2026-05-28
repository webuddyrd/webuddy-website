import { motion, Variants, useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { ArrowDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const COLORS_TOP = ["#2563eb", "#60a5fa", "#8b5cf6", "#06b6d4"]; // Adapted to webuddy theme

export const Hero = () => {
    const { t } = useTranslation();
    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, [color]);

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #050505 50%, ${color})`;

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 24 }
        },
    };

    return (
        <motion.section
            style={{ backgroundImage }}
            className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]"
        >
            {/* Stars 3D Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Canvas>
                    <Stars radius={50} count={2500} factor={4} fade speed={2} />
                </Canvas>
            </div>

            {/* Content Overlay */}
            <div className="relative z-20 container mx-auto px-4 md:px-6 text-center pointer-events-none flex flex-col items-center justify-center h-full pt-16">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-5xl mx-auto space-y-8 flex flex-col items-center"
                >
                    <motion.h1
                        variants={itemVariants}
                        className="text-6xl md:text-8xl lg:text-[7rem] font-display font-bold tracking-tighter leading-[1.05] pointer-events-auto drop-shadow-2xl text-white"
                    >
                        {t('home.hero.titlePrefix')} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-webuddy-blue via-webuddy-electric to-webuddy-cyan animate-gradient-x inline-block">
                            {t('home.hero.titleSuffix')}
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-2xl text-gray-400 font-light max-w-2xl mx-auto pointer-events-auto leading-relaxed"
                    >
                        {t('home.hero.subtitle')}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6 pointer-events-auto"
                    >
                        <Link to="/contact" className="group relative px-8 py-4 bg-white text-black rounded-full overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 shadow-[0_0_40px_rgba(255,255,255,0.15)]">
                            <span className="relative z-10 font-semibold tracking-wide text-sm uppercase">{t('home.hero.startProject')}</span>
                            <ChevronRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </Link>

                        <Link to="/work" className="group relative px-8 py-4 text-white rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] overflow-hidden">
                            <div className="absolute inset-0 bg-white/5 border border-white/10 rounded-full backdrop-blur-md transition-colors group-hover:bg-white/10 group-hover:border-white/20" />
                            <span className="relative z-10 font-medium tracking-wide text-sm uppercase flex items-center gap-2">
                                {t('home.hero.viewWork')}
                            </span>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 z-20 pointer-events-auto cursor-pointer hover:text-white/60 transition-colors"
                animate={{ y: [0, 8, 0], opacity: [0.3, 1, 0.3] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            >
                <ArrowDown size={20} />
            </motion.div>
        </motion.section>
    );
};
