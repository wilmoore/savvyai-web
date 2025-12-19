'use client';

import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';
import { Section } from '@/components/marketing';
import { OutcomeBlock } from '@/components/layout';

/**
 * WorkshopOutcomes - Artifact Inventory
 *
 * 2-column "Deliverables Inventory" styled like high-end studio documents.
 * Bold emerald checkmarks establish credibility.
 * Proves Savvy produces "Results, not Hype."
 */
export default function WorkshopOutcomes() {
  const { t } = useTranslation('homepage');
  const items = t('workshopOutcomes.typicalItems', { returnObjects: true }) as string[];

  return (
    <Section variant="paper" size="wide">
      {/* Section ID */}
      <div className="mb-6">
        <span className="text-xs font-mono uppercase tracking-widest text-black/30">
          [ 06 / ARTIFACTS ]
        </span>
      </div>

      <p className="text-xs font-mono uppercase tracking-widest text-emerald-500 mb-4">
        {t('workshopOutcomes.artifactLabel')}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-[1.1] text-ink mb-6">
        {t('workshopOutcomes.title')}
      </h2>
      <p className="text-lg text-black/60 mb-10">{t('workshopOutcomes.intro')}</p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left column: Deliverables Inventory */}
        <div className="bg-paper-secondary border border-black/10 rounded-md p-6">
          <p className="text-xs font-mono uppercase tracking-wider text-black/40 mb-6">
            {t('workshopOutcomes.typicalTitle')}
          </p>
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check
                  className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0"
                  strokeWidth={2.5}
                />
                <span className="text-black/70">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column: Emotional + Valid outcome */}
        <div className="space-y-6">
          <p className="text-lg text-black/70 leading-relaxed">{t('workshopOutcomes.emotional')}</p>

          <OutcomeBlock>
            <p className="text-base font-semibold text-ink">
              {t('workshopOutcomes.validOutcome.line1')}
            </p>
            <p className="text-sm text-black/50 mt-2">{t('workshopOutcomes.validOutcome.line2')}</p>
          </OutcomeBlock>
        </div>
      </div>
    </Section>
  );
}
