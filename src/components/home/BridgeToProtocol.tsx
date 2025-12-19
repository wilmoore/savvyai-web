'use client';

import { useTranslation } from 'react-i18next';
import { Section, CTAButton } from '@/components/marketing';

export default function BridgeToProtocol() {
  const { t } = useTranslation('homepage');

  return (
    <Section>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">
        {t('bridgeToProtocol.title')}
      </h2>
      <div className="space-y-6">
        <p className="text-xl text-muted-foreground">{t('bridgeToProtocol.content.line1')}</p>
        <p className="text-base text-foreground">{t('bridgeToProtocol.content.line2')}</p>
        <p className="text-base text-muted-foreground">{t('bridgeToProtocol.content.line3')}</p>
      </div>
      <div className="mt-10">
        <CTAButton href="/protocol" variant="secondary">
          {t('bridgeToProtocol.cta')}
        </CTAButton>
      </div>
    </Section>
  );
}
