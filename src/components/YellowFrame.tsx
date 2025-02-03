export const YellowFrame = () => {
  return (
    <div className='relative border-4 border-yellow-500 rounded-lg p-4 bg-black text-white'>
      <div className='absolute inset-0 border-2 border-yellow-300 rounded-lg'></div>
      <div className='relative z-10'></div>
    </div>
  );
};
