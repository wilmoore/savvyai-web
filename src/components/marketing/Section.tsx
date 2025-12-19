import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: 'default' | 'muted';
  size?: 'default' | 'wide';
}

export default function Section({
  children,
  className,
  id,
  variant = 'default',
  size = 'default',
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn('py-20 md:py-28', variant === 'muted' && 'bg-muted/50', className)}
    >
      <div
        className={cn(
          'container mx-auto px-4 md:px-6',
          size === 'default' ? 'max-w-3xl' : 'max-w-4xl'
        )}
      >
        {children}
      </div>
    </section>
  );
}
