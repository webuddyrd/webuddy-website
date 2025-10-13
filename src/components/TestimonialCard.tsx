import { Quote } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  delay?: number;
}

export function TestimonialCard({ quote, author, role, delay = 0 }: TestimonialCardProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Quote className="text-blue-600 dark:text-blue-400 mb-4" size={32} />
      <p className="text-slate-700 dark:text-slate-300 mb-6 text-lg">{quote}</p>
      <div>
        <p className="font-semibold text-slate-900 dark:text-white">{author}</p>
        <p className="text-sm text-slate-600 dark:text-slate-400">{role}</p>
      </div>
    </div>
  );
}
