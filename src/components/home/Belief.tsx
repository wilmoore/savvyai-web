'use client';

import { useTranslation } from 'react-i18next';
import { BandLabel } from '@/components/layout';

export default function Belief() {
  const { t } = useTranslation('homepage');
  const statements = t('belief.statements', { returnObjects: true }) as string[];

  return (
    <div>
      <BandLabel>{t('belief.label')}</BandLabel>

      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-6">
        {t('belief.title')}
      </h2>

      <div className="space-y-4 mb-6">
        {statements.map((statement, index) => (
          <p
            key={index}
            className={index === 0 ? 'text-lg text-gray-600' : 'text-base text-gray-900'}
          >
            {statement}
          </p>
        ))}
      </div>

      <p className="text-base text-gray-500 mb-4">{t('belief.insight')}</p>

      <p className="text-base font-medium text-gray-900 pt-4 border-t border-gray-200">
        {t('belief.closing')}
      </p>
    </div>
  );
}
