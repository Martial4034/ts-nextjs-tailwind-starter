'use client';

import React from 'react';
import { BorderFlappySVG, LogoSVG, ButtonTelegramSVG } from '../components/svg';

const FlappyOxoBanner = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      {/* Image de fond de la card */}
      <BorderFlappySVG className="w-[85%] md:w-[60%] lg:w-[50%] object-contain" />

      {/* Contenu de la card */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        {/* Logo FlappyOxo */}
        <div className="flex md:mb-2 lg:mb-4 items-center justify-center">
          <LogoSVG className="w-[60%] md:w-[80%] lg:w-96 xl:w-96 object-contain" />
        </div>

        {/* Texte */}
        <div className="text-center mx-auto">
          <p className="font-qualy font-bold text-xl lg:text-3xl uppercase">
            NO GAME, NO GAIN
          </p>
        </div>

        {/* Logo Oxelta */}
        <div className="relative inline-flex px-20 py-2 items-center justify-center text-white font-qualy font-bold transition-transform transform hover:scale-105 overflow-hidden">
          <a
            href="#"
            className="flex items-center justify-center w-full h-full"
          >
            <ButtonTelegramSVG className="w-[75%] md:w-[90%] lg:w-96 object-contain" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FlappyOxoBanner;
