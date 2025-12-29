'use client';

import { useTranslation } from 'react-i18next';
import { Section } from '@/components/marketing';
import { BandLabel } from '@/components/layout';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const { t } = useTranslation('protocol');
  const items = t('faq.items', { returnObjects: true }) as FAQItem[];

  return (
    <Section size="wide">
      <BandLabel>Questions</BandLabel>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-10">
        {t('faq.title')}
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {items.map((item, index) => (
          <div key={index} className="border-b border-gray-200 pb-6">
            <h3 className="text-base font-medium text-gray-900 mb-3">{item.question}</h3>
            <p className="text-sm text-gray-600">{item.answer}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
