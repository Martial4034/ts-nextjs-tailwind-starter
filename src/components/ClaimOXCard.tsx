import Image from 'next/image';
import React from 'react';

import ButtonTelegram from './ButtonTelegram';

const ClaimOXCard = () => {
  return (
    <div className='relative flex items-center justify-between p-6 max-w-2xl mx-auto'>
      {/* Image de fond */}
      <Image
        src='/images/BorderOX.png'
        alt='Border OX'
        layout='fill'
        objectFit='contain'
        objectPosition='center'
      />

      {/* Contenu */}
      <div className='relative flex items-center justify-between w-full p-6'>
        {/* Texte à gauche */}
        <div className='flex flex-col justify-center text-white max-w-[60%]'>
          <h2 className='font-qualy text-2xl md:text-3xl font-bold mb-2 uppercase'>
            Claim 200 OX
          </h2>
          <p className='text-sm md:text-lg mb-4 leading-tight'>
            Join our community by clicking the link below! Receive OX and, most
            importantly, have fun!
          </p>
          <ButtonTelegram />
        </div>

        {/* Image à droite */}
        <div className='w-28 md:w-36 lg:w-44 flex-shrink-0'>
          <Image
            src='/images/ox_2.png'
            alt='OX Token'
            width={180}
            height={180}
            className='object-contain'
          />
        </div>
      </div>
    </div>
  );
};

export default ClaimOXCard;
