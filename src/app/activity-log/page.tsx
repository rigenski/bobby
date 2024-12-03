import Footer from './_components/footer/index';
import { Comic_Neue, Mulish } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import Arrow from '@/images/icon/arrow.svg';
import activityData from "./_components/activity-data.json"
import ActivityTile from './_components/activity-tile';

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

export default function Page() {
  return (
    <>
      <div className={`bg-[url('/_assets/Vector.png')]`}>
        <div className="flex flex-col items-center pt-[66px]">
          <div className="w-[700px] pl-[70px] mb-[70px]">
            <Link href="/" className="flex items-center gap-[10px]">
              <Image src={Arrow} alt="" />
              <span className={`${mulish.className}`}>Back to Home</span>
            </Link>
          </div>

          <div>
            <h2
              className="text-5xl text-white font-bold balsamiq-sans-bold"
              style={{
                WebkitTextStroke: '2px #2D384D',
              }}
            >
              Boby Activity
            </h2>
          </div>
          <div className="pt-[30px] pb-[184px] flex flex-col gap-[24px]">
          {activityData.map(data => <ActivityTile title={data.title} desc={data.description} link={data.link} />)}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
