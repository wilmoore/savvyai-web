'use client';

import { useTranslation } from 'react-i18next';
import { Section } from '@/components/marketing';
import { SectionLabel, GlassCard } from '@/components/layout';

interface DifferenceItem {
  title: string;
  description: string;
}

export default function Difference() {
  const { t } = useTranslation('homepage');
  const items = t('difference.items', { returnObjects: true }) as DifferenceItem[];

  return (
    <Section size="wide">
      <SectionLabel>What Makes Us Different</SectionLabel>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-12">
        {t('difference.title')}
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <GlassCard key={index} hover>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-sm font-semibold font-mono">
                {index + 1}
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
                <p className="text-white/60">{item.description}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
