'use client';

import { useTranslation } from 'react-i18next';
import { Section } from '@/components/marketing';
import { GlassCard } from '@/components/layout';

export default function WorkshopOutcomes() {
  const { t } = useTranslation('homepage');
  const items = t('workshopOutcomes.typicalItems', { returnObjects: true }) as string[];

  return (
    <Section size="wide">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
        {t('workshopOutcomes.title')}
      </h2>
      <p className="text-lg text-white/70 mb-10">{t('workshopOutcomes.intro')}</p>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-white/40 mb-4">
            {t('workshopOutcomes.typicalTitle')}
          </p>
          <ul className="space-y-3">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-white/70">
                <span className="text-emerald-500 mt-1 flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <p className="text-base text-white">{t('workshopOutcomes.emotional')}</p>

          <GlassCard className="border-l-2 border-l-emerald-500/50">
            <p className="text-base font-medium text-white">
              {t('workshopOutcomes.validOutcome.line1')}
            </p>
            <p className="text-sm text-white/60 mt-2">{t('workshopOutcomes.validOutcome.line2')}</p>
          </GlassCard>
        </div>
      </div>
    </Section>
  );
}
