'use client';

import { useTranslation } from 'react-i18next';
import { Section, CTAButton } from '@/components/marketing';

export default function StartCTA() {
  const { t } = useTranslation('homepage');

  return (
    <Section>
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">
          {t('finalCta.title')}
        </h2>
        <div className="space-y-5 mb-8">
          <p className="text-xl text-muted-foreground">{t('finalCta.content.line1')}</p>
          <p className="text-base text-muted-foreground">{t('finalCta.content.line2')}</p>
        </div>
        <p className="text-base font-medium text-foreground mb-12">{t('finalCta.closing')}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href="#book" variant="primary">
            {t('finalCta.cta.primary')}
          </CTAButton>
        </div>
      </div>
    </Section>
  );
}
