import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'bordered';
  hover?: boolean;
  as?: 'div' | 'article' | 'li';
}

/**
 * Card component for Workshop Authority light mode.
 *
 * Cards should be used sparingly - only for:
 * - Listing outputs or grouped items
 * - Quoted callouts
 * - Highlighted outcomes
 *
 * NOT as the dominant layout structure.
 * Use SectionBand for full-width sections instead.
 *
 * Variants:
 * - default: Subtle border with light shadow
 * - elevated: More prominent shadow
 * - bordered: Emphasized border treatment
 */
export default function GlassCard({
  children,
  className,
  variant = 'default',
  hover = false,
  as: Component = 'div',
}: GlassCardProps) {
  const variantClasses = {
    default: 'bg-white border border-gray-200 shadow-sm',
    elevated: 'bg-white border border-gray-200 shadow-md',
    bordered: 'bg-white border-2 border-gray-300',
  };

  const hoverClasses = hover
    ? 'transition-all duration-200 hover:shadow-md hover:border-gray-300'
    : '';

  return (
    <Component
      className={cn('rounded-lg p-6 md:p-8', variantClasses[variant], hoverClasses, className)}
    >
      {children}
    </Component>
  );
}
