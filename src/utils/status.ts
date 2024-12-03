import type { BadgeProps } from '@/components/ui/badge';

import { Check, FileQuestion, X, type LucideIcon } from 'lucide-react';

interface TReturn {
    title: string;
    variant: BadgeProps['variant'];
    icon: LucideIcon;
}

export function getStatus<T>(status: T): TReturn {
    switch (status) {
        case 'ACTIVE':
            return {
                variant: 'success',
                title: 'Aktif',
                icon: Check,
            };
        case 'INACTIVE':
            return {
                variant: 'warning',
                title: 'Tidak Aktif',
                icon: X,
            };

        default:
            return {
                variant: 'warning',
                title: 'Tidak Diketahui',
                icon: FileQuestion,
            };
    }
}
