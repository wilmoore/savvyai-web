import { cn } from '@/lib/utils';

interface TwoColumnSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: 'default' | 'contrast';
  ratio?: '50-50' | '60-40' | '40-60';
  reverse?: boolean;
  align?: 'start' | 'center' | 'end';
}

/**
 * TwoColumnSection - Split layout section for content + explanation patterns.
 *
 * Ratios:
 * - 50-50: Equal columns
 * - 60-40: Larger left column
 * - 40-60: Larger right column
 *
 * Responsive: Stacks to single column on mobile
 */
export default function TwoColumnSection({
  children,
  className,
  id,
  variant = 'default',
  ratio = '50-50',
  reverse = false,
  align = 'start',
}: TwoColumnSectionProps) {
  const ratioClasses = {
    '50-50': 'md:grid-cols-2',
    '60-40': 'md:grid-cols-[1.5fr_1fr]',
    '40-60': 'md:grid-cols-[1fr_1.5fr]',
  };

  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
  };

  return (
    <section
      id={id}
      className={cn('py-20 md:py-28', variant === 'contrast' && 'bg-[#0D1117]', className)}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div
          className={cn(
            'grid gap-12 md:gap-16',
            ratioClasses[ratio],
            alignClasses[align],
            reverse && 'md:[direction:rtl] md:[&>*]:direction-ltr'
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
