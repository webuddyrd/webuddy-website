import { Clock, Linkedin, MapPin } from 'lucide-react';
import { useLocalized, useT } from '../i18n/lang';
import { founders, teamDisciplines } from '../content/team';
import { SEO } from '../components/SEO';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Reveal } from '../components/ui/Reveal';
import { CtaBand } from '../components/sections/CtaBand';

export const About = () => {
  const { t } = useT();
  const pick = useLocalized();
  const principles = t('about.principles.items', { returnObjects: true }) as { title: string; text: string }[];

  return (
    <>
      <SEO title={t('seo.about.title')} description={t('seo.about.description')} />
      <PageHero eyebrow={t('about.eyebrow')} title={t('about.title')} lead={t('about.lead')} />

      <section className="wrap grid gap-10 pb-24 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:gap-16 md:pb-28">
        <Reveal>
          <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">{t('about.story.title')}</h2>
          <p className="mt-6 text-lg leading-relaxed text-zinc-400">{t('about.story.p1')}</p>
          <p className="mt-5 text-lg leading-relaxed text-zinc-400">{t('about.story.p2')}</p>
        </Reveal>
        <Reveal delay={80} className="card self-start p-7">
          <p className="eyebrow">{t('about.location.title')}</p>
          <ul className="mt-5 space-y-4 text-sm text-zinc-300">
            <li className="flex gap-3">
              <MapPin size={18} className="shrink-0 text-brand-accent" />
              {t('common.footer.location')}
            </li>
            <li className="flex gap-3">
              <Clock size={18} className="shrink-0 text-brand-accent" />
              {t('about.location.timezone')}
            </li>
          </ul>
          <p className="mt-6 border-t border-white/[0.08] pt-5 text-sm leading-relaxed text-zinc-400">{t('about.location.text')}</p>
        </Reveal>
      </section>

      <section className="border-y border-white/[0.06] bg-ink-900/40">
        <div className="wrap py-24 md:py-28">
          <SectionHeader index="01" eyebrow={t('about.founders.eyebrow')} title={t('about.founders.title')} />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {founders.map((founder, i) => (
              <Reveal as="article" key={founder.id} delay={i * 80} className="card flex flex-col p-7 md:p-8">
                <div className="flex items-center gap-5">
                  {founder.photo ? (
                    <img
                      src={founder.photo}
                      alt={founder.name}
                      width={64}
                      height={64}
                      className="h-16 w-16 rounded-full border border-white/10 object-cover"
                    />
                  ) : (
                    <span
                      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/10 bg-ink-800 font-display text-lg font-semibold text-white"
                      aria-hidden="true"
                    >
                      {founder.initials}
                    </span>
                  )}
                  <div>
                    <h3 className="text-xl font-semibold text-white">{founder.name}</h3>
                    <p className="mt-1 text-sm text-zinc-400">{pick(founder.role)}</p>
                  </div>
                </div>
                <p className="mt-6 leading-relaxed text-zinc-400">{pick(founder.bio)}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {founder.skills.map((skill) => (
                    <li key={skill} className="chip">
                      {skill}
                    </li>
                  ))}
                </ul>
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t('about.founders.linkedin', { name: founder.name })}
                  className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-medium text-white"
                >
                  <Linkedin size={16} />
                  <span className="underline decoration-white/30 underline-offset-4 hover:decoration-white">LinkedIn</span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-4 card p-7 md:p-8">
            <h3 className="text-xl font-semibold text-white">{t('about.team.title')}</h3>
            <p className="mt-3 leading-relaxed text-zinc-400">{t('about.team.lead')}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {pick(teamDisciplines).map((discipline) => (
                <li key={discipline} className="chip text-sm">
                  {discipline}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="wrap py-24 md:py-28">
        <SectionHeader index="02" eyebrow={t('about.principles.eyebrow')} title={t('about.principles.title')} />
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle, i) => (
            <Reveal key={principle.title} delay={i * 60} className="bg-ink-950 p-6">
              <span className="font-mono text-xs text-brand-accent">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 text-lg font-semibold text-white">{principle.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{principle.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
};
