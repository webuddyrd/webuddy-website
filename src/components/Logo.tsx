import { cn } from '../utils/cn';

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <img src="/W.png" alt="" width={60} />
      {/* <span className="font-display text-lg font-semibold tracking-tight text-white">Webuddy</span> */}
    </span>
  );
}
