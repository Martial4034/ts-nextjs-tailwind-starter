import React from 'react';

import EarnNow from '@/components/EarnNow';
import SloganEarn from '@/components/SloganEarn';

import { BorderTinySVG, ButtonBlueSVG } from '../components/svg';

const EarnNowBanner = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='relative flex flex-col items-center justify-center'>
        <BorderTinySVG className='w-[115%] sm:w-[80%] md:w-[60%] lg:w-[35rem] object-contain' />

        <div className='absolute inset-0 flex flex-col items-center justify-center'>
          <EarnNow />

          <div className='w-[100%] sm:w-[80%] md:w-[60%] lg:max-w-[23rem] text-center pt-3 sm:pt-6'>
            <SloganEarn />
          </div>

          <div className='mt-4 sm:mt-6'>
            <a
              href='#'
              className='relative inline-flex items-center justify-center px-5 sm:px-8 pt-1 pb-2 sm:py-4 text-lg sm:text-xl md:text-2xl font-qualy font-bold text-white transition-transform transform hover:scale-105'
            >
              <ButtonBlueSVG className='w-[65%] sm:w-[75%] md:w-[50%] lg:w-[15rem]' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarnNowBanner;
