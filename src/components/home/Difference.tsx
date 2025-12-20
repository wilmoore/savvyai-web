'use client';

import { useTranslation } from 'react-i18next';
import { X, Check } from 'lucide-react';
import { Section, SectionID } from '@/components/marketing';

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
      <SectionID number="09" name="CONTRAST" variant="paper" />

      {/* Founder Narrative Intro */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-[1.1] text-ink mb-4">
          {t('difference.founderHeadline')}
        </h2>
        <p className="text-lg text-black/60 max-w-3xl">{t('difference.founderBody')}</p>
      </div>

      {/* Comparison Section */}
      <p className="text-xs font-mono uppercase tracking-widest text-black/40 mb-4">
        {t('difference.label')}
      </p>
      <h3 className="text-2xl md:text-3xl font-bold tracking-tighter leading-[1.1] text-ink mb-12">
        {t('difference.title')}
      </h3>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-black/40 mb-6">
            {t('difference.typicalTitle')}
          </h4>
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
          <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-600 mb-6">
            {t('difference.savvyTitle')}
          </h4>
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
