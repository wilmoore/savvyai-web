'use client';

import { useTranslation } from 'react-i18next';
import { Section } from '@/components/marketing';
import { GlassCard, SectionLabel } from '@/components/layout';

export default function Pilot24() {
  const { t } = useTranslation('homepage');
  const items = t('pilot24.items', { returnObjects: true }) as string[];

  return (
    <Section size="wide">
      <GlassCard variant="elevated" className="relative overflow-hidden">
        <div className="absolute top-4 right-4">
          <span className="font-mono text-xs uppercase tracking-wider text-emerald-500 bg-emerald-500/10 px-3 py-1.5 rounded-full">
            24 Hours
          </span>
        </div>

        <div className="grid md:grid-cols-[1.5fr_1fr] gap-10 items-start">
          <div>
            <SectionLabel>Pilot Program</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
              {t('pilot24.title')}
            </h2>
            <p className="text-lg text-white/70 mb-6">{t('pilot24.intro')}</p>
            <p className="text-base text-white mb-4">{t('pilot24.subtitle')}</p>
          </div>

          <div>
            <ul className="space-y-3">
              {items.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-white/70">
                  <span className="text-emerald-500 mt-1 flex-shrink-0">•</span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-sm text-white/50 mt-8 pt-6 border-t border-white/10">
          {t('pilot24.safety')}
        </p>
      </GlassCard>
    </Section>
  );
}
