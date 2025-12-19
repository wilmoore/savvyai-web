'use client';

import { useTranslation } from 'react-i18next';
import { Section } from '@/components/marketing';

export default function Safety() {
  const { t } = useTranslation('homepage');
  const items = t('safety.items', { returnObjects: true }) as string[];

  return (
    <Section>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">
        {t('safety.title')}
      </h2>
      <div className="space-y-6">
        <p className="text-xl text-muted-foreground">{t('safety.intro')}</p>

        <ul className="space-y-4 mt-6">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-muted-foreground">
              <span className="text-primary mt-1.5">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-base text-foreground mt-8">{t('safety.closing')}</p>
      </div>
    </Section>
  );
}
