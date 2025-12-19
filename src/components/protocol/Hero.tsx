'use client';

import { useTranslation } from 'react-i18next';
import { Section, CTAButton } from '@/components/marketing';
import { SectionLabel } from '@/components/layout';

export default function Hero() {
  const { t } = useTranslation('protocol');

  return (
    <Section className="pt-32 md:pt-40 pb-20 md:pb-28" size="wide">
      <div className="max-w-4xl">
        <SectionLabel className="mb-6">{t('hero.title')}</SectionLabel>

        <div className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-8">
          <p className="text-white">{t('hero.headline.line1')}</p>
          <p className="text-emerald-500">{t('hero.headline.line2')}</p>
        </div>

        <p className="text-xl text-white/70 max-w-2xl mb-10">{t('hero.subtitle')}</p>

        <CTAButton href="/#book" variant="primary">
          {t('hero.cta')}
        </CTAButton>
      </div>
    </Section>
  );
}
