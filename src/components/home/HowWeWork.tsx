'use client';

import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { Section } from '@/components/marketing';
import { BandLabel } from '@/components/layout';

interface Step {
  number: string;
  name: string;
  description: string;
}

/**
 * HowWeWork - Engagement flow section
 *
 * Purpose: Reassurance
 * Job: Show structure and predictability
 *
 * Simple 3-4 step flow: Workshop → Pilot → Iteration → Scale
 * No beliefs, no positioning, just mechanics.
 */
export default function HowWeWork() {
  const { t } = useTranslation('homepage');
  const steps = t('howTeamsWork.steps', { returnObjects: true }) as Step[];

  return (
    <Section size="wide" variant="neutral">
      <div className="text-center mb-12">
        <BandLabel className="mb-4">{t('howTeamsWork.label')}</BandLabel>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
          {t('howTeamsWork.title')}
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-4 md:gap-0">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            <div className="flex flex-col items-center text-center max-w-[200px]">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg font-semibold font-mono mb-3">
                {step.number}
              </div>
              <h3 className="text-base font-medium text-gray-900 mb-1">{step.name}</h3>
              <p className="text-sm text-gray-500">{step.description}</p>
            </div>

            {index < steps.length - 1 && (
              <ArrowRight className="hidden md:block w-6 h-6 text-gray-300 mx-6" />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
