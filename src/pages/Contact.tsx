import { CalendarDays, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import type { ReactNode } from 'react';
import { useT } from '../i18n/lang';
import { SITE, whatsappUrl } from '../config/site';
import { SEO } from '../components/SEO';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { ContactForm } from '../components/contact/ContactForm';

function Channel({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 text-brand-accent">{icon}</span>
      <div>
        <p className="text-sm text-zinc-500">{label}</p>
        <div className="mt-0.5 text-zinc-200">{children}</div>
      </div>
    </li>
  );
}

export const Contact = () => {
  const { t } = useT();
  const steps = t('contact.next.steps', { returnObjects: true }) as string[];
  const linkClass = 'transition-colors hover:text-white';

  return (
    <>
      <SEO title={t('seo.contact.title')} description={t('seo.contact.description')} />
      <PageHero eyebrow={t('contact.eyebrow')} title={t('contact.title')} lead={t('contact.lead')} />

      <section className="wrap grid gap-10 pb-28 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-14">
        <Reveal>
          <ContactForm />
        </Reveal>

        <div className="space-y-10">
          <Reveal delay={80}>
            <h2 className="eyebrow">{t('contact.next.title')}</h2>
            <ol className="mt-5 space-y-4">
              {steps.map((step, i) => (
                <li key={step} className="flex gap-4 text-zinc-300">
                  <span className="font-mono text-xs leading-6 text-brand-accent">{String(i + 1).padStart(2, '0')}</span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={140} className="border-t border-white/[0.08] pt-10">
            <h2 className="eyebrow">{t('contact.channels.title')}</h2>
            <ul className="mt-6 space-y-5">
              {SITE.calendarUrl && (
                <Channel icon={<CalendarDays size={18} />} label={t('contact.channels.calendarText')}>
                  <a href={SITE.calendarUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {t('contact.channels.calendar')}
                  </a>
                </Channel>
              )}
              <Channel icon={<MessageCircle size={18} />} label={t('contact.channels.whatsappText')}>
                <a href={whatsappUrl(t('common.whatsappMessage'))} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {t('contact.channels.whatsapp')} · {SITE.phone.display}
                </a>
              </Channel>
              <Channel icon={<Mail size={18} />} label={t('contact.channels.email')}>
                <a href={`mailto:${SITE.email}`} className={linkClass}>
                  {SITE.email}
                </a>
              </Channel>
              <Channel icon={<Phone size={18} />} label={t('contact.channels.phone')}>
                <a href={SITE.phone.href} className={linkClass}>
                  {SITE.phone.display}
                </a>
              </Channel>
              <Channel icon={<MapPin size={18} />} label={t('contact.channels.location')}>
                {t('common.footer.location')}
                <span className="block text-sm text-zinc-500">{t('common.footer.timezone')}</span>
              </Channel>
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
};
