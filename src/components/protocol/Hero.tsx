'use client';

import { useTranslation } from 'react-i18next';
import { Section, CTAButton } from '@/components/marketing';

export default function Hero() {
  const { t } = useTranslation('protocol');

  return (
    <Section className="pt-20 md:pt-32 pb-16 md:pb-24">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
          {t('hero.title')}
        </h1>
        <div className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-6">
          <p>{t('hero.headline.line1')}</p>
          <p className="text-primary">{t('hero.headline.line2')}</p>
        </div>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          {t('hero.subtitle')}
        </p>
        <CTAButton href="/#book" variant="primary">
          {t('hero.cta')}
        </CTAButton>
      </div>
    </Section>
  );
}
