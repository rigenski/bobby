import { toast } from 'sonner';

export const copyToClipboard = (value: string, label: string) => {
    navigator.clipboard.writeText(value);
    toast.success(label);
};
