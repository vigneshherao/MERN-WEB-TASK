import React from 'react';
import { Heading_Content } from '../utils/constants';

const Body = () => {
  return (
    <div className='bg-custom-dark-blue w-full h-screen flex flex-col items-center p-6 sm:p-10'>
      <div className="w-full max-w-[800px] text-left mt-10">
        {Heading_Content.map((header) => (
          <h2 
            className='text-2xl sm:text-5xl font-semibold text-white mb-6 sm:mb-10' 
            key={header.id}
          >
            {header.title}
          </h2>
        ))}
        <p className='font-mono font-semibold text-xl text-white'>
          Since 2014, more than 40,000 freeCodeCamp.org graduates have <br/> 
          gotten jobs at tech companies including:
        </p>
        <div className='sm:flex justify-center mt-5'>
          <button className='bg-customYellow p-3 w-full sm:w-[65%] mt-10 text-2xl font-mono'>Get Started(it's free)</button>
        </div>
      </div>
    </div>
  );
};

export default Body;
