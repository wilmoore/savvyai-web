'use client';

import { useTranslation } from 'react-i18next';
import { Shield } from 'lucide-react';
import { Section } from '@/components/marketing';
import { BandLabel } from '@/components/layout';

export default function Safety() {
  const { t } = useTranslation('homepage');
  const items = t('safety.items', { returnObjects: true }) as string[];

  return (
    <Section size="wide">
      <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-16 items-start">
        <div>
          <BandLabel>Trust & Safety</BandLabel>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6">
            {t('safety.title')}
          </h2>
          <p className="text-lg text-gray-600">{t('safety.intro')}</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm">
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-600">
                <Shield
                  className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0"
                  strokeWidth={1.5}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-base text-gray-700 mt-6 pt-4 border-t border-gray-200">
            {t('safety.closing')}
          </p>
        </div>
      </div>
    </Section>
  );
}
