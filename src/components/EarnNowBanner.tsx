import React from 'react';

import BorderTiny from '@/components/BorderTiny';
import ButtonEarn from '@/components/ButtonEarn';
import EarnNow from '@/components/EarnNow';
import SloganEarn from '@/components/SloganEarn';

const EarnNowBanner = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <BorderTiny>
        <EarnNow />
        <div className='mt-4 w-3/4 text-center'>
          <SloganEarn />
        </div>
        <div className='mt-6'>
          <ButtonEarn />
        </div>
      </BorderTiny>
    </div>
  );
};

export default EarnNowBanner;
