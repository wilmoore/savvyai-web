import { cn } from '@/lib/utils';

interface SectionDarkProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: 'default' | 'contrast';
  size?: 'default' | 'wide' | 'full';
}

/**
 * SectionDark - Dark-themed section wrapper for Executive Dark Mode.
 *
 * Variants:
 * - default: Primary dark background (#050505)
 * - contrast: Secondary dark background (#0D1117) for visual rhythm
 *
 * Sizes:
 * - default: max-w-3xl for reading-optimized content
 * - wide: max-w-5xl for two-column layouts
 * - full: max-w-7xl for full-bleed content
 */
export default function SectionDark({
  children,
  className,
  id,
  variant = 'default',
  size = 'default',
}: SectionDarkProps) {
  const sizeClasses = {
    default: 'max-w-3xl',
    wide: 'max-w-5xl',
    full: 'max-w-7xl',
  };

  return (
    <section
      id={id}
      className={cn('py-20 md:py-28', variant === 'contrast' && 'bg-[#0D1117]', className)}
    >
      <div className={cn('container mx-auto px-4 md:px-6', sizeClasses[size])}>{children}</div>
    </section>
  );
}
