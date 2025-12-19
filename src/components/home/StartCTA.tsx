'use client';

import { useTranslation } from 'react-i18next';
import { Section, CTAButton } from '@/components/marketing';
import { SectionLabel } from '@/components/layout';

export default function StartCTA() {
  const { t } = useTranslation('homepage');

  return (
    <Section size="wide">
      <div className="max-w-3xl">
        <SectionLabel>Next Steps</SectionLabel>

        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-8">
          {t('finalCta.title')}
        </h2>

        <div className="space-y-4 mb-8">
          <p className="text-xl text-white/70">{t('finalCta.content.line1')}</p>
          <p className="text-base text-white/60">{t('finalCta.content.line2')}</p>
        </div>

        <p className="text-base font-medium text-white mb-10">{t('finalCta.closing')}</p>

        <CTAButton href="#book" variant="primary">
          {t('finalCta.cta.primary')}
        </CTAButton>
      </div>
    </Section>
  );
}
