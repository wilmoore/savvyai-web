'use client';

import { useTranslation } from 'react-i18next';
import { Section } from '@/components/marketing';
import { SectionLabel } from '@/components/layout';

export default function WorkshopsExplained() {
  const { t } = useTranslation('homepage');

  return (
    <Section size="wide">
      <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-16 items-start">
        <div>
          <SectionLabel>Workshops</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
            {t('workshopsExplained.title')}
          </h2>
          <p className="text-lg text-white/70">{t('workshopsExplained.intro')}</p>
        </div>

        <div className="space-y-5">
          <p className="text-base text-white/60">{t('workshopsExplained.clarification')}</p>
          <p className="text-base text-white">{t('workshopsExplained.description')}</p>
          <p className="text-base text-white">{t('workshopsExplained.outcome')}</p>
          <p className="text-sm text-white/50 italic pt-4 border-t border-white/10">
            {t('workshopsExplained.aside')}
          </p>
        </div>
      </div>
    </Section>
  );
}
