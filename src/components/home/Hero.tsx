'use client';

import { useTranslation } from 'react-i18next';
import { Section, CTAButton } from '@/components/marketing';

export default function Hero() {
  const { t } = useTranslation('homepage');

  return (
    <Section className="pt-20 md:pt-32 pb-16 md:pb-24">
      <div className="text-center">
        <p className="text-lg md:text-xl text-muted-foreground mb-2">{t('hero.tagline')}</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
          {t('hero.headline')}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          {t('hero.description')}
        </p>
        <div className="space-y-2 text-base md:text-lg text-foreground mb-10">
          <p>{t('hero.clarification.line1')}</p>
          <p>{t('hero.clarification.line2')}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href="#book" variant="primary">
            {t('hero.cta.primary')}
          </CTAButton>
          <CTAButton href="#book" variant="secondary">
            {t('hero.cta.secondary')}
          </CTAButton>
        </div>
      </div>
    </Section>
  );
}
