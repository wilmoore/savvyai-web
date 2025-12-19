import { cn } from '@/lib/utils';

interface SectionGroupProps {
  children: React.ReactNode;
  variant?: 'default' | 'muted';
  className?: string;
}

/**
 * SectionGroup wraps multiple Section components to create visual grouping.
 * Responsible for:
 * - Background color alternation
 * - Group-level vertical padding
 * - Visual rhythm between content blocks
 *
 * Individual Section components remain responsible for max-width and internal spacing.
 */
export default function SectionGroup({
  children,
  variant = 'default',
  className,
}: SectionGroupProps) {
  return (
    <div className={cn('py-4 md:py-6', variant === 'muted' && 'bg-muted/50', className)}>
      {children}
    </div>
  );
}
