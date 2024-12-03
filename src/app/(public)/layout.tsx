import type { TLayoutProps } from '@/types/layout';

export default async function Layout({ children }: TLayoutProps) {
    return (
        <>
            <main>{children}</main>
        </>
    );
}
