import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: 'default' | 'contrast' | 'dark' | 'neutral';
  size?: 'default' | 'wide' | 'full';
}

/**
 * Section component for Workshop Authority theme system.
 *
 * Variants:
 * - default: White background (#FFFFFF) - Primary light sections
 * - contrast: Warm gray background (#FAFAF8) - Visual rhythm in light mode
 * - dark: Deep black background (#050505) - Authority sections (Protocol, Security)
 * - neutral: Subtle gray background (#F5F5F5) - Reassurance sections
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
    default: 'bg-white text-gray-900',
    contrast: 'bg-warm-50 text-gray-900',
    dark: 'bg-[#050505] text-white',
    neutral: 'bg-gray-100 text-gray-900',
  };

  return (
    <section id={id} className={cn('py-16 md:py-24', variantClasses[variant], className)}>
      <div className={cn('container mx-auto px-4 md:px-6', sizeClasses[size])}>{children}</div>
    </section>
  );
}
