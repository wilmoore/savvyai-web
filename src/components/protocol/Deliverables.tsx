'use client';

import { useTranslation } from 'react-i18next';
import { Section } from '@/components/marketing';

interface Deliverable {
  number: string;
  name: string;
  description: string;
}

export default function Deliverables() {
  const { t } = useTranslation('protocol');
  const items = t('deliverables.items', { returnObjects: true }) as Deliverable[];

  return (
    <Section variant="muted">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-10">
        {t('deliverables.title')}
      </h2>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {items.map((item) => (
          <div key={item.number} className="bg-background border border-border rounded-lg p-6">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold mb-4">
              {item.number}
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{item.name}</h3>
            <p className="text-muted-foreground text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
