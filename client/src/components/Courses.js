import React from "react";
import { GrPersonalComputer } from "react-icons/gr";
import Shimmer from "./Shimmer";
import useFetchCourse from "../hooks/useFetchCourse";
import { Quote, Quote_By, QuoteBuy } from "../utils/constants";

const Courses = () => {
  //calling custom Hooks for fecthcing the courses and user
  const [isSignedUser, courses] = useFetchCourse();

  return (
    <div className="text-center justify-center">
      <h2 className="mt-12 sm:mt-12 text-2xl font-semibold">{`Welcome ${isSignedUser} to freeCodeCamp.org`}</h2>
      <p className="mt-5 text-2xl p-2">
        {Quote} <br />
        <span className="text-sm sm:text-lg font-thin italic ">{Quote_By}</span>
      </p>

      {courses.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="mt-8 mb-8">
          {courses.map((course) => (
            <div
              key={course?._id}
              className="w-[80%] sm:w-[40%] bg-gray-400 h-16 m-auto text-black border-2 border-black flex items-center mt-4 p-5 hover:bg-custom-dark-blue hover:text-white transition duration-300 ease-in-out"
            >
              <GrPersonalComputer size={32} />
              <p className="text-sm sm:text-xl ml-5">{course?.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Courses;
