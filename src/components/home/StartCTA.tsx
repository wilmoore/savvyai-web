'use client';

import { useTranslation } from 'react-i18next';
import { Section, CTAButton } from '@/components/marketing';

export default function StartCTA() {
  const { t } = useTranslation('homepage');

  return (
    <Section variant="muted">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
          {t('finalCta.title')}
        </h2>
        <div className="space-y-4 mb-6">
          <p className="text-lg text-foreground">{t('finalCta.content.line1')}</p>
          <p className="text-lg text-muted-foreground">{t('finalCta.content.line2')}</p>
        </div>
        <p className="text-lg font-medium text-foreground mb-8">{t('finalCta.closing')}</p>
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
