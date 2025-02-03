// PilesOx.tsx
'use client';

import Image from 'next/image';
import React from 'react';

const PilesOx = () => {
  return (
    <div className='absolute bottom-0 w-full'>
      <Image
        src='/images/LesPiles.png'
        alt='Les Piles'
        layout='responsive'
        width={1920}
        height={300}
        className='object-cover'
      />
    </div>
  );
};

export default PilesOx;
