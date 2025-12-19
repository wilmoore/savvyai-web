import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: 'default' | 'contrast';
  size?: 'default' | 'wide' | 'full';
}

/**
 * Section component for Workshop Authority Light Mode.
 *
 * Variants:
 * - default: White background (#FFFFFF)
 * - contrast: Warm gray background (#FAFAF8)
 *
 * Sizes:
 * - default: max-w-3xl for reading-optimized content
 * - wide: max-w-5xl for two-column layouts
 * - full: max-w-7xl for full-bleed content
 */
export default function Section({
  children,
  className,
  id,
  variant = 'default',
  size = 'default',
}: SectionProps) {
  const sizeClasses = {
    default: 'max-w-3xl',
    wide: 'max-w-5xl',
    full: 'max-w-7xl',
  };

  const variantClasses = {
    default: 'bg-white',
    contrast: 'bg-warm-50',
  };

  return (
    <section id={id} className={cn('py-16 md:py-24', variantClasses[variant], className)}>
      <div className={cn('container mx-auto px-4 md:px-6', sizeClasses[size])}>{children}</div>
    </section>
  );
}
