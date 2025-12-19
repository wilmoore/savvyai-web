'use client';

import { useTranslation } from 'react-i18next';
import { Section } from '@/components/marketing';
import { OutcomeBlock, ArtifactLabel } from '@/components/layout';

export default function WorkshopOutcomes() {
  const { t } = useTranslation('homepage');
  const items = t('workshopOutcomes.typicalItems', { returnObjects: true }) as string[];

  return (
    <Section size="wide">
      <ArtifactLabel className="block mb-4">{t('workshopOutcomes.artifactLabel')}</ArtifactLabel>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6">
        {t('workshopOutcomes.title')}
      </h2>
      <p className="text-lg text-gray-600 mb-10">{t('workshopOutcomes.intro')}</p>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
            {t('workshopOutcomes.typicalTitle')}
          </p>
          <ul className="space-y-3">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-600">
                <span className="text-emerald-500 mt-1 flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <p className="text-base text-gray-700">{t('workshopOutcomes.emotional')}</p>

          <OutcomeBlock>
            <p className="text-base font-medium text-gray-900">
              {t('workshopOutcomes.validOutcome.line1')}
            </p>
            <p className="text-sm text-gray-500 mt-2">{t('workshopOutcomes.validOutcome.line2')}</p>
          </OutcomeBlock>
        </div>
      </div>
    </Section>
  );
}
