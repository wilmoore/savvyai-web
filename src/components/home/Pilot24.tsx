'use client';

import { useTranslation } from 'react-i18next';
import { Clock } from 'lucide-react';
import { Section } from '@/components/marketing';
import { BandLabel } from '@/components/layout';

/**
 * Pilot24 - Justification section
 *
 * Purpose: Justification
 * Job: Explain a counter-intuitive choice
 *
 * Keep this tight: Problem → Decision → Result
 * Answers: "Why do you work this way?"
 */
export default function Pilot24() {
  const { t } = useTranslation('homepage');
  const items = t('pilot24.items', { returnObjects: true }) as string[];

  return (
    <Section size="wide" variant="neutral">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Clock className="w-6 h-6 text-emerald-500" />
          <BandLabel>The 24-Hour Approach</BandLabel>
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6">
          {t('pilot24.title')}
        </h2>

        <p className="text-lg text-gray-600 mb-6">{t('pilot24.intro')}</p>

        <p className="text-base text-gray-700 mb-6">{t('pilot24.subtitle')}</p>

        <ul className="space-y-3 mb-8">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-600">
              <span className="text-emerald-500 mt-1 flex-shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-sm text-gray-500 pt-6 border-t border-gray-200">{t('pilot24.safety')}</p>
      </div>
    </Section>
  );
}
