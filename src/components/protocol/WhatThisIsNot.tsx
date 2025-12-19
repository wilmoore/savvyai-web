'use client';

import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import { Section } from '@/components/marketing';
import { SectionLabel } from '@/components/layout';

interface NotItem {
  label: string;
  description: string;
}

export default function WhatThisIsNot() {
  const { t } = useTranslation('protocol');
  const items = t('whatThisIsNot.items', { returnObjects: true }) as NotItem[];

  return (
    <Section size="wide">
      <SectionLabel>Expectations</SectionLabel>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-10">
        {t('whatThisIsNot.title')}
      </h2>
      <div className="space-y-5">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <X className="w-5 h-5 text-white/40 mt-0.5 flex-shrink-0" strokeWidth={2} />
            <div>
              <span className="font-medium text-white">{item.label}</span>{' '}
              <span className="text-white/60">{item.description}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
