import Image from 'next/image';
import React from 'react';

const TropheeOX = () => {
  return (
    <div className='flex justify-center items-center h-full'>
      <Image
        src='/images/ox_trophy.png'
        alt='Trophée OX'
        width={400}
        height={600}
        className='max-h-screen object-contain'
      />
    </div>
  );
};

export default TropheeOX;
