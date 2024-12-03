export interface TConfig {
    meta: {
        title: string;
        subtitle: string;
        description: string;
        name: string;
        url: string;
        favicon: string;
        logo: {
            mark: string;
            type: string;
        };
    };
    theme: {
        root: {
            background: string;
            foreground: string;
            card: string;
            cardForeground: string;
            popover: string;
            popoverForeground: string;
            primary: string;
            primaryForeground: string;
            secondary: string;
            secondaryForeground: string;
            muted: string;
            mutedForeground: string;
            accent: string;
            accentForeground: string;
            success: string;
            successForeground: string;
            warning: string;
            warningForeground: string;
            info: string;
            infoForeground: string;
            destructive: string;
            destructiveForeground: string;
            border: string;
            input: string;
            ring: string;
            radius: string;
            gradient: {
                from: { color: string; stop: number };
                via: { color: string; stop: number };
                to: { color: string; stop: number };
                dir: string;
                active: boolean;
            };
        };
        dark: {
            background: string;
            foreground: string;
            card: string;
            cardForeground: string;
            popover: string;
            popoverForeground: string;
            primary: string;
            primaryForeground: string;
            secondary: string;
            secondaryForeground: string;
            muted: string;
            mutedForeground: string;
            accent: string;
            accentForeground: string;
            success: string;
            successForeground: string;
            warning: string;
            warningForeground: string;
            info: string;
            infoForeground: string;
            destructive: string;
            destructiveForeground: string;
            border: string;
            input: string;
            ring: string;
            radius: string;
            gradient: {
                from: { color: string; stop: number };
                via: { color: string; stop: number };
                to: { color: string; stop: number };
                dir: string;
                active: boolean;
            };
        };
    };
    company: {
        name: string;
        email: string;
        phone: string;
        address1: string;
        address2: string;
        city: string;
        province: string;
        country: string;
        postal: string;
    };
    menu: Array<{
        title: string;
        href: string;
        image: string;
        items: Array<{
            title: string;
            href: string;
            image: string;
        }>;
    }>;
    footers: Array<{
        title: string;
        items: Array<{
            title: string;
            href: string;
            image: string;
        }>;
    }>;
    analytic: {
        google: string;
        facebook: string;
        tiktok: string;
    };
    domain: {
        google: string;
        facebook: string;
    };
    social: Array<{
        title: string;
        href: string;
        image: string;
    }>;
    maintenance: {
        isMaintenance: boolean;
        message: string;
    };
}

export const themeConfig: TConfig = {
    meta: {
        title: 'Boby',
        subtitle: 'Meet Boby, Your Calm in the Chaos of the Digital World.',
        description: 'Meet Boby, Your Calm in the Chaos of the Digital World.',
        name: 'Boby',
        url: '/',
        favicon: '/logo.png',
        logo: {
            mark: '/preview.png',
            type: 'image/png',
        },
    },
    theme: {
        root: {
            background: '#ffffff',
            foreground: '#000000',
            card: '#f0f0f0',
            cardForeground: '#333333',
            popover: '#ffffff',
            popoverForeground: '#000000',
            primary: '#007bff',
            primaryForeground: '#ffffff',
            secondary: '#6c757d',
            secondaryForeground: '#ffffff',
            muted: '#e9ecef',
            mutedForeground: '#6c757d',
            accent: '#17a2b8',
            accentForeground: '#ffffff',
            success: '#28a745',
            successForeground: '#ffffff',
            warning: '#ffc107',
            warningForeground: '#212529',
            info: '#17a2b8',
            infoForeground: '#ffffff',
            destructive: '#dc3545',
            destructiveForeground: '#ffffff',
            border: '#dee2e6',
            input: '#ced4da',
            ring: '#007bff',
            radius: '4px',
            gradient: {
                from: { color: '#007bff', stop: 0 },
                via: { color: '#6c757d', stop: 0.5 },
                to: { color: '#28a745', stop: 1 },
                dir: 'to right',
                active: true,
            },
        },
        dark: {
            background: '#343a40',
            foreground: '#ffffff',
            card: '#495057',
            cardForeground: '#ffffff',
            popover: '#343a40',
            popoverForeground: '#ffffff',
            primary: '#007bff',
            primaryForeground: '#ffffff',
            secondary: '#6c757d',
            secondaryForeground: '#ffffff',
            muted: '#6c757d',
            mutedForeground: '#ffffff',
            accent: '#17a2b8',
            accentForeground: '#ffffff',
            success: '#28a745',
            successForeground: '#ffffff',
            warning: '#ffc107',
            warningForeground: '#212529',
            info: '#17a2b8',
            infoForeground: '#ffffff',
            destructive: '#dc3545',
            destructiveForeground: '#ffffff',
            border: '#495057',
            input: '#ced4da',
            ring: '#007bff',
            radius: '4px',
            gradient: {
                from: { color: '#007bff', stop: 0 },
                via: { color: '#6c757d', stop: 0.5 },
                to: { color: '#28a745', stop: 1 },
                dir: 'to right',
                active: true,
            },
        },
    },
    company: {
        name: 'Sample Company',
        email: 'info@example.com',
        phone: '+1234567890',
        address1: '123 Sample Street',
        address2: 'Suite 100',
        city: 'Sample City',
        province: 'Sample Province',
        country: 'Sample Country',
        postal: '12345',
    },
    menu: [
        {
            title: 'Home',
            href: '/home',
            image: '/home.png',
            items: [
                {
                    title: 'Sub Home 1',
                    href: '/home/sub1',
                    image: '/home-sub1.png',
                },
            ],
        },
    ],
    footers: [
        {
            title: 'Footer 1',
            items: [
                {
                    title: 'Footer Link 1',
                    href: '/footer1',
                    image: '/footer1.png',
                },
            ],
        },
    ],
    analytic: {
        google: 'UA-XXXXX-Y',
        facebook: 'FB-XXXXX-Y',
        tiktok: 'TT-XXXXX-Y',
    },
    domain: {
        google: 'google.com',
        facebook: 'facebook.com',
    },
    social: [
        {
            title: 'Facebook',
            href: 'https:/facebook.com/example',
            image: '/facebook.png',
        },
    ],
    maintenance: {
        isMaintenance: false,
        message: 'We are currently under maintenance.',
    },
};
