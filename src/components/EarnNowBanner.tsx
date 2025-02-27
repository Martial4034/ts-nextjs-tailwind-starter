import React from 'react';

import EarnNow from '@/components/EarnNow';
import SloganEarn from '@/components/SloganEarn';

import { BorderTinySVG, ButtonBlueSVG } from '../components/svg';

const EarnNowBanner = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='relative flex flex-col items-center justify-center w-full px-4'>
        <BorderTinySVG className='w-[115%] sm:w-[85%] md:w-[85%] lg:w-[35rem] object-contain' />

        <div className='absolute inset-0 flex flex-col items-center justify-center'>
          <div className='w-full max-w-[600px] md:max-w-[700px] lg:max-w-[800px]'>
            <EarnNow />
          </div>

          <div className='w-[90%] md:w-[80%] lg:max-w-[23rem] text-center pt-3 md:pt-4'>
            <SloganEarn />
          </div>

          <div className='mt-4 md:mt-5'>
            <a
              href='#'
              className='relative inline-flex items-center justify-center px-5 md:px-6 pt-1 pb-2 md:py-3 text-lg md:text-2xl font-qualy font-bold text-white transition-transform transform hover:scale-105'
            >
              <ButtonBlueSVG className='w-[200px] md:w-[250px] lg:w-[300px]' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarnNowBanner;
