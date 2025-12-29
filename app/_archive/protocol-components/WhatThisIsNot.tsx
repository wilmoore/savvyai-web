'use client';

import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import { Section } from '@/components/marketing';
import { BandLabel } from '@/components/layout';

interface NotItem {
  label: string;
  description: string;
}

export default function WhatThisIsNot() {
  const { t } = useTranslation('protocol');
  const items = t('whatThisIsNot.items', { returnObjects: true }) as NotItem[];

  return (
    <Section size="wide">
      <BandLabel>{t('whatThisIsNot.label')}</BandLabel>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-10">
        {t('whatThisIsNot.title')}
      </h2>
      <div className="space-y-5">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <X className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" strokeWidth={2} />
            <div>
              <span className="font-medium text-gray-900">{item.label}</span>{' '}
              <span className="text-gray-600">{item.description}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
