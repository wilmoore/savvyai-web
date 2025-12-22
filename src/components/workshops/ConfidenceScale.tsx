'use client';

import { cn } from '@/lib/utils';

interface ConfidenceScaleProps {
  value: number | null;
  onChange: (value: number) => void;
  disabled?: boolean;
}

const SCALE_VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;

/**
 * ConfidenceScale Component
 *
 * Horizontal row of numbered buttons (1-10) for confidence rating.
 * Design: discrete, intentional choice with clear selected state.
 */
export function ConfidenceScale({ value, onChange, disabled = false }: ConfidenceScaleProps) {
  return (
    <div
      className="flex flex-wrap justify-center gap-2 sm:gap-3"
      role="radiogroup"
      aria-label="Confidence level from 1 to 10"
    >
      {SCALE_VALUES.map((num) => {
        const isSelected = value === num;
        return (
          <button
            key={num}
            type="button"
            role="radio"
            aria-checked={isSelected}
            disabled={disabled}
            onClick={() => onChange(num)}
            className={cn(
              'w-10 h-10 sm:w-12 sm:h-12 rounded-md text-sm sm:text-base font-medium',
              'transition-colors duration-150',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2',
              'disabled:cursor-not-allowed disabled:opacity-50',
              isSelected
                ? 'bg-emerald-500 text-white border border-emerald-600'
                : 'bg-white border border-black/20 text-black/70 hover:border-black/40 hover:text-black'
            )}
          >
            {num}
          </button>
        );
      })}
    </div>
  );
}
