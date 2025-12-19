'use client';

import { useTranslation } from 'react-i18next';
import { Section, CTAButton } from '@/components/marketing';

export default function ReadyCTA() {
  const { t } = useTranslation('protocol');

  return (
    <Section variant="muted">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
          {t('finalCta.title')}
        </h2>
        <p className="text-lg text-muted-foreground mb-8">{t('finalCta.subtitle')}</p>
        <CTAButton href="/#book" variant="primary">
          {t('finalCta.cta')}
        </CTAButton>
      </div>
    </Section>
  );
}
