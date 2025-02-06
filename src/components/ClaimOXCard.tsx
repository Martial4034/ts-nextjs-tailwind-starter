import React from 'react';

import { BorderClaimSVG, BorderTinySVG, ButtonTelegramSVG, OXCoinSVG } from '@/components/svg';

const ClaimOXCard = () => {
  return (
    <div className='relative flex items-center justify-center max-w-3xl pb-20 mx-auto'>
      {/* Image de fond : changement basé sur la taille d'écran */}
      <div className='absolute inset-0 w-full'>
        <BorderClaimSVG className='hidden md:block w-full md:w-[50rem] object-contain' />
        <BorderTinySVG className='block md:hidden w-full object-contain' />
      </div>

      {/* Contenu */}
      <div className='relative flex flex-col md:flex-row items-center justify-center md:justify-between w-full p-6 pt-8'>
        {/* Texte et bouton au centre */}
        <div className='text-center md:text-left flex flex-col justify-center text-white max-w-full md:max-w-[60%] md:pl-16'>
          <h2 className='font-qualy text-3xl sm:text-3xl md:text-5xl font-bold mb-2 uppercase md:pt-8'>
            Claim 200 OX
          </h2>
          <p className='text-sm sm:text-base md:text-xl mb-4 leading-tight md:pt-6 pt-3'>
            Join our community by clicking the link below! Receive OX and, most
            importantly, have fun!
          </p>
          <a
            href="#"
            className="transition-transform hover:scale-105 overflow-hidden inline-block"
          >
            <ButtonTelegramSVG className='w-[80%] md:w-[75%] lg:w-[100%] object-contain md:pt-2 mx-auto md:mx-0 sm:pb-3' />
          </a>
        </div>

        {/* Image OX : masquée sur mobile */}
        <div className='hidden md:block w-28 md:w-36 lg:w-60 flex-shrink-0 pt-12'>
          <OXCoinSVG className='w-full h-full object-contain' />
        </div>
      </div>
    </div>
  );
};

export default ClaimOXCard;
