'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section } from '@/components/marketing';

interface Phase {
  number: string;
  name: string;
  description: string;
}

/**
 * Protocol - Ink background authority section
 *
 * Already dark themed, refined for zebra rhythm.
 * Glass cards with white/10 borders.
 */
export default function Protocol() {
  const { t } = useTranslation('homepage');
  const phases = t('protocol.phases', { returnObjects: true }) as Phase[];

  return (
    <Section size="full" variant="ink">
      {/* Section ID */}
      <div className="mb-6">
        <span className="text-xs font-mono uppercase tracking-widest text-white/30">
          [ 07 / PROTOCOL ]
        </span>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-4">
            Protocol
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-[1.1] text-white mb-4">
            {t('protocol.title')}
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">{t('protocol.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {phases.map((phase) => (
            <div
              key={phase.number}
              className="relative p-6 bg-white/5 border border-white/10 rounded-md backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-base font-semibold font-mono border border-emerald-500/30">
                  {phase.number}
                </div>
                <h3 className="text-lg font-semibold text-white">{phase.name}</h3>
              </div>
              <p className="text-sm text-white/60">{phase.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/protocol"
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors group"
          >
            {t('protocol.cta')}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
