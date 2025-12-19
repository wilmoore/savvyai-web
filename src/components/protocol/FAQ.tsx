'use client';

import { useTranslation } from 'react-i18next';
import { Section } from '@/components/marketing';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const { t } = useTranslation('protocol');
  const items = t('faq.items', { returnObjects: true }) as FAQItem[];

  return (
    <Section>
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-10">{t('faq.title')}</h2>

      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="border-b border-border pb-8 last:border-0">
            <h3 className="text-lg font-medium text-foreground mb-3">{item.question}</h3>
            <p className="text-muted-foreground">{item.answer}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
