import React from 'react';

const BorderBox: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='relative w-[896px] h-[484px] border-4 border-[#F0E749] p-4'>
      {children}
    </div>
  );
};

export default BorderBox;
