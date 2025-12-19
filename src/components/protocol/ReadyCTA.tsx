'use client';

import { useTranslation } from 'react-i18next';
import { Section, CTAButton } from '@/components/marketing';
import { BandLabel } from '@/components/layout';

export default function ReadyCTA() {
  const { t } = useTranslation('protocol');

  return (
    <Section variant="contrast" size="wide">
      <div className="bg-white border border-gray-200 rounded-lg p-8 md:p-12 text-center max-w-2xl mx-auto shadow-sm">
        <BandLabel className="text-center">Get Started</BandLabel>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
          {t('finalCta.title')}
        </h2>
        <p className="text-lg text-gray-600 mb-8">{t('finalCta.subtitle')}</p>
        <CTAButton href="/#book" variant="primary">
          {t('finalCta.cta')}
        </CTAButton>
      </div>
    </Section>
  );
}
