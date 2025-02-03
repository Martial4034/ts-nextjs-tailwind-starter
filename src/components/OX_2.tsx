import Image from 'next/image';
import React from 'react';

const OX_2 = () => {
  return (
    <div className='flex justify-center items-center h-full'>
      <Image
        src='/images/ox_2.png'
        alt='Trophée OX'
        width={200}
        height={300}
        className='max-h-screen object-contain'
      />
    </div>
  );
};

export default OX_2;
