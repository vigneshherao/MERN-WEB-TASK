import React from "react";

const Header = () => {
  return (
    <div className="bg-black flex items-center justify-between">
      <div className="hidden sm:block sm:w-[35%]">
        <input
          className="w-full bg-gray-800 p-2 h-7 ml-2"
          type="search"
          placeholder="🔍 Search 10,700+ Courses"
        />
      </div>
      <div className="flex-grow flex items-center justify-center text-white">
        <h2 className="text-2xl mr-2">freeCodeCamp</h2>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCpzAlmrfzPB_q16Dbvq0IihxEcGEKTZFLA&s"
          alt="logo-header"
          className="h-10"
        />
      </div>
      <div className="w-[35%] flex justify-end">
        <button className="bg-transparent border font-semibold text-white px-2 py-1 mr-3">
          Menu
        </button>
        <button className="bg-yellow-400 font-semibold text-black px-3 py-1 mr-4">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Header;
