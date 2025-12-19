'use client';

import { useTranslation } from 'react-i18next';
import { Section, CTAButton } from '@/components/marketing';

export default function StartCTA() {
  const { t } = useTranslation('homepage');

  return (
    <Section variant="muted">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
          {t('finalCta.title')}
        </h2>
        <p className="text-lg text-muted-foreground mb-8">{t('finalCta.subtitle')}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href="#book" variant="primary">
            {t('finalCta.cta.primary')}
          </CTAButton>
          <CTAButton href="#book" variant="secondary">
            {t('finalCta.cta.secondary')}
          </CTAButton>
        </div>
      </div>
    </Section>
  );
}
