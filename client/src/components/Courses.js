import React from 'react';
import { GrPersonalComputer } from 'react-icons/gr';
import { useSelector } from 'react-redux';

const courses = [
  'Responsive Web Design Certification',
  'JavaScript Algorithms and Data Structures Certification',
  'Front End Development Libraries Certification',
  'Data Visualization Certification',
  'APIs and Microservices Certification',
  'Quality Assurance Certification',
  'APIs and Microservices Certification',
  'Quality Assurance Certification',
];

const Courses = () => {

  const {isSignedUser} = useSelector((store)=>store?.btns);

  return (
    <div className='text-center justify-center'>
      <h2 className='mt-12 sm:mt-12 text-2xl font-semibold'>{`Welcome ${isSignedUser} to freeCodeCamp.org`}</h2>
      <p className='mt-5 text-2xl p-2'>
        "I have not failed. I've just found 10,000 ways that won't work." <br />
        <span className='text-sm sm:text-lg font-thin italic '>- Thomas A. Edison</span>
      </p>

      <div className='mt-8 mb-8'>
        {courses.map((course, index) => (
          <div
            key={index}
            className='w-[80%] sm:w-[40%] bg-gray-400 h-16 m-auto text-black border-2 border-black flex items-center mt-4 p-5 hover:bg-custom-dark-blue hover:text-white transition duration-300 ease-in-out'
          >
            <GrPersonalComputer size={32} />
            <p className='text-sm sm:text-xl ml-5'>{course}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
