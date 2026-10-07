import { cn } from '../utils/cn';

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <img src="/brand/webuddy-mark.png" alt="" width={38} height={24} className="h-6 w-auto" />
      <span className="font-display text-lg font-semibold tracking-tight text-white">Webuddy</span>
    </span>
  );
}
