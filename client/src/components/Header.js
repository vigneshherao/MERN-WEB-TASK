import React from "react";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { CiSearch } from "react-icons/ci";
import useUserHandle from "../hooks/useUserHandle";
import { Course_Header, FREECODE_IMG, MENU, Sign_IN, Sign_OUT } from "../utils/constants";

const Header = () => {
  
  const [user,handleSignOut] = useUserHandle();

  return (
    <div className="bg-custom-dark-purple flex items-center justify-between p-1">
      <Toaster position="bottom-right" reverseOrder={true} />
      <div className="hidden sm:flex sm:w-[35%] items-center bg-gray-800 rounded focus:outline-none focus:border-white">
        <CiSearch className="text-gray-400 ml-2" />
        <input
          className="w-full bg-gray-800 p-2 h-8 ml-2 text-white "
          type="search"
          placeholder="Search the 10000+ Tutorials"
        />
      </div>
      <Link to={"/"}>
        <div className="flex-grow flex items-center justify-center text-white">
          <h2 className="text-xl sm:text-2xl mr-2 font-thin">{Course_Header}</h2>
          <img
            src={FREECODE_IMG}
            alt="logo-header"
            className="h-8 sm:h-10"
          />
        </div>
      </Link>
      <div className="sm:w-[35%] flex justify-end  sm:justify-end mt-2 sm:mt-0">
        <button className="bg-transparent border font-semibold text-white px-2 py-1 mr-3 sm:mr-4">
          {MENU}
        </button>
        {user ? (
          <button
            className="bg-customYellow font-semibold text-black px-3 py-1 mr-4"
            onClick={handleSignOut}
          >
            {Sign_OUT}
          </button>
        ) : (
          <button className="bg-customYellow font-semibold text-black px-3 py-1 mr-4">
            <Link to={"/signin"}>{Sign_IN}</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
