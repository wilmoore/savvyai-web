'use client';

import { useTranslation } from 'react-i18next';
import { Section } from '@/components/marketing';
import { SectionLabel, GlassCard } from '@/components/layout';

interface Deliverable {
  number: string;
  name: string;
  description: string;
}

export default function Deliverables() {
  const { t } = useTranslation('protocol');
  const items = t('deliverables.items', { returnObjects: true }) as Deliverable[];

  return (
    <Section variant="contrast" size="wide">
      <SectionLabel>What You Get</SectionLabel>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-10">
        {t('deliverables.title')}
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item) => (
          <GlassCard key={item.number} hover>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-sm font-semibold font-mono mb-4">
              {item.number}
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{item.name}</h3>
            <p className="text-white/60 text-sm">{item.description}</p>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
