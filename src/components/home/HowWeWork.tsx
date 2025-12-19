'use client';

import { useTranslation } from 'react-i18next';
import { Section } from '@/components/marketing';
import { BandLabel } from '@/components/layout';

export default function HowWeWork() {
  const { t } = useTranslation('homepage');
  const items = t('howWeWork.items', { returnObjects: true }) as string[];

  return (
    <Section size="wide">
      <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-16 items-start">
        <div>
          <BandLabel>Our Approach</BandLabel>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6">
            {t('howWeWork.title')}
          </h2>
          <p className="text-lg text-gray-600">{t('howWeWork.intro')}</p>
        </div>

        <div className="space-y-6">
          <p className="text-base text-gray-700 mb-4">{t('howWeWork.description')}</p>

          <ul className="space-y-4">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-600">
                <span className="text-emerald-500 mt-1.5 flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="pt-6 border-t border-gray-200 space-y-1">
            <p className="text-base text-gray-700">{t('howWeWork.closing.line1')}</p>
            <p className="text-base text-gray-700">{t('howWeWork.closing.line2')}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
