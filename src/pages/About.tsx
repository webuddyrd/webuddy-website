import { useTranslation } from 'react-i18next';
import { Puzzle, TrendingUp, Lightbulb, Handshake, MonitorSmartphone } from 'lucide-react';
import { SEO } from '../components/SEO';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import WebuddyLogo from '../images/webuddy.png';

export function About() {
  const { t } = useTranslation();
  const heroAnimation = useScrollAnimation();
  const missionAnimation = useScrollAnimation();
  const differentiatorAnimation = useScrollAnimation();
  // const teamAnimation = useScrollAnimation();

  const differentiators = [
    { icon: <Puzzle size={32} />, titleKey: 'solutions', descKey: 'solutions' },
    { icon: <TrendingUp size={32} />, titleKey: 'focus', descKey: 'focus' },
    { icon: <Lightbulb size={32} />, titleKey: 'innovation', descKey: 'innovation' },
    { icon: <Handshake size={32} />, titleKey: 'accompaniment', descKey: 'accompaniment' },
    { icon: <MonitorSmartphone size={32} />, titleKey: 'design', descKey: 'design' }
  ];

  return (
    <>
      <SEO
        title={t('common.nav.about')}
        description={t('about.mission.description')}
      />

      <section ref={heroAnimation.ref} className="pb-16 bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950">
        <img className="mx-auto w-96 h-40 object-cover" src={WebuddyLogo} />
        <div className="container mx-auto px-4">
          <div
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <p className="text-xl text-slate-600 dark:text-slate-400">
              {t('about.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section ref={missionAnimation.ref} className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div
            className={`max-w-4xl mx-auto transition-all duration-1000 ${missionAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 text-center">
              {t('about.mission.title')}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed text-center">
              {t('about.mission.description')}
            </p>
          </div>
        </div>
      </section>

      <section ref={differentiatorAnimation.ref} className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${differentiatorAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              {t('about.differentiators.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {differentiators.map((item, index) => (
              <div
                key={item.titleKey}
                className={`text-center transition-all duration-700 ${differentiatorAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                  {t(`about.differentiators.${item.titleKey}.title`)}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg">
                  {t(`about.differentiators.${item.descKey}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION COMMENTED UNTIL HAVE TEAM TO DISPLAY */}
      {/* <section ref={teamAnimation.ref} className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
              teamAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              {t('about.team.title')}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              {t('about.team.description')}
            </p>
          </div>
        </div>
      </section> */}
    </>
  );
}
