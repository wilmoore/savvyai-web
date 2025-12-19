'use client';

import { useTranslation } from 'react-i18next';
import { Section } from '@/components/marketing';

interface DifferenceItem {
  title: string;
  description: string;
}

export default function Difference() {
  const { t } = useTranslation('homepage');
  const items = t('difference.items', { returnObjects: true }) as DifferenceItem[];

  return (
    <Section variant="muted">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-10">
        {t('difference.title')}
      </h2>
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold">
              {index + 1}
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
