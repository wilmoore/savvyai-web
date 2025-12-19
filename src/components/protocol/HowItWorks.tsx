'use client';

import { useTranslation } from 'react-i18next';
import { Section } from '@/components/marketing';
import { SectionLabel, GlassCard } from '@/components/layout';

interface Phase {
  name: string;
  description: string;
  detail: string;
  output: string;
}

export default function HowItWorks() {
  const { t } = useTranslation('protocol');
  const phases = t('howItWorks.phases', { returnObjects: true }) as Phase[];

  return (
    <Section size="wide">
      <SectionLabel>The Process</SectionLabel>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-12">
        {t('howItWorks.title')}
      </h2>

      <div className="space-y-6">
        {phases.map((phase, index) => (
          <GlassCard key={index} className="border-l-2 border-l-emerald-500/50">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-sm font-semibold font-mono">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{phase.name}</h3>
                <p className="text-white mb-2">{phase.description}</p>
                <p className="text-white/60 mb-4">{phase.detail}</p>
                <p className="text-sm font-medium text-emerald-500">{phase.output}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
