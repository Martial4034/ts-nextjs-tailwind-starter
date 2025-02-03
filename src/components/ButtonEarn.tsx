import React from 'react';

const ButtonEarn = () => {
  return (
    <a
      href='#'
      className='relative inline-flex items-center justify-center px-8 py-4 text-2xl font-qualy font-bold text-white transition-transform transform hover:scale-105 hover:shadow-lg'
      style={{
        backgroundImage: "url('/images/pinkbutton.png')", // 🔹 Utilisation de l'image comme fond
        backgroundSize: 'contain', // 🔹 Garde l'image entière sans déformation
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      GAME NOW!
    </a>
  );
};

export default ButtonEarn;
