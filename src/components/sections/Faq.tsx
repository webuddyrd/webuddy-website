import { Plus } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Reveal className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
      {items.map((item) => (
        <details key={item.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left text-lg font-medium text-white [&::-webkit-details-marker]:hidden">
            {item.q}
            <Plus size={20} className="mt-1 shrink-0 text-zinc-500 transition-transform group-open:rotate-45" aria-hidden="true" />
          </summary>
          <p className="mt-3 max-w-3xl leading-relaxed text-zinc-400">{item.a}</p>
        </details>
      ))}
    </Reveal>
  );
}
