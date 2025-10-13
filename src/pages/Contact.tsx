import { useState, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, Send } from 'lucide-react';
import { SEO } from '../components/SEO';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const heroAnimation = useScrollAnimation();
  const formAnimation = useScrollAnimation();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      return;
    }

    setStatus('success');
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <>
      <SEO
        title={t('common.nav.contact')}
        description={t('contact.info.description')}
      />

      <section ref={heroAnimation.ref} className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950">
        <div className="container mx-auto px-4">
          <div
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
              heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              {t('contact.hero.title')}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              {t('contact.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section ref={formAnimation.ref} className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div
            className={`max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-1000 ${
              formAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                {t('contact.info.title')}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                {t('contact.info.description')}
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                    <Mail className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white mb-1">Email</p>
                    <a
                      href="mailto:hello@webuddy.com"
                      className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {t('contact.info.email')}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                    <Phone className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white mb-1">Phone</p>
                    <a
                      href="tel:+15551234567"
                      className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {t('contact.info.phone')}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                {t('contact.form.title')}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t('contact.form.namePlaceholder')}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t('contact.form.emailPlaceholder')}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t('contact.form.messagePlaceholder')}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  />
                </div>

                {status === 'success' && (
                  <div className="p-4 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                    {t('contact.form.success')}
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400">
                    {t('contact.form.error')}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  {t('contact.form.send')}
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
