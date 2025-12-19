import { cn } from '@/lib/utils';

interface SectionGroupProps {
  children: React.ReactNode;
  variant?: 'default' | 'contrast';
  className?: string;
}

/**
 * SectionGroup wraps multiple Section components to create visual grouping.
 *
 * Workshop Authority Light Mode variants:
 * - default: White background (#FFFFFF)
 * - contrast: Warm gray background (#FAFAF8) for visual rhythm
 */
export default function SectionGroup({
  children,
  variant = 'default',
  className,
}: SectionGroupProps) {
  const variantClasses = {
    default: 'bg-white',
    contrast: 'bg-warm-50',
  };

  return <div className={cn('py-4 md:py-6', variantClasses[variant], className)}>{children}</div>;
}
