import Image from 'next/image';
import React from 'react';

const OxyCard = () => {
  return (
    <div
      className='relative flex items-center justify-between p-4'
      style={{
        backgroundImage: 'url(/images/BorderOxy.png)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {/* Oiseau */}
      <div className='flex items-center'>
        <Image src='/images/bird.svg' alt='Bird' width={40} height={40} />
        <p className='text-white font-bold text-sm ml-2'>
          I'm the boss OXY, the new bird of
        </p>
      </div>

      {/* Logo X */}
      <div className='flex items-center pl-2'>
        <Image src='/images/Xlogo.png' alt='X Logo' width={20} height={20} />
      </div>
    </div>
  );
};

export default OxyCard;
