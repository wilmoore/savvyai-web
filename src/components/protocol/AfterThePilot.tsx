'use client';

import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';
import { Section } from '@/components/marketing';
import { SectionLabel, GlassCard } from '@/components/layout';

interface Option {
  label: string;
  description: string;
}

export default function AfterThePilot() {
  const { t } = useTranslation('protocol');
  const options = t('afterThePilot.options', { returnObjects: true }) as Option[];

  return (
    <Section variant="contrast" size="wide">
      <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-16 items-start">
        <div>
          <SectionLabel>What Comes Next</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
            {t('afterThePilot.title')}
          </h2>
          <p className="text-lg text-white/70">{t('afterThePilot.intro')}</p>
        </div>

        <GlassCard>
          <div className="space-y-4 mb-6">
            {options.map((option, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" strokeWidth={2} />
                <div>
                  <span className="font-medium text-white">{option.label}</span>{' '}
                  <span className="text-white/60">{option.description}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-lg font-medium text-white pt-4 border-t border-white/10">
            {t('afterThePilot.closing')}
          </p>
        </GlassCard>
      </div>
    </Section>
  );
}
