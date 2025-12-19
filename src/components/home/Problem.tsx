'use client';

import { useTranslation } from 'react-i18next';
import { BandLabel } from '@/components/layout';

export default function Problem() {
  const { t } = useTranslation('homepage');
  const items = t('problem.list.items', { returnObjects: true }) as string[];

  return (
    <div>
      <BandLabel>{t('problem.label')}</BandLabel>

      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-6">
        {t('problem.title')}
      </h2>

      <div className="space-y-4 mb-6">
        <p className="text-lg text-gray-600">{t('problem.intro.line1')}</p>
        <p className="text-lg text-gray-600">{t('problem.intro.line2')}</p>
      </div>

      <div className="mb-6">
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
          {t('problem.list.title')}
        </p>
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-600">
              <span className="text-emerald-500 mt-1 flex-shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-1 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-500">{t('problem.conclusion.line1')}</p>
        <p className="text-sm font-medium text-gray-900">{t('problem.conclusion.line2')}</p>
      </div>
    </div>
  );
}
