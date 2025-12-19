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
    'inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]';

  const variantStyles = {
    primary: 'bg-emerald-500 text-white hover:bg-emerald-600',
    secondary:
      'border border-white/20 bg-transparent text-white hover:bg-white/5 hover:border-white/30',
  };

  return (
    <Link href={href} className={cn(baseStyles, variantStyles[variant], className)}>
      {children}
    </Link>
  );
}
