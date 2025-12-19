'use client';

import { useTranslation } from 'react-i18next';
import { Section } from '@/components/marketing';

export default function Belief() {
  const { t } = useTranslation('homepage');
  const statements = t('belief.statements', { returnObjects: true }) as string[];

  return (
    <Section variant="muted">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
        {t('belief.title')}
      </h2>
      <div className="space-y-6">
        <div className="space-y-1">
          {statements.map((statement, index) => (
            <p
              key={index}
              className={
                index === 0 ? 'text-xl text-muted-foreground' : 'text-base text-foreground'
              }
            >
              {statement}
            </p>
          ))}
        </div>

        <p className="text-base text-muted-foreground mt-6">{t('belief.insight')}</p>

        <p className="text-base text-foreground mt-6">{t('belief.closing')}</p>
      </div>
    </Section>
  );
}
