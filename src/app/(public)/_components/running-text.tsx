import Marquee from 'react-fast-marquee';

export default function RunningText() {
    return (
        <div className="absolute z-40 -mt-16 w-full">
            <Marquee className="bg-[url('/assets/homepage/section-1/marquee.png')] bg-cover pb-6 pt-10">
                {Array.from({ length: 10 }).map((_, index) => (
                    <div className="flex items-center gap-6 pr-4" key={index}>
                        <h2 className="text-4xl font-bold text-[#000000]">*$BOBY</h2>
                    </div>
                ))}
            </Marquee>
        </div>
    );
}
