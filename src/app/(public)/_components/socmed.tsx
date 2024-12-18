import Image from 'next/image';
import Link from 'next/link';

export default function Socmed() {
    return (
        <div className="absolute z-40 -mt-16 w-full">
            <div className="bg-[url('/assets/homepage/section-2/marquee.png')] bg-cover pb-6 pt-10">
                <div className="flex justify-center gap-8">
                    <p
                        className="mb-4 text-center text-lg font-bold text-white [text-shadow:2px_2px_0px_#2D384D]"
                        style={{
                            WebkitTextStroke: '0.5px #2D384D',
                        }}
                    >
                        Now, Boby is here in your world, ready to help you find
                        <br /> balance and rediscover the joy of simplicity. World.
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Link
                                href={'https://x.com/Quoinquix'}
                                className="flex items-center gap-2 rounded-lg border-2 border-black bg-white p-2 font-normal text-black [box-shadow:2px_2px_0px_#000000] hover:animate-shake"
                            >
                                <Image src="/assets/homepage/header/twitter.png" alt="" width={480} height={480} className="size-5" />
                            </Link>
                            <Link href={'https://x.com/Quoinquix'} className="absolute -bottom-2 -right-2">
                                <Image src="/assets/homepage/header/twitter-1.png" alt="" width={480} height={480} className="size-5 rounded-full border-2 border-black" />
                            </Link>
                        </div>
                        <div className="relative">
                            <Link
                                href={'https://x.com/bobyinteractive'}
                                className="flex items-center gap-2 rounded-lg border-2 border-black bg-white p-2 font-normal text-black [box-shadow:2px_2px_0px_#000000] hover:animate-shake"
                            >
                                <Image src="/assets/homepage/header/twitter.png" alt="" width={480} height={480} className="size-5" />
                            </Link>
                            <Link href={'https://x.com/bobyinteractive'} className="absolute -bottom-2 -right-2">
                                <Image src="/assets/homepage/header/twitter-2.png" alt="" width={480} height={480} className="size-5" />
                            </Link>
                        </div>
                        <Link
                            href={'https://pump.fun/FxTWzQSwWMXndEXzFMyxe6cDsgNrSq16X3Exmj2ypump'}
                            className="flex items-center gap-2 rounded-lg border-2 border-black bg-white px-4 py-2 font-normal text-black [box-shadow:2px_2px_0px_#000000] hover:animate-shake"
                        >
                            <Image src="/assets/homepage/header/char.png" alt="" width={480} height={480} className="size-5" />
                            <span>BUY $BOBY</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
