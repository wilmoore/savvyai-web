'use client';

import { useTranslation } from 'react-i18next';
import { Section } from '@/components/marketing';

export default function Audience() {
  const { t } = useTranslation('homepage');
  const forItems = t('audience.forItems', { returnObjects: true }) as string[];
  const notForItems = t('audience.notForItems', {
    returnObjects: true,
  }) as string[];

  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
            {t('audience.forTitle')}
          </h2>
          <ul className="space-y-4">
            {forItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-foreground">
                <span className="text-primary mt-0.5 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
            {t('audience.notForTitle')}
          </h2>
          <ul className="space-y-4">
            {notForItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-muted-foreground">
                <span className="text-muted-foreground mt-0.5 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
