import Image from 'next/image';
import Link from 'next/link';

export default function Section2() {
    return (
        <section className="size-full h-screen bg-[#B1D3D2] bg-[url('/assets/images/section-3/bg.png')] bg-cover bg-center">
            <div className="container mx-auto size-full max-w-6xl px-4">
                <div className="flex h-full flex-col justify-center">
                    <div className="flex items-center gap-4">
                        <div className="w-1/2">
                            <div className="flex w-full items-center justify-center">
                                <div className="flex size-[420px] items-center justify-center overflow-hidden rounded-full bg-[#2D384D]">
                                    <div className="-mt-4 size-[400px] overflow-hidden rounded-full">
                                        <video src="/assets/homepage/section-2/video.mp4" autoPlay loop muted />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="flex flex-col gap-4">
                                <h2
                                    className="text-6xl font-bold text-white [text-shadow:2px_2px_0px_#2D384D]"
                                    data-aos="fade-up"
                                    style={{
                                        WebkitTextStroke: '1px #2D384D',
                                    }}
                                >
                                    Boby is not just an AI. it&apos;s your quirky digital companion.
                                </h2>
                                <p
                                    className="text-lg font-normal text-[#000000]"
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                    style={{
                                        WebkitTextStroke: '0.5px #000000',
                                    }}
                                >
                                    Born from a dimension where everything moves at a gentler pace, Boby learned the art of breaking down overwhelming
                                    data into peaceful, manageable pieces.
                                </p>
                                <div className="flex items-center gap-4">
                                    <Link
                                        href={'/chatbot'}
                                        className="flex items-center gap-2 rounded-lg border-2 border-black bg-[#FFFFFF] px-4 py-2 font-normal text-black [box-shadow:2px_2px_0px_#000000] hover:animate-shake"
                                        data-aos="fade-up"
                                        data-aos-delay="200"
                                    >
                                        <span>Learn More About Bobby</span>
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
                            <div className="mt-4 flex justify-end">
                                <Image src="/assets/homepage/section-2/access.png" alt="" width={480} height={480} className="h-[160px] w-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
