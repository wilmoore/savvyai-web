'use client';

import { useTranslation } from 'react-i18next';
import { Section, SectionID } from '@/components/marketing';

/**
 * WhoThisIsFor - Compact self-qualification section
 *
 * Paper background for zebra rhythm.
 * Helps visitors quickly determine if Śavvy AI is for them.
 */
export default function WhoThisIsFor() {
  const { t } = useTranslation('homepage');
  const items = t('whoThisIsFor.items', { returnObjects: true }) as string[];

  return (
    <Section variant="paper" size="wide" className="py-12 md:py-16">
      <SectionID number="02" name="AUDIENCE" variant="paper" className="mb-4" />

      <p className="text-xs font-mono uppercase tracking-widest text-black/40 mb-4">
        {t('whoThisIsFor.label')}
      </p>

      <div className="flex flex-wrap gap-x-8 gap-y-3">
        {items.map((item, index) => (
          <span
            key={index}
            className="text-base text-black/60 before:content-['•'] before:text-emerald-500 before:mr-2"
          >
            {item}
          </span>
        ))}
      </div>
    </Section>
  );
}
