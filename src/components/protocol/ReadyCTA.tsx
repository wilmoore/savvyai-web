'use client';

import { useTranslation } from 'react-i18next';
import { Section, CTAButton } from '@/components/marketing';
import { SectionLabel, GlassCard } from '@/components/layout';

export default function ReadyCTA() {
  const { t } = useTranslation('protocol');

  return (
    <Section variant="contrast" size="wide">
      <GlassCard variant="elevated" className="text-center max-w-2xl mx-auto">
        <SectionLabel className="text-center">Get Started</SectionLabel>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">
          {t('finalCta.title')}
        </h2>
        <p className="text-lg text-white/70 mb-8">{t('finalCta.subtitle')}</p>
        <CTAButton href="/#book" variant="primary">
          {t('finalCta.cta')}
        </CTAButton>
      </GlassCard>
    </Section>
  );
}
