'use client';

import { useTranslation } from 'react-i18next';
import { GlassCard, SectionLabel } from '@/components/layout';

export default function Problem() {
  const { t } = useTranslation('homepage');
  const items = t('problem.list.items', { returnObjects: true }) as string[];

  return (
    <GlassCard className="h-full">
      <SectionLabel>The Challenge</SectionLabel>

      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
        {t('problem.title')}
      </h2>

      <div className="space-y-4 mb-6">
        <p className="text-lg text-white/70">{t('problem.intro.line1')}</p>
        <p className="text-lg text-white/70">{t('problem.intro.line2')}</p>
      </div>

      <div className="mb-6">
        <p className="text-sm font-medium text-white/50 uppercase tracking-wider mb-4">
          {t('problem.list.title')}
        </p>
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-white/70">
              <span className="text-emerald-500 mt-1 flex-shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-1 pt-4 border-t border-white/10">
        <p className="text-sm text-white/60">{t('problem.conclusion.line1')}</p>
        <p className="text-sm font-medium text-white">{t('problem.conclusion.line2')}</p>
      </div>
    </GlassCard>
  );
}
