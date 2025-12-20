'use client';

import { useTranslation } from 'react-i18next';
import { Check, X } from 'lucide-react';
import { Section, SectionID } from '@/components/marketing';

/**
 * Audience - Ink background qualification section
 *
 * High-stakes "Who is this for" summary on premium black.
 */
export default function Audience() {
  const { t } = useTranslation('homepage');
  const forItems = t('audience.forItems', { returnObjects: true }) as string[];
  const notForItems = t('audience.notForItems', { returnObjects: true }) as string[];

  return (
    <Section variant="ink" size="wide">
      <SectionID number="13" name="QUALIFICATION" variant="ink" />

      <p className="text-xs font-mono uppercase tracking-widest text-white/40 text-center mb-8">
        Is This For You?
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-md p-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter leading-[1.1] text-white mb-8">
            {t('audience.forTitle')}
          </h2>
          <ul className="space-y-4">
            {forItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-white/70">
                <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" strokeWidth={2} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-md p-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter leading-[1.1] text-white mb-8">
            {t('audience.notForTitle')}
          </h2>
          <ul className="space-y-4">
            {notForItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-white/50">
                <X className="w-5 h-5 text-white/30 mt-0.5 flex-shrink-0" strokeWidth={2} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
