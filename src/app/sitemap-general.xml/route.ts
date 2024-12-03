import { env } from 'next-runtime-env';

function generateSitemap(locations: string[]) {
    const newSitemaps = locations
        .map(
            (location) => `
        <url>
            <loc>${location}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changeFrequency>daily</changeFrequency>
            <priority>0.7</priority>
        </url>
    `
        )
        .join('');

    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${newSitemaps}
    </urlset>`;
}

export async function GET() {
    const locations = [`${env('NEXT_PUBLIC_FE_URL')}`];
    const xmlResponse = generateSitemap(locations);

    return new Response(xmlResponse, {
        status: 200,
        headers: {
            'Content-Type': 'application/xml',
            'Cache-control': 'public, s-maxage=86400, stale-while-revalidate',
        },
    });
}
