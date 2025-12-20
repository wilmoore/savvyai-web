'use client';

import { cn } from '@/lib/utils';

interface SectionIDProps {
  /** Two-digit section number (e.g., "01", "07") */
  number: string;
  /** Section name in uppercase (e.g., "TRUST", "PROTOCOL") */
  name: string;
  /** Theme variant - determines text color */
  variant?: 'ink' | 'paper';
  /** Additional CSS classes */
  className?: string;
}

/**
 * SectionID - Metadata tag for editorial section identification
 *
 * Displays the section number and name in the format: [ XX / NAME ]
 * Positioned at the top-left of the section container, flush with headings.
 *
 * @example
 * <SectionID number="01" name="TRUST" variant="ink" />
 * // Renders: [ 01 / TRUST ] in white/30 opacity
 */
export default function SectionID({ number, name, variant = 'paper', className }: SectionIDProps) {
  return (
    <div className={cn('mb-6', className)}>
      <span
        className={cn(
          'text-xs font-mono uppercase tracking-widest',
          variant === 'ink' ? 'text-white/30' : 'text-black/30'
        )}
      >
        [ {number} / {name} ]
      </span>
    </div>
  );
}
