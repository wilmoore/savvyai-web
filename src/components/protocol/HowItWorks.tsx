'use client';

import { useTranslation } from 'react-i18next';
import { Section } from '@/components/marketing';

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
    <Section>
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-12">
        {t('howItWorks.title')}
      </h2>

      <div className="space-y-12">
        {phases.map((phase, index) => (
          <div key={index} className="border-l-2 border-primary/30 pl-6 md:pl-8">
            <h3 className="text-xl font-semibold text-foreground mb-3">{phase.name}</h3>
            <p className="text-foreground mb-3">{phase.description}</p>
            <p className="text-muted-foreground mb-4">{phase.detail}</p>
            <p className="text-sm font-medium text-primary">{phase.output}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
