import { useEffect, useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AlertCircle, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import i18n from '../../i18n/config';
import { useLang, useT } from '../../i18n/lang';
import { SITE, whatsappUrl } from '../../config/site';
import { sendEmail } from '../../services/email';
import { buttonClass } from '../ui/buttonStyles';

const NEEDS = ['discovery', 'business-software', 'digital-products', 'integrations', 'automation-ai', 'digital-commerce', 'modernization', 'other'];
const STAGES = ['idea', 'defined', 'existing', 'urgent'];
const BUDGETS = ['under10', '10-25', '25-50', '50-100', 'over100', 'unknown'];

const emptyForm = { name: '', email: '', company: '', phone: '', need: '', stage: '', budget: '', message: '', website: '' };

const inputClass =
  'w-full rounded-lg border border-white/10 bg-ink-950 px-4 py-3 text-white placeholder:text-zinc-600 transition-colors focus:border-brand-accent/70 focus:outline-none focus:ring-1 focus:ring-brand-accent/70';

function Field({ label, optional, htmlFor, children }: { label: string; optional?: string; htmlFor: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm text-zinc-300">
        {label}
        {optional && <span className="ml-1.5 text-zinc-600">({optional})</span>}
      </label>
      {children}
    </div>
  );
}

export function ContactForm() {
  const { t } = useT();
  const lang = useLang();
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // Solution pages link here with ?need=<slug>. Applied after hydration so the prerendered markup matches.
  useEffect(() => {
    const need = searchParams.get('need');
    if (need && NEEDS.includes(need)) setForm((current) => ({ ...current, need }));
  }, [searchParams]);

  const update = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    // Hidden honeypot field: bots fill it, people never see it.
    if (form.website) {
      setStatus('success');
      return;
    }
    setStatus('sending');
    // The notification email is read by the team in Spanish, whatever language the visitor used.
    const es = i18n.getFixedT('es');
    const result = await sendEmail({
      name: form.name,
      email: form.email,
      message: form.message,
      company: form.company,
      phone: form.phone,
      need: form.need && es(`contact.form.needOptions.${form.need}`),
      stage: form.stage && es(`contact.form.stageOptions.${form.stage}`),
      budget: form.budget && es(`contact.form.budgetOptions.${form.budget}`),
      language: lang,
    });
    if (result.success) {
      setStatus('success');
      setForm(emptyForm);
    } else {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="card flex flex-col items-start p-8 md:p-10" role="status">
        <CheckCircle2 size={28} className="text-brand-accent" />
        <h2 className="mt-6 text-2xl font-semibold text-white">{t('contact.form.successTitle')}</h2>
        <p className="mt-3 leading-relaxed text-zinc-400">{t('contact.form.successText')}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={whatsappUrl(t('common.whatsappMessage'))} target="_blank" rel="noopener noreferrer" className={buttonClass('secondary')}>
            <MessageCircle size={16} />
            WhatsApp
          </a>
          <button type="button" onClick={() => setStatus('idle')} className={buttonClass('secondary')}>
            {t('contact.form.another')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-6 p-6 md:p-9">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label={t('contact.form.name')} htmlFor="name">
          <input id="name" name="name" required autoComplete="name" value={form.name} onChange={update} className={inputClass} />
        </Field>
        <Field label={t('contact.form.email')} htmlFor="email">
          <input id="email" name="email" type="email" required autoComplete="email" value={form.email} onChange={update} className={inputClass} />
        </Field>
        <Field label={t('contact.form.company')} optional={t('contact.form.optional')} htmlFor="company">
          <input id="company" name="company" autoComplete="organization" value={form.company} onChange={update} className={inputClass} />
        </Field>
        <Field label={t('contact.form.phone')} optional={t('contact.form.optional')} htmlFor="phone">
          <input id="phone" name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={update} className={inputClass} />
        </Field>
      </div>

      <Field label={t('contact.form.need')} htmlFor="need">
        <select id="need" name="need" required value={form.need} onChange={update} className={inputClass}>
          <option value="" disabled>
            {t('contact.form.select')}
          </option>
          {NEEDS.map((need) => (
            <option key={need} value={need}>
              {t(`contact.form.needOptions.${need}`)}
            </option>
          ))}
        </select>
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label={t('contact.form.stage')} optional={t('contact.form.optional')} htmlFor="stage">
          <select id="stage" name="stage" value={form.stage} onChange={update} className={inputClass}>
            <option value="">{t('contact.form.select')}</option>
            {STAGES.map((stage) => (
              <option key={stage} value={stage}>
                {t(`contact.form.stageOptions.${stage}`)}
              </option>
            ))}
          </select>
        </Field>
        <Field label={t('contact.form.budget')} optional={t('contact.form.optional')} htmlFor="budget">
          <select id="budget" name="budget" value={form.budget} onChange={update} className={inputClass}>
            <option value="">{t('contact.form.select')}</option>
            {BUDGETS.map((budget) => (
              <option key={budget} value={budget}>
                {t(`contact.form.budgetOptions.${budget}`)}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label={t('contact.form.message')} htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={update}
          placeholder={t('contact.form.messagePlaceholder')}
          className={inputClass}
        />
      </Field>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={update} />
      </div>

      {status === 'error' && (
        <p className="flex items-start gap-2 rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-300" role="alert">
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          <span>
            {t('contact.form.error')}{' '}
            <a href={`mailto:${SITE.email}`} className="underline">
              {SITE.email}
            </a>
            .
          </span>
        </p>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-zinc-500">{t('contact.form.privacy')}</p>
        <button type="submit" disabled={status === 'sending'} className={buttonClass('primary', 'disabled:cursor-wait disabled:opacity-60')}>
          {status === 'sending' ? t('contact.form.sending') : t('contact.form.submit')}
          {status !== 'sending' && <ArrowRight size={16} />}
        </button>
      </div>
    </form>
  );
}
