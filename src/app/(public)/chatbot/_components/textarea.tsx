import { cn } from '@/utils/classname';
import * as React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
    return <textarea className={cn('flex h-[57px] w-full rounded-md bg-transparent focus:outline-none', className)} ref={ref} {...props} />;
});
Textarea.displayName = 'Textarea';

export { Textarea };
