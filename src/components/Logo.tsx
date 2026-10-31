import { cn } from '../utils/cn';

// The site is dark, so it uses the "fondo oscuro" version of the mark.
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <img src="/images/webuddy-icono-color-fondo-oscuro.svg" alt="" width={48} height={32} className="h-8 w-auto" />
    </span>
  );
}
