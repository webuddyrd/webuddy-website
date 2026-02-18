import { useState, FormEvent } from 'react';
import { Section } from '../components/ui/Section';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <div className="bg-webuddy-dark min-h-screen pt-32">
      <Section>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <motion.h1
                className="text-5xl md:text-7xl font-display font-bold text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {t('contact.hero.titlePrefix')} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-webuddy-blue to-webuddy-electric">{t('contact.hero.titleSuffix')}</span>
              </motion.h1>

              <motion.div
                className="space-y-8 mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-webuddy-blue/10 p-3 rounded-full text-webuddy-blue">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">{t('contact.info.email.label')}</h3>
                    <a href="mailto:hello@webuddy.dev" className="text-gray-400">{t('contact.info.email.value')}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-webuddy-blue/10 p-3 rounded-full text-webuddy-blue">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">{t('contact.info.office.label')}</h3>
                    <p className="text-gray-400">{t('contact.info.office.value')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-webuddy-blue/10 p-3 rounded-full text-webuddy-blue">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">{t('contact.info.phone.label')}</h3>
                    <a href="tel:+18499182057" className="text-gray-400">{t('contact.info.phone.value')}</a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">{t('contact.form.name')}</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-webuddy-blue focus:ring-1 focus:ring-webuddy-blue transition-all outline-none"
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">{t('contact.form.email')}</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-webuddy-blue focus:ring-1 focus:ring-webuddy-blue transition-all outline-none"
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">{t('contact.form.message')}</label>
                  <textarea
                    rows={4}
                    required
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-webuddy-blue focus:ring-1 focus:ring-webuddy-blue transition-all outline-none"
                    placeholder={t('contact.form.messagePlaceholder')}
                  />
                </div>
                <button
                  type="submit"
                  disabled={formState === 'submitting' || formState === 'success'}
                  className="w-full bg-webuddy-blue hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formState === 'idle' && (
                    <>{t('contact.form.send')} <Send size={20} className="group-hover:translate-x-1 transition-transform" /></>
                  )}
                  {formState === 'submitting' && t('contact.form.sending')}
                  {formState === 'success' && t('contact.form.success')}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  );
};
