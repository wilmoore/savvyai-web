'use client';

import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';
import { Section } from '@/components/marketing';
import { GlassCard, SectionLabel } from '@/components/layout';

export default function Comparison() {
  const { t } = useTranslation('protocol');
  const oldWayItems = t('comparison.oldWay.items', {
    returnObjects: true,
  }) as string[];
  const savvyWayItems = t('comparison.savvyWay.items', {
    returnObjects: true,
  }) as string[];

  return (
    <Section variant="contrast" size="wide">
      <SectionLabel className="text-center">{t('comparison.title')}</SectionLabel>

      <div className="grid md:grid-cols-2 gap-8">
        <GlassCard>
          <h3 className="font-mono text-xs font-semibold text-white/40 uppercase tracking-wider mb-6">
            {t('comparison.oldWay.title')}
          </h3>
          <ul className="space-y-4">
            {oldWayItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-white/60">
                <span className="text-white/30 mt-0.5 flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </GlassCard>

        <GlassCard variant="bordered" className="border-emerald-500/30">
          <h3 className="font-mono text-xs font-semibold text-emerald-500 uppercase tracking-wider mb-6">
            {t('comparison.savvyWay.title')}
          </h3>
          <ul className="space-y-4">
            {savvyWayItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-white">
                <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" strokeWidth={2} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </Section>
  );
}
