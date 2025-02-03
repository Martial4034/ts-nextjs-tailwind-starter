// OxeltaCard.tsx
'use client';

import React from 'react';


const FlappyOxoBanner = () => {
  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      {/* Image de fond de la card */}
      <img
        src='/images/BorderFlappy.svg'
        className='w-[85%] md:w-[60%] lg:w-[50%] object-contain'
      />

      {/* Contenu de la card */}
      <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
        {/* Logo FlappyOxo */}
        <div className='flex md:mb-2 lg:mb-4 items-center justify-center'>
          <img
            src='/images/logo.svg'
            className='w-[60%] md:w-[70%] lg:w-[85%] object-contain'
          />
        </div>

        {/* Texte */}
        <div className='text-center mx-auto'>
          <p className='font-qualy font-bold text-xl lg:text-3xl uppercase'>
            NO GAME, NO GAIN
          </p>
        </div>

        {/* Logo Oxelta */}
        <div className='relative inline-flex px-20 py-2 items-center justify-center text-white font-qualy font-bold transition-transform transform hover:scale-105 hover:shadow-lg overflow-hidden'>
          <img
            src='/images/ButtonTelegram.svg'
            className='w-[75%] md:w-[70%] lg:w-[85%] object-contain'
          />
        </div>
      </div>
    </div>
  );
};

export default FlappyOxoBanner;
