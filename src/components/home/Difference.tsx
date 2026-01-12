'use client';

import { useTranslation } from 'react-i18next';
import { X, Check } from 'lucide-react';
import { Section, SectionID } from '@/components/marketing';

interface ComparisonItem {
  typical: string;
  savvy: string;
}

/**
 * Difference - Ink background comparison section
 *
 * Before vs After format with editorial styling.
 * Authoritative "Why Us" on premium black.
 */
export default function Difference() {
  const { t } = useTranslation('homepage');
  const comparisons = t('difference.comparisons', { returnObjects: true }) as ComparisonItem[];

  return (
    <Section variant="ink" size="wide">
      <SectionID number="03" name="DIFFERENCE" variant="ink" />

      {/* Founder Narrative Intro */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-[1.1] text-white mb-4">
          {t('difference.founderHeadline')}
        </h2>
        <p className="text-lg text-white/60">{t('difference.founderBody')}</p>
      </div>

      {/* Comparison Section */}
      <p className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">
        {t('difference.label')}
      </p>
      <h3 className="text-2xl md:text-3xl font-bold tracking-tighter leading-[1.1] text-white mb-12">
        {t('difference.title')}
      </h3>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-white/40 mb-6">
            {t('difference.typicalTitle')}
          </h4>
          <ul className="space-y-4">
            {comparisons.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-white/50">
                <X className="w-5 h-5 text-white/30 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <span>{item.typical}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-md p-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-6">
            {t('difference.savvyTitle')}
          </h4>
          <ul className="space-y-4">
            {comparisons.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-white/70">
                <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" strokeWidth={2} />
                <span>{item.savvy}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
