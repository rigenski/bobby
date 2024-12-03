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
};

export default config;
