import React from 'react';

const BorderTiny: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className='relative flex flex-col items-center justify-center p-8'
      style={{
        backgroundImage: "url('/images/BorderTiny.png')",
        backgroundSize: 'contain', // 🔹 L'image est affichée en entier
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '90vh', // 🔹 Prend presque tout l'écran en hauteur
        width: '100%', // 🔹 Prend toute la largeur
      }}
    >
      {children}
    </div>
  );
};

export default BorderTiny;
