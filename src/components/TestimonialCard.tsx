import { Quote } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState } from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  delay?: number;
}

export function TestimonialCard({ quote, author, role, delay = 0 }: TestimonialCardProps) {
  const { ref, isVisible } = useScrollAnimation();
  const [expanded, setExpanded] = useState(false);

  const isLong = quote.length > 200;
  const truncated = isLong ? quote.slice(0, 200) : quote;

  return (
    <div
      ref={ref}
      className={`p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Quote className="text-blue-600 dark:text-blue-400 mb-4" size={32} />
      <p
        className="text-slate-700 dark:text-slate-300 mb-6 text-lg"
        aria-expanded={expanded}
      >
        {isLong && !expanded ? (
          <>
            {truncated}
            <span aria-hidden>...</span>
          </>
        ) : (
          quote
        )}
      </p>
      {isLong && (
        <div className="mt-2 flex items-center gap-3">
          {!expanded && (
            <div
              aria-hidden
              className="absolute left-0 right-20 bottom-6 h-8 pointer-events-none"
            />
          )}
          <button
            onClick={() => setExpanded((s) => !s)}
            className="ml-auto text-sm font-medium underline focus:outline-none"
            aria-controls=""
            aria-expanded={expanded}
          >
            {expanded ? "View Less" : "View More"}
          </button>
        </div>
      )}
      <div>
        <p className="font-semibold text-slate-900 dark:text-white">{author}</p>
        <p className="text-sm text-slate-600 dark:text-slate-400">{role}</p>
      </div>
    </div>
  );
}
