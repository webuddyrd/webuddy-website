import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';


interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export const Section = ({ children, className, id }: SectionProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    return (
        <section ref={ref} id={id} className={className}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </section>
    );
};
