'use client';

import { useParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { Header, Footer, Section } from '@/components/marketing';
import { FeedbackForm } from '@/components/workshops';
import { isValidWorkshop, getWorkshop } from '@/lib/workshop-config';
import type { WorkshopFeedbackTranslations, WorkshopDownload } from '@/types/workshop';

/**
 * Workshop Feedback Page
 *
 * Accessed via QR code after workshop completion.
 * Collects feedback and provides access to workshop downloads.
 *
 * Route: /workshops/{workshop-slug}/feedback
 */
export default function WorkshopFeedbackPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { t } = useTranslation('workshops');

  // Validate workshop exists and is active
  if (!slug || !isValidWorkshop(slug)) {
    return (
      <div className="min-h-screen">
        <Header />
        <main>
          <Section variant="paper" size="wide" className="pt-32 pb-16 md:pt-40 md:pb-24">
            <div className="min-h-[50vh] flex items-center justify-center">
              <p className="text-lg text-black/60">{t('common.feedback.notFound')}</p>
            </div>
          </Section>
        </main>
        <Footer />
      </div>
    );
  }

  const workshop = getWorkshop(slug);

  // Get workshop-specific translations
  // Map slug to translation key (e.g., 'ai-literate' -> 'aiLiterate')
  const translationKey = slug.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());

  const feedback = t(`${translationKey}.feedback`, { returnObjects: true }) as
    | WorkshopFeedbackTranslations
    | undefined;

  const downloads = t(`${translationKey}.downloads`, { returnObjects: true }) as
    | WorkshopDownload[]
    | undefined;

  // Fallback if translations are missing
  if (!feedback || !downloads) {
    return (
      <div className="min-h-screen">
        <Header />
        <main>
          <Section variant="paper" size="wide" className="pt-32 pb-16 md:pt-40 md:pb-24">
            <div className="min-h-[50vh] flex items-center justify-center">
              <p className="text-lg text-black/60">{t('common.feedback.notFound')}</p>
            </div>
          </Section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <main>
        <Section variant="paper" size="wide" className="pt-24 pb-16 md:pt-32 md:pb-24">
          <FeedbackForm workshopSlug={slug} translations={feedback} downloads={downloads} />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
