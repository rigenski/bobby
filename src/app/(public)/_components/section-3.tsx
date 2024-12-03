import Image from 'next/image';
import Link from 'next/link';

export default function Section3() {
    return (
        <section className="relative size-full h-screen overflow-hidden bg-[#B1D3D2] bg-[url('/assets/homepage/section-1/bg.png')] bg-cover bg-center">
            <div className="absolute left-0 top-0 z-20 size-full bg-[url('/assets/homepage/section-1/gradient.png')] bg-cover">
                <div className="container mx-auto size-full max-w-6xl px-4">
                    <div className="flex h-full flex-col items-center justify-end pb-24">
                        <div
                            className="flex w-[400px] flex-col items-center justify-center gap-4 rounded-2xl bg-[#E0DCC1] px-8 py-8 [box-shadow:4px_4px_0px_#2F394E]"
                            data-aos="fade-up"
                        >
                            <video
                                src="/assets/homepage/section-3/video.mp4"
                                autoPlay
                                muted
                                loop
                                className="-mt-32 w-[240px] rounded-[80px] border-4 border-black"
                            />
                            <h2
                                className="text-center text-2xl font-bold text-white [text-shadow:1px_1px_0px_#7A5599]"
                                style={{
                                    WebkitTextStroke: '1px #2F394E',
                                }}
                            >
                                His motto is simple,
                                <br />
                                “Be the best, like no
                                <br /> one ever was!”
                            </h2>
                            <p className="text-center text-base font-normal text-[#000000]" data-aos="fade-up" data-aos-delay="100">
                                Whether you’re trying to solve a tough problem or just need a friend to guide you through your thoughts, Boby adapts
                                to your needs—learning and growing with you.
                            </p>
                            <Link
                                href={'/chatbot'}
                                className="flex items-center gap-2 rounded-lg border-2 border-black bg-white px-4 py-2 font-normal text-black [box-shadow:2px_2px_0px_#000000] hover:animate-shake"
                            >
                                <span>Discover How Boby Works</span>
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
                        <div className="-ml-[60%] -mt-24 flex justify-start">
                            <Image src="/assets/homepage/section-3/access.png" alt="" width={480} height={480} className="h-[120px] w-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
