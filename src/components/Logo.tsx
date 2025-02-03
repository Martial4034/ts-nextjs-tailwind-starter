// components/Logo.tsx
import Image from 'next/image';
import React from 'react';

const Logo = () => {
  return (
    <Image
      src='/images/logo.png'
      alt='FlappyOxo Logo'
      width={550}
      height={170}
    />
  );
};

export default Logo;
