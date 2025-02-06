'use client';

import React from 'react';

import { BorderFlappySVG, LogoOxeltaSVG,LogoSVG } from '@/components/svg';

const OxeltaCard = () => {
  return (
    <div className="relative flex flex-col items-center justify-center p-6 max-w-2xl mx-auto min-h-screen md:min-h-0 md:pt-16">
      {/* Image de fond de la card */}
      <div className="relative w-full max-w-xl">
        {/* Remplacement de l'image par le composant BorderFlappySVG */}
        <BorderFlappySVG className="w-[22rem] md:w-[35rem] h-auto object-contain" />

        {/* Contenu de la card */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          {/* Logo FlappyOxo */}
          <div className="mb-4">
            {/* Remplacement de l'image par le composant LogoSVG */}
            <LogoSVG className="w-44 md:w-[17rem] h-auto object-contain md:pt-0" />
          </div>

          {/* Texte */}
          <div className="w-full text-center mx-auto">
            <p className="font-qualy font-bold text-2xl md:text-3xl mb-4 uppercase">
              Create and Develop by
            </p>
          </div>

          {/* Logo Oxelta */}
          <div>
            {/* Remplacement de l'image par le composant LogoOxeltaSVG */}
            <LogoOxeltaSVG className="w-[6rem] md:w-[10em] h-auto object-contain md:pb-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OxeltaCard;
