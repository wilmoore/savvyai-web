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
    'inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2';

  const variantStyles = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'border border-border bg-background text-foreground hover:bg-muted',
  };

  return (
    <Link href={href} className={cn(baseStyles, variantStyles[variant], className)}>
      {children}
    </Link>
  );
}
