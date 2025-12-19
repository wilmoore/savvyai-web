'use client';

import { useTranslation } from 'react-i18next';
import { Section } from '@/components/marketing';
import { BandLabel } from '@/components/layout';

/**
 * WhoThisIsFor - Compact self-qualification section
 *
 * Purpose: Self-qualification
 * Job: Reduce confusion early
 *
 * This section appears early (section 2) to help visitors
 * quickly determine if Savvy AI is for them.
 */
export default function WhoThisIsFor() {
  const { t } = useTranslation('homepage');
  const items = t('whoThisIsFor.items', { returnObjects: true }) as string[];

  return (
    <Section size="wide" className="py-12 md:py-16">
      <BandLabel className="mb-4">{t('whoThisIsFor.label')}</BandLabel>

      <div className="flex flex-wrap gap-x-8 gap-y-3">
        {items.map((item, index) => (
          <span
            key={index}
            className="text-base text-gray-600 before:content-['•'] before:text-emerald-500 before:mr-2"
          >
            {item}
          </span>
        ))}
      </div>
    </Section>
  );
}
