'use client';

import { useTranslation } from 'react-i18next';
import { Section } from '@/components/marketing';

interface FAQItem {
  question: string;
  answer: string;
}

export default function HomeFAQ() {
  const { t } = useTranslation('homepage');
  const items = t('homeFaq.items', { returnObjects: true }) as FAQItem[];

  return (
    <Section>
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
        {t('homeFaq.title')}
      </h2>
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="border-b border-border pb-6 last:border-0 last:pb-0">
            <h3 className="text-base font-medium text-foreground mb-2">{item.question}</h3>
            <p className="text-muted-foreground">{item.answer}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
