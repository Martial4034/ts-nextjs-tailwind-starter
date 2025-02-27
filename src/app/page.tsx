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
          className="snap-start bg-cover bg-center relative"
          style={{
            backgroundImage: 'url(/images/bg01.png)',
            height: 'calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))',
            paddingTop: 'env(safe-area-inset-top)',
            paddingBottom: 'env(safe-area-inset-bottom)',
          }}
        >
          <div className="absolute top-4 left-4 z-10 hidden sm:block">
            <OxyCard />
          </div>
          <div className="flex justify-center">
            <FlappyOxoBanner />
          </div>
          <div className="w-[75%] sm:w-[70%] md:w-[50%] lg:w-[24rem] object-contain mb-10 ml-12">
            <OXCoinSVG />
          </div>


        </section>

        {/* Section 2 */}
        <section
          className="snap-start bg-cover bg-center relative overflow-hidden"
          style={{
            backgroundImage: 'url(/images/bg01.png)',
            height: 'calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))',
            paddingTop: 'env(safe-area-inset-top)',
            paddingBottom: 'env(safe-area-inset-bottom)',
          }}
        >
          <div className="fixed top-4 left-4 sm:hidden z-10">
            <OxyCard />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#3D7087] to-[#6BC5ED] opacity-90 z-0"></div>
          <div className="relative grid grid-rows-1 sm:grid-cols-2 h-full w-full">
            <div className="flex justify-center items-center order-1 sm:order-1 lg:pl-16">
              <EarnNowBanner />
            </div>
            <div className="sm:flex justify-center items-center order-2 sm:order-2">
              <TropheeTONSVG className="w-[75%] sm:w-[70%] md:w-[50%] lg:w-[24rem] object-contain mb-10 ml-12" />
            </div>
          </div>
        </section>


        {/* Section 3 */}
        <section
          className="snap-start bg-cover bg-center relative overflow-hidden"
          style={{
            backgroundImage: 'url(/images/bg01.png)',
            height: 'calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))',
            paddingTop: 'env(safe-area-inset-top)',
            paddingBottom: 'env(safe-area-inset-bottom)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#A82DAE] to-[#110411] opacity-90 z-0"></div>
          <div className="relative grid grid-rows-1 sm:grid-cols-2 h-full w-full">
            <div className="flex justify-center items-center order-1 sm:order-2 lg:pr-16">
              <EarnLaterBanner />
            </div>
            <div className="sm:flex justify-center items-center order-2 sm:order-1">
              <TropheeOXSVG className="w-[75%] sm:w-[70%] md:w-[50%] lg:w-[24rem] object-contain mb-10 ml-12" />
            </div>
          </div>
        </section>

     {/* Section 4 */}
    <section
      className="snap-start flex items-center justify-center relative px-4 overflow-hidden"
      style={{
        backgroundImage: 'url(/images/bg01.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 'calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))',
        paddingTop: 'env(safe-area-inset-top)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#AC3FA1] to-[#4564B4] opacity-90 z-0"></div>

      {/* Contenu mobile / PC */}
      <div className="relative h-full w-full flex flex-col sm:grid sm:grid-cols-2">
        {/* Carte centrée sur PC */}
        <div className="flex justify-center items-center h-full sm:col-span-2">
          <ClaimOXCard />
        </div>

        {/* OXCoinSVG affiché uniquement sur mobile */}
        <div className="flex justify-center items-center sm:hidden">
          <OXCoinSVG className="w-[75%] sm:w-[70%] md:w-[50%] lg:w-[24rem] object-contain mb-10 ml-12" />
        </div>
      </div>
    </section>

        {/* Section 5 */}
        <section
          className="snap-start bg-black relative overflow-hidden"
          style={{
            height: 'calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))',
            paddingTop: 'env(safe-area-inset-top)',
            paddingBottom: 'env(safe-area-inset-bottom)',
          }}
        >
          {/* Carte Oxelta centrée (légèrement plus haut sur PC) */}
          <div className="flex h-full items-center justify-center text-white relative">
            <div className="absolute top-[45%] sm:top-[40%] transform -translate-y-1/2">
              <a href="https://oxelta.io/" className="relative inline-block transition-transform transform hover:scale-105">
                <OxeltaCard />
              </a>
            </div>
          </div>

          {/* PilesOXSVG remontée légèrement sur mobile */}
          <div className="absolute w-full bottom-8 sm:bottom-0">
            <PilesOXSVG className="w-full object-cover" />
          </div>
        </section>

      </div>
    </main>
  );
}
