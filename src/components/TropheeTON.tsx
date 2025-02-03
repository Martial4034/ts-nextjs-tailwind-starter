import Image from 'next/image';
import React from 'react';

const TropheeTON = () => {
  return (
    <div className='flex justify-center items-center h-full'>
      <Image
        src='/images/tropheeTON.png'
        alt='Trophée TON'
        width={400}
        height={600}
        className='max-h-screen object-contain'
      />
    </div>
  );
};

export default TropheeTON;
