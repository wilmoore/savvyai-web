'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation('errors');

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-foreground">{t('notFound.code')}</h1>
        <p className="text-xl text-muted-foreground mb-4">{t('notFound.message')}</p>
        <Link href="/" className="text-[#2563EB] hover:text-[#3B82F6] underline">
          {t('notFound.link')}
        </Link>
      </div>
    </div>
  );
}
