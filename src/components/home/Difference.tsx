'use client';

import { useTranslation } from 'react-i18next';
import { X, Check } from 'lucide-react';
import { Section } from '@/components/marketing';
import { BandLabel } from '@/components/layout';

interface ComparisonItem {
  typical: string;
  savvy: string;
}

/**
 * Difference - Comparative differentiation section
 *
 * Purpose: Differentiation
 * Job: Contrast, not philosophy
 *
 * Format: Typical AI training vs Savvy AI (Before vs After)
 * Avoid belief language. Show differences through outcomes.
 */
export default function Difference() {
  const { t } = useTranslation('homepage');
  const comparisons = t('difference.comparisons', { returnObjects: true }) as ComparisonItem[];

  return (
    <Section size="wide">
      <BandLabel className="mb-4">{t('difference.label')}</BandLabel>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-12">
        {t('difference.title')}
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">
            {t('difference.typicalTitle')}
          </h3>
          <ul className="space-y-4">
            {comparisons.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-500">
                <X className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <span>{item.typical}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-emerald-50/50 border border-emerald-100 rounded-lg p-6">
          <h3 className="text-sm font-medium text-emerald-700 uppercase tracking-wider mb-6">
            {t('difference.savvyTitle')}
          </h3>
          <ul className="space-y-4">
            {comparisons.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" strokeWidth={2} />
                <span>{item.savvy}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
