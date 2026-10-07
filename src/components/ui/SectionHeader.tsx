import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';
import { Reveal } from './Reveal';

interface SectionHeaderProps {
  index?: string;
  eyebrow: string;
  title: string;
  lead?: ReactNode;
  className?: string;
}

export function SectionHeader({ index, eyebrow, title, lead, className }: SectionHeaderProps) {
  return (
    <Reveal className={cn('max-w-3xl', className)}>
      <p className="eyebrow flex items-center gap-3">
        {index && <span className="text-brand-accent">{index}</span>}
        <span>{eyebrow}</span>
      </p>
      <h2 className="mt-4 text-3xl font-semibold leading-[1.1] text-white md:text-[2.75rem]">{title}</h2>
      {lead && <p className="mt-5 text-lg leading-relaxed text-zinc-400">{lead}</p>}
    </Reveal>
  );
}
