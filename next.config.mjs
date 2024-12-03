/** @type {import('next').NextConfig} */
const config = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*',
                port: '',
                pathname: '**',
            },
        ],
    },
    rewrites: async () => {
        return [
            {
                source: '/robots.txt',
                destination: '/api/robots',
            },
        ];
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default config;
