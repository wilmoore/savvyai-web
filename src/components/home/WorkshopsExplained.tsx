'use client';

import { useTranslation } from 'react-i18next';
import { Section, SectionID } from '@/components/marketing';

/**
 * WorkshopsExplained - Ink section explaining workshop experience
 *
 * INK background for zebra rhythm authority.
 */
export default function WorkshopsExplained() {
  const { t } = useTranslation('homepage');

  return (
    <Section variant="ink" size="wide">
      <SectionID number="05" name="EXPERIENCE" variant="ink" />

      <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-16 items-start">
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-4">
            Workshop
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-[1.1] text-white mb-6">
            {t('workshopsExplained.title')}
          </h2>
          <p className="text-lg text-white/60">{t('workshopsExplained.intro')}</p>
        </div>

        <div className="space-y-5">
          <p className="text-base text-white/50">{t('workshopsExplained.clarification')}</p>
          <p className="text-base text-white/70">{t('workshopsExplained.description')}</p>
          <p className="text-base text-white/70">{t('workshopsExplained.outcome')}</p>
          <p className="text-sm text-white/40 italic pt-4 border-t border-white/10">
            {t('workshopsExplained.aside')}
          </p>
        </div>
      </div>
    </Section>
  );
}
