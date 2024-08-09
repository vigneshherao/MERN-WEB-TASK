import React from 'react';

const Shimmer= () => {
  const shimmerBoxes = Array(6).fill(0);

  return (
    <div className='mt-8 mb-8'>
      {shimmerBoxes.map((_, index) => (
        <div
          key={index}
          className='w-[80%] sm:w-[40%] bg-gray-200 h-16 m-auto text-black flex items-center mt-4 p-5 animate-pulse'
        >
          <div className='w-8 h-8 bg-gray-300 rounded-full'></div>
          <div className='ml-5 flex-1'>
            <div className='h-4 bg-gray-300 rounded w-3/4'></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
