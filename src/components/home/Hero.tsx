'use client';

import { useTranslation } from 'react-i18next';
import { Section, CTAButton } from '@/components/marketing';

export default function Hero() {
  const { t } = useTranslation('homepage');

  return (
    <Section className="pt-24 md:pt-36 pb-20 md:pb-32" size="wide">
      <div className="text-center">
        <p className="text-base md:text-lg text-muted-foreground mb-4">{t('hero.tagline')}</p>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold leading-none tracking-tight mb-8">
          {t('hero.headline')}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          {t('hero.description')}
        </p>
        <div className="space-y-1 text-base text-foreground mb-12 max-w-xl mx-auto">
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
