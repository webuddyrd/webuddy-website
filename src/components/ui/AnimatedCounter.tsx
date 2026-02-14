import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedCounterProps {
    from?: number;
    to: number;
    duration?: number;
    className?: string;
    prefix?: string;
    suffix?: string;
}

export default function AnimatedCounter({
    from = 0,
    to,
    duration = 1.5,
    className = "",
    prefix = "",
    suffix = "",
}: AnimatedCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(from);
    const isInView = useInView(ref, { once: true, margin: "-10px" });

    const springValue = useSpring(motionValue, {
        damping: 60,
        stiffness: 100,
        duration: duration * 1000,
    });

    useEffect(() => {
        if (isInView) {
            motionValue.set(to);
        }
    }, [isInView, to, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = `${prefix}${latest.toFixed(0)}${suffix}`;
            }
        });
    }, [springValue, prefix, suffix]);

    return <span ref={ref} className={className} />;
}
