'use client';

import { useTranslation } from 'react-i18next';
import { GlassCard, SectionLabel } from '@/components/layout';

export default function Belief() {
  const { t } = useTranslation('homepage');
  const statements = t('belief.statements', { returnObjects: true }) as string[];

  return (
    <GlassCard className="h-full">
      <SectionLabel>Our Belief</SectionLabel>

      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
        {t('belief.title')}
      </h2>

      <div className="space-y-4 mb-6">
        {statements.map((statement, index) => (
          <p key={index} className={index === 0 ? 'text-lg text-white/70' : 'text-base text-white'}>
            {statement}
          </p>
        ))}
      </div>

      <p className="text-base text-white/60 mb-4">{t('belief.insight')}</p>

      <p className="text-base font-medium text-white pt-4 border-t border-white/10">
        {t('belief.closing')}
      </p>
    </GlassCard>
  );
}
