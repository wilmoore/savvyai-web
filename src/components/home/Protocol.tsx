'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section } from '@/components/marketing';
import { SectionLabel, GlassCard } from '@/components/layout';

interface Phase {
  number: string;
  name: string;
  description: string;
}

export default function Protocol() {
  const { t } = useTranslation('homepage');
  const phases = t('protocol.phases', { returnObjects: true }) as Phase[];

  return (
    <Section size="wide">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        <div>
          <SectionLabel>The Protocol</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
            {t('protocol.title')}
          </h2>
          <p className="text-lg text-white/70 mb-8">{t('protocol.subtitle')}</p>

          <Link
            href="/protocol"
            className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 font-medium transition-colors group"
          >
            {t('protocol.cta')}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="space-y-4">
          {phases.map((phase) => (
            <GlassCard key={phase.number} className="p-5" hover>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-sm font-semibold font-mono">
                  {phase.number}
                </div>
                <div>
                  <h3 className="text-base font-medium text-white mb-1">{phase.name}</h3>
                  <p className="text-sm text-white/60">{phase.description}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </Section>
  );
}
