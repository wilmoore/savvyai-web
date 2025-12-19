'use client';

import { useTranslation } from 'react-i18next';
import { Section } from '@/components/marketing';

interface NotItem {
  label: string;
  description: string;
}

export default function WhatThisIsNot() {
  const { t } = useTranslation('protocol');
  const items = t('whatThisIsNot.items', { returnObjects: true }) as NotItem[];

  return (
    <Section>
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-10">
        {t('whatThisIsNot.title')}
      </h2>
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="text-muted-foreground mt-0.5 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </span>
            <div>
              <span className="font-medium text-foreground">{item.label}</span>{' '}
              <span className="text-muted-foreground">{item.description}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
