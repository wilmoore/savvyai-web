import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'bordered';
  hover?: boolean;
  as?: 'div' | 'article' | 'li';
}

/**
 * GlassCard - Premium glassmorphism card component.
 *
 * Variants:
 * - default: Subtle glass effect (bg-white/5)
 * - elevated: More prominent with shadow
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
    default: 'bg-white/5 backdrop-blur-xl border border-white/10',
    elevated:
      'bg-white/[0.08] backdrop-blur-xl border border-white/[0.15] shadow-[0_8px_32px_rgba(0,0,0,0.3)]',
    bordered: 'bg-white/5 backdrop-blur-xl border-2 border-white/20',
  };

  const hoverClasses = hover
    ? 'transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 hover:shadow-lg'
    : '';

  return (
    <Component
      className={cn('rounded-xl p-6 md:p-8', variantClasses[variant], hoverClasses, className)}
    >
      {children}
    </Component>
  );
}
