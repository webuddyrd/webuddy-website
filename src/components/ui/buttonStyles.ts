import { cn } from '../../utils/cn';

export type ButtonVariant = 'primary' | 'secondary';

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-white text-ink-950 hover:bg-zinc-200',
  secondary: 'border border-white/15 text-white hover:border-white/30 hover:bg-white/[0.04]',
};

export const buttonClass = (variant: ButtonVariant = 'primary', className?: string) =>
  cn(
    'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-colors duration-200',
    variants[variant],
    className
  );
