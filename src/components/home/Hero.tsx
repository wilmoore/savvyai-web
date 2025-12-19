'use client';

import { useTranslation } from 'react-i18next';
import { Section, CTAButton } from '@/components/marketing';
import { SectionLabel } from '@/components/layout';

export default function Hero() {
  const { t } = useTranslation('homepage');

  return (
    <Section className="pt-32 md:pt-40 pb-20 md:pb-28" size="wide">
      <div className="max-w-4xl">
        <SectionLabel className="mb-6">{t('hero.tagline')}</SectionLabel>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight text-white mb-8">
          {t('hero.headline')}
        </h1>

        <p className="text-xl text-white/70 max-w-2xl mb-10">{t('hero.description')}</p>

        <div className="space-y-3 text-base text-white/60 mb-12 max-w-xl">
          <p>{t('hero.clarification.line1')}</p>
          <p>{t('hero.clarification.line2')}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
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
