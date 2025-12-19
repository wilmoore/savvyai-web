'use client';

import { useTranslation } from 'react-i18next';
import { X, Check } from 'lucide-react';
import { Section } from '@/components/marketing';

interface ComparisonItem {
  typical: string;
  savvy: string;
}

/**
 * Difference - Paper background comparison section
 *
 * Before vs After format with editorial styling.
 */
export default function Difference() {
  const { t } = useTranslation('homepage');
  const comparisons = t('difference.comparisons', { returnObjects: true }) as ComparisonItem[];

  return (
    <Section variant="paper" size="wide">
      {/* Section ID */}
      <div className="mb-6">
        <span className="text-xs font-mono uppercase tracking-widest text-black/30">
          [ 09 / CONTRAST ]
        </span>
      </div>

      <p className="text-xs font-mono uppercase tracking-widest text-black/40 mb-4">
        {t('difference.label')}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-[1.1] text-ink mb-12">
        {t('difference.title')}
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xs font-mono uppercase tracking-wider text-black/40 mb-6">
            {t('difference.typicalTitle')}
          </h3>
          <ul className="space-y-4">
            {comparisons.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-black/50">
                <X className="w-5 h-5 text-black/30 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <span>{item.typical}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-emerald-50/50 border border-emerald-100 rounded-md p-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-600 mb-6">
            {t('difference.savvyTitle')}
          </h3>
          <ul className="space-y-4">
            {comparisons.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-black/70">
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
