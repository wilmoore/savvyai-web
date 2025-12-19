'use client';

import { useTranslation } from 'react-i18next';
import { Check, X } from 'lucide-react';
import { Section } from '@/components/marketing';
import { SectionLabel, GlassCard } from '@/components/layout';

export default function Audience() {
  const { t } = useTranslation('homepage');
  const forItems = t('audience.forItems', { returnObjects: true }) as string[];
  const notForItems = t('audience.notForItems', { returnObjects: true }) as string[];

  return (
    <Section size="wide">
      <SectionLabel className="text-center">Is This For You?</SectionLabel>

      <div className="grid md:grid-cols-2 gap-8">
        <GlassCard variant="bordered" className="border-emerald-500/30">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-8">
            {t('audience.forTitle')}
          </h2>
          <ul className="space-y-4">
            {forItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-white">
                <span className="text-emerald-500 mt-0.5 flex-shrink-0">
                  <Check className="w-5 h-5" strokeWidth={2} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </GlassCard>

        <GlassCard>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-8">
            {t('audience.notForTitle')}
          </h2>
          <ul className="space-y-4">
            {notForItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-white/60">
                <span className="text-white/40 mt-0.5 flex-shrink-0">
                  <X className="w-5 h-5" strokeWidth={2} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </Section>
  );
}
