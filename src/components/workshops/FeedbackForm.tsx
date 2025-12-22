'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { ConfidenceScale } from './ConfidenceScale';
import { FullViewportTextarea } from './FullViewportTextarea';
import { WorkshopDownloads } from './WorkshopDownloads';
import type {
  WorkshopFeedback,
  WorkshopFeedbackTranslations,
  WorkshopDownload,
} from '@/types/workshop';

type FormStep = 'confidence' | 'valuable' | 'plan' | 'email' | 'submitted';

interface FeedbackFormProps {
  workshopSlug: string;
  translations: WorkshopFeedbackTranslations;
  downloads: WorkshopDownload[];
}

/**
 * FeedbackForm Component
 *
 * Hybrid sequential flow for workshop feedback.
 * - Inline steps: confidence scale, email
 * - Full-viewport steps: valuable part, plan to build
 */
export function FeedbackForm({ workshopSlug, translations, downloads }: FeedbackFormProps) {
  const { t } = useTranslation('workshops');

  // Form state
  const [step, setStep] = useState<FormStep>('confidence');
  const [confidence, setConfidence] = useState<number | null>(null);
  const [valuablePart, setValuablePart] = useState('');
  const [planToBuild, setPlanToBuild] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleConfidenceSelect = (value: number) => {
    setConfidence(value);
    // Auto-advance after selection
    setTimeout(() => setStep('valuable'), 150);
  };

  const handleSubmit = async () => {
    if (confidence === null || !valuablePart.trim() || !planToBuild.trim()) {
      return;
    }

    setIsSubmitting(true);
    setError(null);

    const feedback: WorkshopFeedback = {
      workshopSlug,
      confidence,
      valuablePart: valuablePart.trim(),
      planToBuild: planToBuild.trim(),
      email: email.trim() || undefined,
      submittedAt: new Date().toISOString(),
    };

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(feedback),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setStep('submitted');
    } catch {
      setError(t('common.feedback.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  // Render submitted state
  if (step === 'submitted') {
    return (
      <div className="min-h-[calc(100vh-8rem)] flex flex-col justify-center px-4 py-12">
        <div className="text-center mb-12">
          <p className="text-lg text-black/70">{translations.success}</p>
        </div>
        <WorkshopDownloads downloads={downloads} label={translations.downloadsLabel} />
      </div>
    );
  }

  // Render confidence step (inline)
  if (step === 'confidence') {
    return (
      <div className="min-h-[calc(100vh-8rem)] flex flex-col justify-center px-4 py-12">
        <div className="max-w-xl mx-auto w-full text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tighter leading-[1.1] text-ink mb-10">
            {translations.confidenceQuestion}
          </h2>
          <ConfidenceScale
            value={confidence}
            onChange={handleConfidenceSelect}
            disabled={isSubmitting}
          />
        </div>
      </div>
    );
  }

  // Render valuable part step (full viewport)
  if (step === 'valuable') {
    return (
      <FullViewportTextarea
        question={translations.valuableQuestion}
        value={valuablePart}
        onChange={setValuablePart}
        onContinue={() => setStep('plan')}
        onBack={() => setStep('confidence')}
        disabled={isSubmitting}
      />
    );
  }

  // Render plan step (full viewport)
  if (step === 'plan') {
    return (
      <FullViewportTextarea
        question={translations.planQuestion}
        value={planToBuild}
        onChange={setPlanToBuild}
        onContinue={() => setStep('email')}
        onBack={() => setStep('valuable')}
        disabled={isSubmitting}
      />
    );
  }

  // Render email step (inline)
  if (step === 'email') {
    return (
      <div className="min-h-[calc(100vh-8rem)] flex flex-col justify-center px-4 py-12">
        <div className="max-w-md mx-auto w-full">
          <label htmlFor="email" className="block text-sm font-medium text-black/70 mb-2">
            {translations.emailLabel}
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
            placeholder=""
            className={cn(
              'w-full p-4 text-base',
              'bg-white border border-black/20 rounded-md',
              'placeholder:text-black/30',
              'focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500',
              'disabled:cursor-not-allowed disabled:opacity-50'
            )}
          />
          <p className="mt-2 text-sm text-black/50">{translations.emailHelper}</p>

          {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={() => setStep('plan')}
              disabled={isSubmitting}
              className={cn(
                'px-6 py-3 text-sm font-medium rounded-md',
                'text-black/60 hover:text-black',
                'transition-colors duration-150',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500',
                'disabled:cursor-not-allowed disabled:opacity-50'
              )}
            >
              {t('common.feedback.back')}
            </button>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={cn(
                'px-6 py-3 text-sm font-medium rounded-md',
                'bg-emerald-500 text-white hover:bg-emerald-600',
                'transition-colors duration-150',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2',
                'disabled:cursor-not-allowed disabled:opacity-50'
              )}
            >
              {isSubmitting ? 'Submitting...' : translations.submit}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
