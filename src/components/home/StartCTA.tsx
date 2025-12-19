'use client';

import { useTranslation } from 'react-i18next';
import { Section, CTAButton } from '@/components/marketing';

/**
 * StartCTA - Ink background final conversion section
 *
 * Strong close with high-contrast CTA.
 */
export default function StartCTA() {
  const { t } = useTranslation('homepage');

  return (
    <Section variant="ink" size="wide">
      {/* Section ID */}
      <div className="mb-6">
        <span className="text-xs font-mono uppercase tracking-widest text-white/30">
          [ 14 / NEXT ]
        </span>
      </div>

      <div className="max-w-3xl">
        <p className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">Next Steps</p>

        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-[1.1] text-white mb-8">
          {t('finalCta.title')}
        </h2>

        <div className="space-y-4 mb-8">
          <p className="text-xl text-white/70">{t('finalCta.content.line1')}</p>
          <p className="text-base text-white/50">{t('finalCta.content.line2')}</p>
        </div>

        <p className="text-base font-medium text-white mb-10">{t('finalCta.closing')}</p>

        <CTAButton href="#book" variant="primary">
          {t('finalCta.cta.primary')}
        </CTAButton>
      </div>
    </Section>
  );
}
