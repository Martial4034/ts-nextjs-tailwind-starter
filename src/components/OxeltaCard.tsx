// OxeltaCard.tsx
'use client';

import Image from 'next/image';
import React from 'react';

const OxeltaCard = () => {
  return (
    <div className='relative flex flex-col items-center justify-center p-6 max-w-2xl mx-auto'>
      {/* Image de fond de la card */}
      <div className='relative w-full max-w-xl'>
        <Image
          src='/images/BorderFlappy.png'
          alt='Border Flappy'
          width={800}
          height={400}
          className='object-contain'
        />

        {/* Contenu de la card */}
        <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
          {/* Logo FlappyOxo */}
          <div className='mb-4'>
            <Image
              src='/images/logo.png'
              alt='Flappy Oxo Logo'
              width={300}
              height={100}
              className='object-contain'
            />
          </div>

          {/* Texte */}
          <div className='w-[100%] text-center mx-auto'>
            <p className='font-qualy font-bold text-3xl mb-4 uppercase'>
              Create and Develop by
            </p>
          </div>

          {/* Logo Oxelta */}
          <div>
            <Image
              src='/images/oxelta.png'
              alt='Oxelta Logo'
              width={120}
              height={80}
              className='object-contain'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OxeltaCard;
