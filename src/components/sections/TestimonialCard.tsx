import { useState } from 'react';
import { Quote } from 'lucide-react';
import { useLocalized, useT } from '../../i18n/lang';
import type { Testimonial } from '../../content/testimonials';
import { cn } from '../../utils/cn';

export function TestimonialCard({ testimonial, className }: { testimonial: Testimonial; className?: string }) {
  const { t } = useT();
  const pick = useLocalized();
  const [expanded, setExpanded] = useState(false);

  return (
    <figure className={cn('card flex flex-col p-7', className)}>
      <Quote size={22} className="text-brand-accent" aria-hidden="true" />
      <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-zinc-200">
        <p>“{expanded ? pick(testimonial.quote) : pick(testimonial.excerpt)}”</p>
      </blockquote>
      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        aria-expanded={expanded}
        className="mt-4 self-start font-mono text-xs text-zinc-500 transition-colors hover:text-white"
      >
        {expanded ? t('common.labels.showLess') : t('common.labels.readFull')}
      </button>
      <figcaption className="mt-6 border-t border-white/[0.08] pt-5">
        <p className="font-medium text-white">{testimonial.author}</p>
        <p className="mt-0.5 text-sm text-zinc-500">
          {pick(testimonial.role)}, {testimonial.company}
        </p>
      </figcaption>
    </figure>
  );
}
