import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Arrow from '@/images/icon/arrow.svg';
import TwIcon from '@/images/icon/twitter.svg';
import { Comic_Neue, Mulish } from 'next/font/google';

const comicNeue = Comic_Neue({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-comic-neue',
});

const mulish = Mulish({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-mulish',
});

const ActivityTile = ({ title, desc, link }: any) => {
    return (
        <div
            className="bg-[#2D384D] pt-[2px] px-[3px] rounded-[12px] pb-[8px]"
            data-aos="fade-up"
            data-aos-delay="100"
        >
            <div className="pt-[27px] px-[21px] pb-[25px] rounded-[9px] bg-[#E0DCC1] flex justify-between items-center gap-[125px]">
                {' '}
                <div className="flex flex-col gap-[7px]">
                    <p className={`${comicNeue.className}`}>
                        {title}
                    </p>
                    <p className={`${comicNeue.className}`}>
                        {desc}
                    </p>
                </div>
                <div>
                    <Link
                        href={link}
                        className="flex items-center gap-[47px] border-[1px] border-solid border-[#000000] px-[21px] py-[15px] rounded-[4px]"
                    >
                        <p className={`text-[14px] ${mulish.className}`}>
                            Interact in x.com
                        </p>
                        <Image src={TwIcon} alt="" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ActivityTile