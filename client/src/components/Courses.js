import React, { useEffect, useState } from 'react';
import { GrPersonalComputer } from 'react-icons/gr';
import { useSelector } from 'react-redux';

const Courses = () => {

  const {isSignedUser} = useSelector((store)=>store?.btns);
  const [courses,setCourses] = useState([]);

  useEffect(()=>{
    fetchCourses();
  },[])


  const fetchCourses = async ()=>{
    const data = await fetch("http://localhost:8080/courses");
    const jsonData = await data.json();
    console.log(jsonData);
  }

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
