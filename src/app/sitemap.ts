import type { MetadataRoute } from 'next';
import { env } from 'next-runtime-env';

export default function sitemap(): MetadataRoute.Sitemap {
    const locations = [`${env('NEXT_PUBLIC_FE_URL')}/sitemap-general.xml`];

    return locations.map((location) => ({
        url: location,
        lastModified: new Date().toISOString(),
        changeFrequency: 'daily',
        priority: 0.7,
    }));
}
