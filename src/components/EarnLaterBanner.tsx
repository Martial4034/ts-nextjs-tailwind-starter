import React from 'react';

import BorderTiny from '@/components/BorderTiny';
import ButtonLater from '@/components/ButtonLater';
import EarnLater from '@/components/EarnLater';
import SloganLater from '@/components/SloganLater';

const EarnLaterBanner = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <BorderTiny>
        <EarnLater />
        <div className='mt-4 w-3/4 text-center'>
          <SloganLater />
        </div>
        <div className='mt-6'>
          <ButtonLater />
        </div>
      </BorderTiny>
    </div>
  );
};

export default EarnLaterBanner;
