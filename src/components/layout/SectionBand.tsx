import { cn } from '@/lib/utils';

interface SectionBandProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'white' | 'warm';
  size?: 'default' | 'wide' | 'full';
  id?: string;
}

/**
 * SectionBand - Full-width section band for Workshop Authority Grammar.
 *
 * Replaces SectionGroup as the primary layout primitive.
 * Each band represents a distinct conceptual unit with clear visual boundaries.
 *
 * Variants:
 * - white: Pure white background (#FFFFFF)
 * - warm: Warm gray background (#FAFAF8) for visual rhythm
 *
 * Sizes:
 * - default: max-w-3xl (prose-friendly)
 * - wide: max-w-5xl (two-column layouts)
 * - full: max-w-7xl (full-width content)
 */
export default function SectionBand({
  children,
  className,
  variant = 'white',
  size = 'default',
  id,
}: SectionBandProps) {
  const variantClasses = {
    white: 'bg-white',
    warm: 'bg-warm-50',
  };

  const sizeClasses = {
    default: 'max-w-3xl',
    wide: 'max-w-5xl',
    full: 'max-w-7xl',
  };

  return (
    <section id={id} className={cn('py-16 md:py-24', variantClasses[variant], className)}>
      <div className={cn('mx-auto px-6 md:px-8', sizeClasses[size])}>{children}</div>
    </section>
  );
}
