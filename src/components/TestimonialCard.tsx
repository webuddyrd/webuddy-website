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
      className={`p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-webuddy-blue/30 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Quote className="text-webuddy-blue mb-6" size={32} />
      <p
        className="text-gray-300 mb-6 text-lg leading-relaxed italic"
        aria-expanded={expanded}
      >
        "{isLong && !expanded ? (
          <>
            {truncated}
            <span aria-hidden>...</span>
          </>
        ) : (
          quote
        )}"
      </p>
      {isLong && (
        <div className="mt-2 flex items-center gap-3">
          <button
            onClick={() => setExpanded((s) => !s)}
            className="text-sm font-bold text-webuddy-blue hover:text-white transition-colors focus:outline-none uppercase tracking-wider"
            aria-controls=""
            aria-expanded={expanded}
          >
            {expanded ? "View Less" : "View More"}
          </button>
        </div>
      )}
      <div className="mt-6 pt-6 border-t border-white/10">
        <p className="font-bold text-white text-lg">{author}</p>
        <p className="text-sm text-webuddy-electric">{role}</p>
      </div>
    </div>
  );
}
