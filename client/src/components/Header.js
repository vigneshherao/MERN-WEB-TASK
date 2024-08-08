import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setSignedUser, signOutUser } from "../utils/btnSlice";

const Header = () => {

  const user = useSelector((store)=>store?.btns?.isSignedUser);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    const signedUser = localStorage.getItem("signedUser");
    if (signedUser) {
      dispatch(setSignedUser(signedUser));
    }
  },[dispatch])

  const handleSignOut = () => {
    setTimeout(() => {
      toast.success(`${user} Signed out successfully`);
    }, 100);
    localStorage.removeItem("token");
    localStorage.removeItem("signedUser");
    dispatch(signOutUser());
  };


  return (
    <div className="bg-custom-dark-purple flex items-center justify-between p-1">
       <Toaster position="bottom-right" reverseOrder={true} />
      <div className="hidden sm:block sm:w-[35%]">
        <input
          className="w-full bg-gray-800 p-2 h-8 ml-2"
          type="search"
          placeholder="🔍 Search 10,700+ Courses"
        />
      </div>
      <Link to={"/"}>
        <div className="flex-grow flex items-center justify-center text-white">
          <h2 className="text-xl sm:text-2xl mr-2 font-thin">freeCodeCamp</h2>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCpzAlmrfzPB_q16Dbvq0IihxEcGEKTZFLA&s"
            alt="logo-header"
            className="h-8 sm:h-10"
          />
        </div>
      </Link>
      <div className="sm:w-[35%] flex justify-end  sm:justify-end mt-2 sm:mt-0">
        <button className="bg-transparent border font-semibold text-white px-2 py-1 mr-3 sm:mr-4">
          Menu
        </button>
        {
            user? <button className="bg-customYellow font-semibold text-black px-3 py-1 mr-4" onClick={handleSignOut}>SignOut</button> : <button className="bg-customYellow font-semibold text-black px-3 py-1 mr-4">
              <Link to={"/signin"}>Sign in</Link>
            </button>
          }
       
      </div>
    </div>
  );
};

export default Header;
