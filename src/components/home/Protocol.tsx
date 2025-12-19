'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section } from '@/components/marketing';
import { BandLabel } from '@/components/layout';

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
          <BandLabel>The Protocol</BandLabel>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6">
            {t('protocol.title')}
          </h2>
          <p className="text-lg text-gray-600 mb-8">{t('protocol.subtitle')}</p>

          <Link
            href="/protocol"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors group"
          >
            {t('protocol.cta')}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="space-y-4">
          {phases.map((phase) => (
            <div
              key={phase.number}
              className="p-5 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-sm font-semibold font-mono">
                  {phase.number}
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-900 mb-1">{phase.name}</h3>
                  <p className="text-sm text-gray-500">{phase.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
