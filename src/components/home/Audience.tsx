'use client';

import { useTranslation } from 'react-i18next';
import { Check, X } from 'lucide-react';
import { Section } from '@/components/marketing';

/**
 * Audience - Paper background qualification section
 */
export default function Audience() {
  const { t } = useTranslation('homepage');
  const forItems = t('audience.forItems', { returnObjects: true }) as string[];
  const notForItems = t('audience.notForItems', { returnObjects: true }) as string[];

  return (
    <Section variant="paper" size="wide">
      <p className="text-xs font-mono uppercase tracking-widest text-black/40 text-center mb-8">
        Is This For You?
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white border-2 border-emerald-200 rounded-md p-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-ink mb-8">
            {t('audience.forTitle')}
          </h2>
          <ul className="space-y-4">
            {forItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-black/70">
                <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" strokeWidth={2} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white border border-black/10 rounded-md p-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-ink mb-8">
            {t('audience.notForTitle')}
          </h2>
          <ul className="space-y-4">
            {notForItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-black/50">
                <X className="w-5 h-5 text-black/30 mt-0.5 flex-shrink-0" strokeWidth={2} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
