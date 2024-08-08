import React from 'react';
import { Heading_Content } from '../utils/constants';

const Body = () => {
  return (
    <div className='bg-custom-dark-blue w-full h-[689px] flex flex-col justify-center items-center p-10'>
      {Heading_Content.map((header) => (
        <h2 
          className='text-5xl font-semibold text-white sm:mb-10' 
          key={header.id}
        >
          {header.title}
        </h2>
      ))}
      <p className='font-serif font-semibold text-white text-center'>
        Since 2014, more than 40,000 freeCodeCamp.org graduates have <br/> 
        gotten jobs at tech companies including:
      </p>
    </div>
  );
};

export default Body;
