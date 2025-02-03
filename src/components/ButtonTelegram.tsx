import Image from 'next/image';
import React from 'react';

const ButtonTelegram = () => {
  return (
    <a
      href='#'
      className='relative inline-flex items-center justify-center text-white font-qualy font-bold transition-transform transform hover:scale-105 hover:shadow-lg overflow-hidden'
      style={{
        backgroundImage: "url('/images/telegrambutton.png')", // Image en fond
        backgroundSize: '100% 100%', // Remplit l'espace du bouton
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <span className='text-lg ml-2 md:text-xl'>LAUNCH ON TELEGRAM</span>
      <Image
        src='/images/invite.png'
        alt='Telegram Icon'
        width={40}
        height={50}
        className='ml-2 mr-2 mt-2 mb-2'
      />
    </a>
  );
};

export default ButtonTelegram;
