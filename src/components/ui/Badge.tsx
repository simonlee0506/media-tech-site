import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'success' | 'collectra' | 'fetchera' | 'bam' | 'rescontra';
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
          {
            'bg-primary text-white': variant === 'default',
            'bg-green-100 text-green-800': variant === 'success',
            'bg-collectra/10 text-collectra': variant === 'collectra',
            'bg-fetchera/10 text-fetchera': variant === 'fetchera',
            'bg-bam/10 text-bam': variant === 'bam',
            'bg-resontra/10 text-resontra': variant === 'rescontra',
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;