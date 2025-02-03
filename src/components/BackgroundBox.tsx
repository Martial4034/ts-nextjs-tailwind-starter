import React from 'react';

const BackgroundBox: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className='w-[864px] h-[452px] bg-gradient-to-r from-[#294765] to-[#511A3A] border-4 border-yellow-300 flex flex-col items-center justify-center'>
      {children}
    </div>
  );
};

export default BackgroundBox;
