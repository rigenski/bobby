'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const links = [
    {
        label: 'Proof of Concept',
        href: '/poc',
    },
    {
        label: 'Boby Activity',
        href: '/activity-log',
    },
];

export default function Header() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`fixed left-0 top-0 z-50 w-full ${isScrolled ? 'bg-[#B1D3D2]/50' : ''}`}>
            <div className="container mx-auto size-full max-w-6xl px-4">
                <div className="flex items-center justify-between py-8">
                    <div className="flex items-center gap-8">
                        <Link href="/" className="mb-2">
                            <Image src="/assets/homepage/header/logo.png" alt="" width={480} height={480} className="h-8 w-auto" />
                        </Link>
                        <div className="flex items-center gap-4">
                            {links.map((link) => (
                                <Link
                                    href={link.href}
                                    className={`${link.href === pathname ? 'font-bold text-black' : 'text-black'}`}
                                    key={link.href}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Link
                                href={'https://x.com/Quoinquix'}
                                className="flex items-center gap-2 rounded-lg border-2 border-black bg-white p-2 font-normal text-black [box-shadow:2px_2px_0px_#000000] hover:animate-shake"
                            >
                                <Image src="/assets/homepage/header/twitter.png" alt="" width={480} height={480} className="size-5" />
                            </Link>
                            <Link href={'https://x.com/Quoinquix'} className="absolute -bottom-2 -right-2">
                                <Image src="/assets/homepage/header/twitter-1.png" alt="" width={480} height={480} className="size-5" />
                            </Link>
                        </div>
                        <div className="relative">
                            <Link
                                href={'#TWITTER_BOT_LINK'}
                                className="flex items-center gap-2 rounded-lg border-2 border-black bg-white p-2 font-normal text-black [box-shadow:2px_2px_0px_#000000] hover:animate-shake"
                            >
                                <Image src="/assets/homepage/header/twitter.png" alt="" width={480} height={480} className="size-5" />
                            </Link>
                            <Link href={'#TWITTER_BOT_LINK'} className="absolute -bottom-2 -right-2">
                                <Image src="/assets/homepage/header/twitter-2.png" alt="" width={480} height={480} className="size-5" />
                            </Link>
                        </div>
                        <Link
                            href={'#PUMP_FUN_LINK'}
                            className="flex items-center gap-2 rounded-lg border-2 border-black bg-white px-4 py-2 font-normal text-black [box-shadow:2px_2px_0px_#000000] hover:animate-shake"
                        >
                            <Image src="/assets/homepage/header/char.png" alt="" width={480} height={480} className="size-5" />
                            <span>BUY $BOBY</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
