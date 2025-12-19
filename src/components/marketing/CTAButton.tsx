import Link from 'next/link';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'secondary-ink';
  className?: string;
}

/**
 * CTAButton - Editorial Sharp-Edged Buttons
 *
 * Variants:
 * - primary: Emerald background, white text (works on both ink/paper)
 * - secondary: White background with black border (for paper sections)
 * - secondary-ink: Transparent with white border (for ink sections)
 */
export default function CTAButton({
  href,
  children,
  variant = 'primary',
  className,
}: CTAButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2';

  const variantStyles = {
    primary: 'bg-emerald-500 text-white hover:bg-emerald-600 focus-visible:ring-offset-transparent',
    secondary:
      'border border-black/20 bg-white text-ink hover:bg-black/5 hover:border-black/30 focus-visible:ring-offset-white',
    'secondary-ink':
      'border border-white/20 bg-transparent text-white hover:bg-white/5 hover:border-white/30 focus-visible:ring-offset-ink',
  };

  return (
    <Link href={href} className={cn(baseStyles, variantStyles[variant], className)}>
      {children}
    </Link>
  );
}
