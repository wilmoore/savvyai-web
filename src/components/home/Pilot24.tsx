'use client';

import { useTranslation } from 'react-i18next';
import { Clock } from 'lucide-react';
import { Section } from '@/components/marketing';

/**
 * Pilot24 - Justification section
 *
 * Paper background for zebra rhythm.
 * Problem → Decision → Result flow.
 */
export default function Pilot24() {
  const { t } = useTranslation('homepage');
  const items = t('pilot24.items', { returnObjects: true }) as string[];

  return (
    <Section size="wide" variant="paper">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Clock className="w-6 h-6 text-emerald-500" />
          <p className="text-xs font-mono uppercase tracking-widest text-black/40">
            The 24-Hour Approach
          </p>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-ink mb-6">
          {t('pilot24.title')}
        </h2>

        <p className="text-lg text-black/60 mb-6">{t('pilot24.intro')}</p>

        <p className="text-base text-black/70 mb-6">{t('pilot24.subtitle')}</p>

        <ul className="space-y-3 mb-8">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-black/60">
              <span className="text-emerald-500 mt-1 flex-shrink-0">&#x2022;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-sm text-black/40 pt-6 border-t border-black/10">{t('pilot24.safety')}</p>
      </div>
    </Section>
  );
}
