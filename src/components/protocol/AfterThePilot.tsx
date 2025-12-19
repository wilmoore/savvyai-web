'use client';

import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';
import { Section } from '@/components/marketing';
import { BandLabel } from '@/components/layout';

interface Option {
  label: string;
  description: string;
}

export default function AfterThePilot() {
  const { t } = useTranslation('protocol');
  const options = t('afterThePilot.options', { returnObjects: true }) as Option[];

  return (
    <Section variant="contrast" size="wide">
      <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-16 items-start">
        <div>
          <BandLabel>What Comes Next</BandLabel>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6">
            {t('afterThePilot.title')}
          </h2>
          <p className="text-lg text-gray-600">{t('afterThePilot.intro')}</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
          <div className="space-y-4 mb-6">
            {options.map((option, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" strokeWidth={2} />
                <div>
                  <span className="font-medium text-gray-900">{option.label}</span>{' '}
                  <span className="text-gray-600">{option.description}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-lg font-medium text-gray-900 pt-4 border-t border-gray-200">
            {t('afterThePilot.closing')}
          </p>
        </div>
      </div>
    </Section>
  );
}
