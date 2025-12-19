'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { Section } from '@/components/marketing';

interface Phase {
  number: string;
  name: string;
  description: string;
}

export default function Protocol() {
  const { t } = useTranslation('homepage');
  const phases = t('protocol.phases', { returnObjects: true }) as Phase[];

  return (
    <Section variant="muted">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
        {t('protocol.title')}
      </h2>
      <p className="text-xl text-muted-foreground mb-10">{t('protocol.subtitle')}</p>

      <div className="space-y-8">
        {phases.map((phase) => (
          <div key={phase.number} className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold">
              {phase.number}
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground mb-1">{phase.name}</h3>
              <p className="text-muted-foreground">{phase.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link
          href="/protocol"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
        >
          {t('protocol.cta')}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </Section>
  );
}
