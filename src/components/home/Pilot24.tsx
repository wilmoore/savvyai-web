'use client';

import { useTranslation } from 'react-i18next';
import { Section } from '@/components/marketing';

export default function Pilot24() {
  const { t } = useTranslation('homepage');
  const items = t('pilot24.items', { returnObjects: true }) as string[];

  return (
    <Section variant="muted">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
        {t('pilot24.title')}
      </h2>
      <div className="space-y-6">
        <p className="text-xl text-muted-foreground">{t('pilot24.intro')}</p>

        <div className="mt-6">
          <p className="text-base text-foreground mb-4">{t('pilot24.subtitle')}</p>
          <ul className="space-y-3">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-muted-foreground">
                <span className="text-primary mt-1.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-base text-muted-foreground mt-8 pt-6 border-t border-border">
          {t('pilot24.safety')}
        </p>
      </div>
    </Section>
  );
}
