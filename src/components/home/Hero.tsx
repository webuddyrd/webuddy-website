import { ArrowRight } from 'lucide-react';
import { useT } from '../../i18n/lang';
import { ButtonLink } from '../ui/Button';
import { SystemDiagram } from './SystemDiagram';

export const Hero = () => {
  const { t } = useT();

  return (
    <section className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40">
      <div
        className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]"
        aria-hidden="true"
      />
      <div className="wrap relative grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <p className="eyebrow flex animate-fade-up items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" aria-hidden="true" />
            {t('home.hero.eyebrow')}
          </p>
          <h1 className="mt-6 animate-fade-up text-[2.6rem] font-semibold leading-[1.04] text-white [animation-delay:80ms] sm:text-6xl lg:text-[4.1rem]">
            {t('home.hero.title')}
          </h1>
          <p className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-zinc-400 [animation-delay:160ms] md:text-xl">
            {t('home.hero.subtitle')}
          </p>
          <div className="mt-9 flex animate-fade-up flex-wrap gap-3 [animation-delay:240ms]">
            <ButtonLink to="/contact">
              {t('home.hero.primary')}
              <ArrowRight size={16} />
            </ButtonLink>
            <ButtonLink to="/how-we-work" variant="secondary">
              {t('home.hero.secondary')}
            </ButtonLink>
          </div>
          <p className="mt-10 max-w-lg animate-fade-up border-l-2 border-brand-accent/70 pl-4 text-sm leading-relaxed text-zinc-400 [animation-delay:320ms]">
            {t('home.hero.trust')}
          </p>
        </div>
        <div className="mx-auto w-full max-w-md animate-fade-in [animation-delay:300ms] lg:max-w-none">
          <SystemDiagram />
        </div>
      </div>
    </section>
  );
};
