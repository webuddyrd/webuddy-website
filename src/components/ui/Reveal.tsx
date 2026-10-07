import { useEffect, useRef, type ElementType, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

let observer: IntersectionObserver | null = null;

// One shared observer for every revealed block on the page.
function getObserver() {
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer?.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
  );
  return observer;
}

interface RevealProps {
  as?: ElementType;
  className?: string;
  delay?: number;
  id?: string;
  children: ReactNode;
}

export function Reveal({ as: Tag = 'div', className, delay = 0, children, ...props }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible');
      return;
    }
    const io = getObserver();
    io.observe(el);
    return () => io.unobserve(el);
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn('reveal', className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...props}
    >
      {children}
    </Tag>
  );
}
