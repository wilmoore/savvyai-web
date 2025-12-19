'use client';

import { useTranslation } from 'react-i18next';
import { Section } from '@/components/marketing';

/**
 * WorkshopsExplained - Paper section explaining workshop experience
 */
export default function WorkshopsExplained() {
  const { t } = useTranslation('homepage');

  return (
    <Section variant="paper" size="wide">
      <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-16 items-start">
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-emerald-500 mb-4">
            Workshop
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-ink mb-6">
            {t('workshopsExplained.title')}
          </h2>
          <p className="text-lg text-black/60">{t('workshopsExplained.intro')}</p>
        </div>

        <div className="space-y-5">
          <p className="text-base text-black/50">{t('workshopsExplained.clarification')}</p>
          <p className="text-base text-black/70">{t('workshopsExplained.description')}</p>
          <p className="text-base text-black/70">{t('workshopsExplained.outcome')}</p>
          <p className="text-sm text-black/40 italic pt-4 border-t border-black/10">
            {t('workshopsExplained.aside')}
          </p>
        </div>
      </div>
    </Section>
  );
}
