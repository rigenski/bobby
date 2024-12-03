import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Section1() {
    return (
        <section className="relative size-full h-screen overflow-hidden bg-[#B1D3D2] bg-[url('/assets/homepage/section-1/bg.png')] bg-cover bg-center">
            <div className="absolute left-0 top-0 z-20 size-full bg-[url('/assets/homepage/section-1/gradient.png')] bg-cover">
                <div className="container mx-auto size-full max-w-6xl px-4">
                    <div className="flex h-full flex-col justify-center">
                        <div className="flex items-center gap-4">
                            <div className="w-full">
                                <div className="flex flex-col items-center justify-center">
                                    <h2
                                        className="mb-4 text-center text-6xl font-bold text-white [text-shadow:2px_2px_0px_#2D384D]"
                                        data-aos="fade-up"
                                        style={{
                                            WebkitTextStroke: '2px #2D384D',
                                        }}
                                    >
                                        Meet Boby, Your Calm in the
                                        <br /> Chaos of the Digital World.
                                    </h2>
                                    <p
                                        className="mb-4 text-center text-lg font-bold text-white [text-shadow:2px_2px_0px_#2D384D]"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                        style={{
                                            WebkitTextStroke: '0.5px #2D384D',
                                        }}
                                    >
                                        Born in the Restful Realm, Boby brings a touch of <br /> simplicity to your complex digital life. Take a
                                        breath, slow <br /> down, and let Boby guide you toward clarity.
                                    </p>
                                    <div className="relative">
                                        <div className="relative">
                                            <video
                                                src="/assets/homepage/section-1/video.mp4"
                                                autoPlay
                                                muted
                                                loop
                                                className="w-[420px] rounded-full border-4 border-black"
                                            />
                                            <div className="absolute top-0 translate-x-[0%]">
                                                <Image
                                                    src="/assets/homepage/section-1/char.png"
                                                    alt=""
                                                    width={480}
                                                    height={480}
                                                    className="h-[480px] w-auto"
                                                />
                                            </div>
                                        </div>
                                        <div className="absolute bottom-16 translate-x-[12%]">
                                            <div className="flex items-center gap-4">
                                                <Link
                                                    href={'#PUMP_FUN_LINK'}
                                                    className="flex items-center gap-2 rounded-lg border-2 border-black bg-[#B1D3D2] px-4 py-2 font-normal text-black [box-shadow:2px_2px_0px_#000000] hover:animate-shake"
                                                    data-aos="fade-up"
                                                    data-aos-delay="200"
                                                >
                                                    <Image
                                                        src="/assets/homepage/section-1/logo.png"
                                                        alt=""
                                                        width={480}
                                                        height={480}
                                                        className="size-5"
                                                    />
                                                    <span>BUY $BOBY</span>
                                                </Link>
                                                <Link
                                                    href={'/chatbot'}
                                                    className="flex items-center gap-2 rounded-lg border-2 border-black bg-[#FFFFFF] px-4 py-2 font-normal text-black [box-shadow:2px_2px_0px_#000000] hover:animate-shake"
                                                    data-aos="fade-up"
                                                    data-aos-delay="200"
                                                >
                                                    <span>Meet your Boby</span>
                                                    <span>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="lucide lucide-move-right"
                                                        >
                                                            <path d="M18 8L22 12L18 16" />
                                                            <path d="M2 12H22" />
                                                        </svg>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
