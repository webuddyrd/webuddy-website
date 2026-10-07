import { useLocalized, useT } from '../../i18n/lang';
import { processSteps } from '../../content/process';
import { Reveal } from '../ui/Reveal';

export function ProcessSteps({ detailed = false }: { detailed?: boolean }) {
  const { t } = useT();
  const pick = useLocalized();

  return (
    <ol className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-5">
      {processSteps.map((step, i) => (
        <Reveal as="li" key={step.title.en} delay={i * 70} className="flex flex-col bg-ink-950 p-6 sm:[&:last-child:nth-child(odd)]:col-span-2 lg:[&:last-child:nth-child(odd)]:col-span-1">
          <span className="font-mono text-xs text-brand-accent">{String(i + 1).padStart(2, '0')}</span>
          <h3 className="mt-4 text-xl font-semibold text-white">{pick(step.title)}</h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">{pick(step.text)}</p>
          <div className="mt-auto pt-6">
            <p className="eyebrow text-[10px]">{t('home.process.output')}</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-200">{pick(step.output)}</p>
            {detailed && (
              <>
                <p className="eyebrow mt-5 text-[10px]">{t('howWeWork.steps.client')}</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{pick(step.client)}</p>
              </>
            )}
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
