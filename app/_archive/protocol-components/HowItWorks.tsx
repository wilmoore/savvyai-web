'use client';

import { useTranslation } from 'react-i18next';
import { Section } from '@/components/marketing';
import { BandLabel, ArtifactLabel } from '@/components/layout';

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
      <BandLabel>The Process</BandLabel>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-12">
        {t('howItWorks.title')}
      </h2>

      <div className="space-y-6">
        {phases.map((phase, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 border-l-2 border-l-emerald-500"
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-sm font-semibold font-mono">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.name}</h3>
                <p className="text-gray-700 mb-2">{phase.description}</p>
                <p className="text-gray-500 mb-4">{phase.detail}</p>
                <div className="flex items-center gap-2">
                  <ArtifactLabel>Output</ArtifactLabel>
                  <span className="text-sm font-medium text-gray-700">{phase.output}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
