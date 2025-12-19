import { cn } from '@/lib/utils';

interface SectionGroupProps {
  children: React.ReactNode;
  variant?: 'default' | 'contrast';
  className?: string;
}

/**
 * SectionGroup wraps multiple Section components to create visual grouping.
 *
 * Executive Dark Mode variants:
 * - default: Primary dark background (#050505)
 * - contrast: Secondary dark background (#0D1117) for visual rhythm
 */
export default function SectionGroup({
  children,
  variant = 'default',
  className,
}: SectionGroupProps) {
  return (
    <div className={cn('py-4 md:py-6', variant === 'contrast' && 'bg-[#0D1117]', className)}>
      {children}
    </div>
  );
}
