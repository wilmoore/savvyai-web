'use client';

import { useTranslation } from 'react-i18next';
import { Section } from '@/components/marketing';
import { BandLabel, ArtifactLabel } from '@/components/layout';

export default function Pilot24() {
  const { t } = useTranslation('homepage');
  const items = t('pilot24.items', { returnObjects: true }) as string[];

  return (
    <Section size="wide">
      <div className="bg-white border border-gray-200 rounded-lg p-8 md:p-10 relative overflow-hidden shadow-sm">
        <div className="absolute top-4 right-4">
          <ArtifactLabel className="bg-emerald-50 px-3 py-1.5 rounded-full">24 Hours</ArtifactLabel>
        </div>

        <div className="grid md:grid-cols-[1.5fr_1fr] gap-10 items-start">
          <div>
            <BandLabel>Pilot Program</BandLabel>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6">
              {t('pilot24.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-6">{t('pilot24.intro')}</p>
            <p className="text-base text-gray-700 mb-4">{t('pilot24.subtitle')}</p>
          </div>

          <div>
            <ul className="space-y-3">
              {items.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-600">
                  <span className="text-emerald-500 mt-1 flex-shrink-0">•</span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-8 pt-6 border-t border-gray-200">
          {t('pilot24.safety')}
        </p>
      </div>
    </Section>
  );
}
