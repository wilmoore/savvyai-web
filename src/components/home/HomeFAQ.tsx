'use client';

import { useTranslation } from 'react-i18next';
import { Section } from '@/components/marketing';

interface FAQItem {
  question: string;
  answer: string;
}

/**
 * HomeFAQ - Paper background FAQ section
 *
 * Editorial FAQ cards with black/10 borders.
 */
export default function HomeFAQ() {
  const { t } = useTranslation('homepage');
  const items = t('homeFaq.items', { returnObjects: true }) as FAQItem[];

  return (
    <Section variant="paper" size="wide">
      <p className="text-xs font-mono uppercase tracking-widest text-black/40 mb-4">
        {t('homeFaq.label')}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-ink mb-12">
        {t('homeFaq.title')}
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <div key={index} className="border border-black/10 rounded-md p-6">
            <h3 className="text-base font-semibold text-ink mb-3">{item.question}</h3>
            <p className="text-sm text-black/60">{item.answer}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
