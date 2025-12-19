'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section } from '@/components/marketing';

export default function BridgeToProtocol() {
  const { t } = useTranslation('homepage');

  return (
    <Section size="wide" className="bg-white border-y border-gray-100">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
            {t('bridgeToProtocol.title')}
          </h2>
          <div className="space-y-3">
            <p className="text-lg text-gray-600">{t('bridgeToProtocol.content.line1')}</p>
            <p className="text-base text-gray-700">{t('bridgeToProtocol.content.line2')}</p>
            <p className="text-base text-gray-500">{t('bridgeToProtocol.content.line3')}</p>
          </div>
        </div>

        <Link
          href="/protocol"
          className="inline-flex items-center gap-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 font-medium px-6 py-3 rounded-lg transition-colors group shrink-0"
        >
          {t('bridgeToProtocol.cta')}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </Section>
  );
}
