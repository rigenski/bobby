import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <section className="-mt-24 w-full bg-[url('/assets/homepage/footer/bg.png')] bg-cover bg-top">
        <div className="container mx-auto size-full max-w-6xl px-4 pt-20">
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col items-start gap-2">
              <Link href={'/'}>
                <Image src="/assets/homepage/footer/logo.png" alt="" width={480} height={480} className="h-12 w-auto" />
              </Link>
              <p
                className="max-w-[400px] text-base font-bold text-white [text-shadow:2px_2px_0px_#030706]"
                style={{
                  WebkitTextStroke: '0.5px #030706',
                }}
              >
                Copyright © 2024 All rights reserved
              </p>
            </div>
            <div>
              <Image src="/assets/homepage/footer/profile.png" alt="" width={480} height={480} className="h-64 w-auto" />
            </div>
            <div className="flex flex-col items-start gap-2">
              <p
                className="max-w-[400px] text-base font-bold text-white [text-shadow:2px_2px_0px_#030706]"
                style={{
                  WebkitTextStroke: '0.5px #030706',
                }}
              >
                Every great mind starts with a single<br /> thought. Begin your journey with Boby  today!
              </p>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Link
                    href={'https://x.com/Quoinquix'}
                    className="flex items-center gap-2 rounded-lg border-2 border-black bg-white p-2 font-normal text-black [box-shadow:2px_2px_0px_#000000] hover:animate-shake"
                  >
                    <Image src="/assets/homepage/footer/twitter.png" alt="" width={480} height={480} className="size-5 " />
                  </Link>
                  <Link href={'https://x.com/Quoinquix'} className="absolute -bottom-2 -right-2">
                    <Image src="/assets/homepage/footer/twitter-1.png" alt="" width={480} height={480} className="size-5 rounded-full border-2 border-black" />
                  </Link>
                </div>
                <div className="relative">
                  <Link
                    href={'https://x.com/bobyinteractive'}
                    className="flex items-center gap-2 rounded-lg border-2 border-black bg-white p-2 font-normal text-black [box-shadow:2px_2px_0px_#000000] hover:animate-shake"
                  >
                    <Image src="/assets/homepage/footer/twitter.png" alt="" width={480} height={480} className="size-5" />
                  </Link>
                  <Link href={'https://x.com/bobyinteractive'} className="absolute -bottom-2 -right-2">
                    <Image src="/assets/homepage/footer/twitter-2.png" alt="" width={480} height={480} className="size-5" />
                  </Link>
                </div>
                <Link
                  href={'#PUMP_FUN_LINK'}
                  className="flex items-center gap-2 rounded-lg border-2 border-black bg-white px-4 py-2 font-normal text-black [box-shadow:2px_2px_0px_#000000] hover:animate-shake"
                >
                  <Image src="/assets/homepage/footer/char.png" alt="" width={480} height={480} className="size-5" />
                  <span>BUY $BOBY</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
