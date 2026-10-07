import { ArrowRight, CalendarDays, MessageCircle } from 'lucide-react';
import { useT } from '../../i18n/lang';
import { SITE, whatsappUrl } from '../../config/site';
import type { SolutionSlug } from '../../content/solutions';
import { ButtonLink, ExternalButton } from '../ui/Button';
import { Reveal } from '../ui/Reveal';

interface CtaBandProps {
  title?: string;
  text?: string;
  // Preselects the need in the contact form when the visitor comes from a solution page.
  need?: SolutionSlug;
}

export function CtaBand({ title, text, need }: CtaBandProps) {
  const { t } = useT();

  return (
    <section className="wrap py-20 md:py-28">
      <Reveal className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-ink-900 px-6 py-14 md:px-14 md:py-20">
        <span className="absolute inset-x-0 top-0 h-px bg-brand-gradient opacity-80" aria-hidden="true" />
        <div
          className="bg-grid pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_65%)]"
          aria-hidden="true"
        />
        <div className="relative max-w-2xl">
          <h2 className="text-3xl font-semibold leading-[1.1] text-white md:text-5xl">{title ?? t('common.footer.ctaTitle')}</h2>
          <p className="mt-5 text-lg leading-relaxed text-zinc-400">{text ?? t('common.footer.ctaText')}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink to={need ? `/contact?need=${need}` : '/contact'}>
              {t('common.cta.talk')}
              <ArrowRight size={16} />
            </ButtonLink>
            {SITE.calendarUrl && (
              <ExternalButton href={SITE.calendarUrl} variant="secondary">
                <CalendarDays size={16} />
                {t('common.cta.bookCall')}
              </ExternalButton>
            )}
            <ExternalButton href={whatsappUrl(t('common.whatsappMessage'))} variant="secondary">
              <MessageCircle size={16} />
              WhatsApp
            </ExternalButton>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
