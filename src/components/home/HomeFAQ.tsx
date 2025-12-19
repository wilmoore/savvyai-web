'use client';

import { useTranslation } from 'react-i18next';
import { Section } from '@/components/marketing';
import { SectionLabel, GlassCard } from '@/components/layout';

interface FAQItem {
  question: string;
  answer: string;
}

export default function HomeFAQ() {
  const { t } = useTranslation('homepage');
  const items = t('homeFaq.items', { returnObjects: true }) as FAQItem[];

  return (
    <Section size="wide">
      <SectionLabel>Common Questions</SectionLabel>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-12">
        {t('homeFaq.title')}
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <GlassCard key={index} className="p-6">
            <h3 className="text-base font-medium text-white mb-3">{item.question}</h3>
            <p className="text-sm text-white/60">{item.answer}</p>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
