'use client';

import { useTranslation } from 'react-i18next';
import { Shield } from 'lucide-react';
import { Section } from '@/components/marketing';
import { SectionLabel, GlassCard } from '@/components/layout';

export default function Safety() {
  const { t } = useTranslation('homepage');
  const items = t('safety.items', { returnObjects: true }) as string[];

  return (
    <Section size="wide">
      <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-16 items-start">
        <div>
          <SectionLabel>Trust & Safety</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
            {t('safety.title')}
          </h2>
          <p className="text-lg text-white/70">{t('safety.intro')}</p>
        </div>

        <GlassCard>
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-white/70">
                <Shield
                  className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0"
                  strokeWidth={1.5}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-base text-white mt-6 pt-4 border-t border-white/10">
            {t('safety.closing')}
          </p>
        </GlassCard>
      </div>
    </Section>
  );
}
