import Link from 'next/link';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function CTAButton({
  href,
  children,
  variant = 'primary',
  className,
}: CTAButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white';

  const variantStyles = {
    primary: 'bg-emerald-500 text-white hover:bg-emerald-600',
    secondary:
      'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400',
  };

  return (
    <Link href={href} className={cn(baseStyles, variantStyles[variant], className)}>
      {children}
    </Link>
  );
}
