'use client';

import { useTranslation } from 'react-i18next';
import { Section } from '@/components/marketing';

export default function Problem() {
  const { t } = useTranslation('homepage');
  const items = t('problem.list.items', { returnObjects: true }) as string[];

  return (
    <Section variant="muted">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
        {t('problem.title')}
      </h2>
      <div className="space-y-6">
        <div className="space-y-1">
          <p className="text-lg text-foreground">{t('problem.intro.line1')}</p>
          <p className="text-lg text-foreground">{t('problem.intro.line2')}</p>
        </div>

        <div className="mt-8">
          <p className="text-base font-medium text-foreground mb-4">{t('problem.list.title')}</p>
          <ul className="space-y-3">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-muted-foreground">
                <span className="text-primary mt-1.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 space-y-1">
          <p className="text-lg text-foreground">{t('problem.conclusion.line1')}</p>
          <p className="text-lg font-medium text-foreground">{t('problem.conclusion.line2')}</p>
        </div>
      </div>
    </Section>
  );
}
