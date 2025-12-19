'use client';

import { useTranslation } from 'react-i18next';
import { Section } from '@/components/marketing';
import { BandLabel, ArtifactLabel } from '@/components/layout';

export default function WorkshopsExplained() {
  const { t } = useTranslation('homepage');

  return (
    <Section size="wide">
      <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-16 items-start">
        <div>
          <ArtifactLabel className="block mb-4">Workshop</ArtifactLabel>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6">
            {t('workshopsExplained.title')}
          </h2>
          <p className="text-lg text-gray-600">{t('workshopsExplained.intro')}</p>
        </div>

        <div className="space-y-5">
          <p className="text-base text-gray-500">{t('workshopsExplained.clarification')}</p>
          <p className="text-base text-gray-700">{t('workshopsExplained.description')}</p>
          <p className="text-base text-gray-700">{t('workshopsExplained.outcome')}</p>
          <p className="text-sm text-gray-500 italic pt-4 border-t border-gray-200">
            {t('workshopsExplained.aside')}
          </p>
        </div>
      </div>
    </Section>
  );
}
