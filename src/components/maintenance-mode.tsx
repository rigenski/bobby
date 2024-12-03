import { cn } from '@/utils/classname';
import type { TConfig } from '@/constants/config';

interface TMaintenanceModeProps {
    config: TConfig;
}

export default function MaintenanceMode({ config }: TMaintenanceModeProps) {
    return (
        <section className={cn('min-h-screen w-full bg-background')}>
            <div className={cn('max-w-8xl container mx-auto min-h-screen px-4', 'md:px-8')}>
                <div className={cn('flex h-full min-h-screen flex-col items-center justify-center')}>
                    <h1 className={cn('mb-4 text-center text-6xl font-bold text-foreground', 'md:text-[80px]')}>503</h1>
                    <h1 className={cn('mb-2 text-center text-2xl font-bold text-foreground', 'md:mb-4 md:text-4xl')}>Maintenance Mode</h1>
                    <p className={cn('text-center text-base text-foreground', 'md:text-lg')}>
                        {config?.maintenance?.message || 'Kami sedang dalam pemeliharaan. Silakan periksa kembali nanti.'}
                    </p>
                </div>
            </div>
        </section>
    );
}
