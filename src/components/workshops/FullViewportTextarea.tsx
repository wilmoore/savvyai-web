'use client';

import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

interface FullViewportTextareaProps {
  question: string;
  value: string;
  onChange: (value: string) => void;
  onContinue: () => void;
  onBack: () => void;
  showBack?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
}

/**
 * FullViewportTextarea Component
 *
 * Full-viewport container with auto-expanding textarea.
 * Designed for thoughtful, focused responses.
 */
export function FullViewportTextarea({
  question,
  value,
  onChange,
  onContinue,
  onBack,
  showBack = true,
  disabled = false,
  autoFocus = true,
}: FullViewportTextareaProps) {
  const { t } = useTranslation('workshops');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea based on content
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.max(textarea.scrollHeight, 120)}px`;
    }
  }, [value]);

  // Auto-focus on mount
  useEffect(() => {
    if (autoFocus && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [autoFocus]);

  const canContinue = value.trim().length > 0;

  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col justify-center px-4 py-12">
      <div className="max-w-2xl mx-auto w-full">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tighter leading-[1.1] text-ink mb-8">
          {question}
        </h2>

        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          placeholder=""
          className={cn(
            'w-full min-h-[120px] p-4 text-lg sm:text-xl',
            'bg-white border border-black/20 rounded-md',
            'resize-none overflow-hidden',
            'placeholder:text-black/30',
            'focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500',
            'disabled:cursor-not-allowed disabled:opacity-50'
          )}
          rows={4}
        />

        <div className="flex justify-between mt-8">
          {showBack ? (
            <button
              type="button"
              onClick={onBack}
              disabled={disabled}
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
          ) : (
            <div />
          )}

          <button
            type="button"
            onClick={onContinue}
            disabled={disabled || !canContinue}
            className={cn(
              'px-6 py-3 text-sm font-medium rounded-md',
              'transition-colors duration-150',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2',
              'disabled:cursor-not-allowed disabled:opacity-50',
              canContinue
                ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                : 'bg-black/10 text-black/40'
            )}
          >
            {t('common.feedback.continue')}
          </button>
        </div>
      </div>
    </div>
  );
}
