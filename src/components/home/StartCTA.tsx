'use client';

import { useTranslation } from 'react-i18next';
import { Section, CTAButton } from '@/components/marketing';
import { BandLabel } from '@/components/layout';

export default function StartCTA() {
  const { t } = useTranslation('homepage');

  return (
    <Section size="wide">
      <div className="max-w-3xl">
        <BandLabel>Next Steps</BandLabel>

        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-8">
          {t('finalCta.title')}
        </h2>

        <div className="space-y-4 mb-8">
          <p className="text-xl text-gray-600">{t('finalCta.content.line1')}</p>
          <p className="text-base text-gray-500">{t('finalCta.content.line2')}</p>
        </div>

        <p className="text-base font-medium text-gray-900 mb-10">{t('finalCta.closing')}</p>

        <CTAButton href="#book" variant="primary">
          {t('finalCta.cta.primary')}
        </CTAButton>
      </div>
    </Section>
  );
}
