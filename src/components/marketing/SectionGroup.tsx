import { cn } from '@/lib/utils';

interface SectionGroupProps {
  children: React.ReactNode;
  variant?: 'default' | 'contrast' | 'dark' | 'neutral';
  className?: string;
}

/**
 * SectionGroup wraps multiple Section components to create visual grouping.
 *
 * Workshop Authority theme variants:
 * - default: White background (#FFFFFF)
 * - contrast: Warm gray background (#FAFAF8) for visual rhythm
 * - dark: Deep black background (#050505) for authority sections
 * - neutral: Subtle gray background (#F5F5F5) for reassurance
 */
export default function SectionGroup({
  children,
  variant = 'default',
  className,
}: SectionGroupProps) {
  const variantClasses = {
    default: 'bg-white',
    contrast: 'bg-warm-50',
    dark: 'bg-[#050505]',
    neutral: 'bg-gray-100',
  };

  return <div className={cn('py-4 md:py-6', variantClasses[variant], className)}>{children}</div>;
}
