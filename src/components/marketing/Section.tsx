import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: 'default' | 'muted';
}

export default function Section({ children, className, id, variant = 'default' }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('py-16 md:py-24', variant === 'muted' && 'bg-muted/50', className)}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">{children}</div>
    </section>
  );
}
