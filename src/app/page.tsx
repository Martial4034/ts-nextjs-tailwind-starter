'use client';

import Head from 'next/head';

import ClaimOXCard from '@/components/ClaimOXCard';
import EarnLaterBanner from '@/components/EarnLaterBanner';
import EarnNowBanner from '@/components/EarnNowBanner';
import FlappyOxoBanner from '@/components/FlappyOxoBanner';
import OX_2 from '@/components/OX_2';
import OxeltaCard from '@/components/OxeltaCard';
import OxyCard from '@/components/OxyCard';
import PilesOx from '@/components/PilesOx';
import TropheeOX from '@/components/TropheeOX';
import TropheeTON from '@/components/TropheeTON';

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>FlappyOxo</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <div className='custom-scrollbar no-scrollbar smooth-scroll snap-y snap-mandatory h-screen w-full overflow-y-scroll'>
        {/* Section 1 */}
        <section
          className='snap-start min-h-screen bg-cover bg-center relative'
          style={{ backgroundImage: 'url(/images/bg1.png)' }}
        >
          {/* Oxy Card en haut à gauche */}
          <div className='absolute top-4 left-4'>
            <OxyCard />
          </div>

          {/* FlappyOxo Banner centré */}
          <div className='flex justify-center'>
            <FlappyOxoBanner />
          </div>

          {/* Icone OX en bas à droite */}
          <div className='absolute bottom-4 right-4'>
            <OX_2 />
          </div>
        </section>

        {/* Section 2 - Ajustement des positions */}
        <section
          className='snap-start min-h-screen bg-cover bg-center relative flex items-center'
          style={{ backgroundImage: 'url(/images/bg2.png)' }}
        >
          <div className='absolute inset-0 bg-gradient-to-r from-[#3D7087] to-[#6BC5ED] opacity-90'></div>

          {/* Conteneur avec grille pour bien positionner les éléments */}
          <div className='relative grid grid-cols-2 w-full px-20'>
            {/* EarnNowBanner juste à gauche du centre */}
            <div className='flex justify-end pr-10'>
              <EarnNowBanner />
            </div>

            {/* TropheeTON centré dans la moitié droite */}
            <div className='flex justify-start pl-40'>
              <TropheeTON />
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section
          className='snap-start min-h-screen bg-cover bg-center'
          style={{
            backgroundImage: 'url(/images/bg1.png)',
            position: 'relative',
          }}
        >
          {/* Ajout du fond dégradé avec opacité */}
          <div className='absolute inset-0 bg-gradient-to-r from-[#A82DAE] to-[#110411] opacity-90'></div>

          {/* Conteneur avec grille pour bien positionner les éléments */}
          <div className='relative grid grid-cols-2 w-full px-20'>
            {/* EarnLaterBanner juste à gauche du centre */}
            <div className='flex justify-end pr-40'>
              <TropheeOX />
            </div>

            {/* TropheeOX centré dans la moitié droite */}
            <div className='flex justify-start pl-10'>
              <EarnLaterBanner />
            </div>
          </div>
        </section>

        {/* Section 4 - Claim OX agrandi et centré */}
        <section
          className='snap-start min-h-screen flex items-center justify-center relative px-4'
          style={{
            backgroundImage: 'url(/images/bg1.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className='absolute inset-0 bg-gradient-to-r from-[#AC3FA1] to-[#4564B4] opacity-90'></div>

          <div className='relative flex justify-center w-full max-w-[80%]'>
            <ClaimOXCard />
          </div>
        </section>

        {/* Section 5 */}
        <section className='snap-start min-h-screen bg-black relative'>
          {/* Card au centre */}
          <div className='flex h-full items-center justify-center text-white'>
            <OxeltaCard />
          </div>

          {/* Piles d'OX en bas */}
          <PilesOx />
        </section>
      </div>
    </main>
  );
}
