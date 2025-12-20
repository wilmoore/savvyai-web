'use client';

import { useTranslation } from 'react-i18next';
import { Section, SectionID, CTAButton } from '@/components/marketing';

/**
 * StartCTA - Paper background final conversion section
 *
 * Clean "Pre-CTA" reset before institutional close.
 */
export default function StartCTA() {
  const { t } = useTranslation('homepage');

  return (
    <Section variant="paper" size="wide">
      <SectionID number="14" name="NEXT" variant="paper" />

      <div className="max-w-3xl">
        <p className="text-xs font-mono uppercase tracking-widest text-black/40 mb-4">Next Steps</p>

        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-[1.1] text-ink mb-8">
          {t('finalCta.title')}
        </h2>

        <div className="space-y-4 mb-8">
          <p className="text-xl text-black/70">{t('finalCta.content.line1')}</p>
          <p className="text-base text-black/50">{t('finalCta.content.line2')}</p>
        </div>

        <p className="text-base font-medium text-ink mb-10">{t('finalCta.closing')}</p>

        <CTAButton href="#book" variant="primary">
          {t('finalCta.cta.primary')}
        </CTAButton>
      </div>
    </Section>
  );
}
