import type { ReactNode } from 'react';

interface PageHeroProps {
  eyebrow: ReactNode;
  title: string;
  lead?: string;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, lead, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pb-14 pt-32 md:pb-20 md:pt-44">
      <div
        className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_30%_0%,black,transparent)]"
        aria-hidden="true"
      />
      <div className="wrap relative">
        <div className="eyebrow animate-fade-up">{eyebrow}</div>
        <h1 className="mt-5 max-w-4xl animate-fade-up text-4xl font-semibold leading-[1.06] text-white [animation-delay:80ms] md:text-6xl">
          {title}
        </h1>
        {lead && (
          <p className="mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-zinc-400 [animation-delay:160ms] md:text-xl">
            {lead}
          </p>
        )}
        {children && <div className="mt-9 animate-fade-up [animation-delay:240ms]">{children}</div>}
      </div>
    </section>
  );
}
