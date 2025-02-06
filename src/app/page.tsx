'use client';

import Head from 'next/head';

import ClaimOXCard from '@/components/ClaimOXCard';
import EarnLaterBanner from '@/components/EarnLaterBanner';
import EarnNowBanner from '@/components/EarnNowBanner';
import FlappyOxoBanner from '@/components/FlappyOxoBanner';
import OxeltaCard from '@/components/OxeltaCard';
import OxyCard from '@/components/OxyCard';
import { TropheeTONSVG, TropheeOXSVG, PilesOXSVG, OXCoinSVG } from '../components/svg';

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>FlappyOxo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="custom-scrollbar no-scrollbar smooth-scroll snap-y snap-mandatory h-screen w-full overflow-y-scroll">
        {/* Section 1 */}
        <section
          className="snap-start min-h-screen bg-cover bg-center relative overflow-hidden"
          style={{ backgroundImage: 'url(/images/bg1.png)' }}
        >
          <div className="absolute top-4 left-4 z-10">
            <OxyCard />
          </div>
          <div className="flex justify-center">
            <FlappyOxoBanner />
          </div>
          <div className="absolute bottom-4 right-4">
            <OXCoinSVG />
          </div>
        </section>

        {/* Section 2 */}
        <section
          className="snap-start min-h-screen bg-cover bg-center relative overflow-hidden"
          style={{ backgroundImage: 'url(/images/bg2.png)' }}
        >
          <div className="absolute top-4 left-4 sm:hidden z-10">
            <OxyCard />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#3D7087] to-[#6BC5ED] opacity-90 z-0"></div>
          <div className="relative h-full w-full flex flex-col sm:grid sm:grid-cols-2">
            <div className="flex justify-center items-center flex-1">
              <EarnNowBanner />
            </div>
            <div className="hidden sm:flex justify-center items-center flex-1">
              <TropheeTONSVG className="w-[5rem] md:w-[50%] lg:w-[24rem] object-contain" />
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section
          className="snap-start min-h-screen bg-cover bg-center relative overflow-hidden"
          style={{
            backgroundImage: 'url(/images/bg1.png)',
          }}
        >
          <div className="absolute top-4 left-4 sm:hidden z-10">
            <OxyCard />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#A82DAE] to-[#110411] opacity-90 z-0"></div>
          <div className="relative grid grid-rows-1 sm:grid-cols-2 h-full w-full">
            <div className="flex justify-center items-center order-1 sm:order-2 lg:pr-16">
              <EarnLaterBanner />
            </div>
            <div className="hidden sm:flex justify-center items-center order-2 sm:order-1">
              <TropheeOXSVG className="w-[85%] sm:w-[70%] md:w-[50%] lg:w-[24rem] object-contain" />
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section
          className="snap-start min-h-screen flex items-center justify-center relative px-4 overflow-hidden"
          style={{
            backgroundImage: 'url(/images/bg1.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute top-4 left-4 sm:hidden z-10">
            <OxyCard />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#AC3FA1] to-[#4564B4] opacity-90 z-0"></div>
          <div className="relative flex justify-center w-full max-w-[80%]">
            <ClaimOXCard />
          </div>
        </section>

        {/* Section 5 */}
        <section className="snap-start min-h-screen bg-black relative overflow-hidden">
          <div className="absolute top-4 left-4 sm:hidden z-10">
            <OxyCard />
          </div>
          <div className="flex h-full items-center justify-center text-white">
            <OxeltaCard />
          </div>
          <div className="absolute bottom-0 w-full">
            <PilesOXSVG className="w-full object-cover" />
          </div>
        </section>
      </div>
    </main>
  );
}
