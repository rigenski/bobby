import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/classname';

const badgeVariants = cva(
    '!text-xxs inline-flex items-center rounded-full border px-2.5 py-0  font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
    {
        variants: {
            variant: {
                default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
                secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
                outline: 'text-foreground',
                success: 'border-success bg-success/20 text-success hover:bg-success/50',
                warning: 'border-warning bg-warning/20 text-warning hover:bg-warning/50',
                info: 'border-info bg-info/20 text-info hover:bg-info/50',
                destructive: 'border-destructive bg-destructive/20 text-destructive hover:bg-destructive/50',

                member: 'border-sky-500 bg-sky-500/20 text-sky-900 hover:bg-sky-400/20 dark:bg-sky-400/10 dark:text-sky-400',
                silver: 'border-white/60 bg-white/50 hover:bg-white/80',
                gold: 'border-yellow-500 bg-yellow-500/20 text-yellow-900 hover:bg-yellow-400/20 dark:bg-yellow-400/10 dark:text-yellow-500',
                vip: 'border-purple-500 bg-purple-500/20 text-purple-900 hover:bg-purple-400/20 dark:bg-purple-400/10 dark:text-purple-400',
            },
            size: {
                icon: 'p-1',
            },
            shape: {
                pill: 'rounded-full',
                square: 'rounded-md',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, shape, ...props }: BadgeProps) {
    return <div className={cn(badgeVariants({ variant, size, shape }), className)} {...props} />;
}

export { Badge, badgeVariants };
