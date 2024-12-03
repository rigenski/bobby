import type { MetadataRoute } from 'next';
import { env } from 'next-runtime-env';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: [`${env('NEXT_PUBLIC_FE_URL')}/sitemap.xml`, `${env('NEXT_PUBLIC_FE_URL')}/sitemap-general.xml`],
    };
}
