import React from 'react';
import { GrPersonalComputer } from 'react-icons/gr';

const courses = [
  'Responsive Web Design Certification',
  'JavaScript Algorithms and Data Structures Certification',
  'Front End Development Libraries Certification',
  'Data Visualization Certification',
  'APIs and Microservices Certification',
  'Quality Assurance Certification',
];

const Courses = () => {
  return (
    <div className='text-center justify-center'>
      <h2 className='sm:mt-12 text-2xl font-semibold'>Welcome to freeCodeCamp.org</h2>
      <p className='sm:mt-5 text-2xl'>
        "I have not failed. I've just found 10,000 ways that won't work." <br />
        <span className='font-thin italic'>- Thomas A. Edison</span>
      </p>

      <div className='mt-8'>
        {courses.map((course, index) => (
          <div
            key={index}
            className='w-[80%] sm:w-[40%] bg-gray-400 h-16 m-auto text-black border-2 border-black flex items-center mt-4 p-5 hover:bg-custom-dark-blue hover:text-white transition duration-300 ease-in-out'
          >
            <GrPersonalComputer size={32} />
            <p className='text-xl ml-5'>{course}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
