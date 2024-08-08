import React from "react";
import { signInLabel, signUpLabel } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {toggleSignIn} from "../utils/btnSlice"


const SignUp = () => {

  const dispatch= useDispatch();
  const isSignIn = useSelector((store)=>store?.btns?.isSignUp)



  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="bg-white w-full max-w-sm border border-gray-300 p-6 shadow-md">
        <div className="flex justify-center mb-6">
          <img
            className="w-10"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCpzAlmrfzPB_q16Dbvq0IihxEcGEKTZFLA&s"
            alt="Logo"
          />
        </div>
        <h2 className="text-xl font-bold text-center mb-6">
          {isSignIn ? signInLabel : signUpLabel}
        </h2>

        {
          isSignIn ? <></>: <input
          className="w-full h-10 mb-4 p-2 border border-gray-300 rounded-md"
          type="name"
          placeholder="Name"
        />
        }
        <input
          className="w-full h-10 mb-4 p-2 border border-gray-300 rounded-md"
          type="email"
          placeholder="Email address"
        />
        <input
          className="w-full h-10 mb-4 p-2 border border-gray-300 rounded-md"
          type="password"
          placeholder="Password "
        />

        <button className="w-full h-10 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600">
          Submit
        </button>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-gray-500">OR</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <button className="w-full flex items-center justify-center h-10 mb-4 border border-gray-300 rounded-md hover:bg-gray-100">
          <img
            className="w-6 mr-2"
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google logo"
          />
          Continue with Google
        </button>

        <p className="text-center text-gray-600  mt-6">
          {isSignIn ? "Don't have an account yet? " : "Already a member? "}
          <button className="text-black hover:underline font-bold cursor-pointer" onClick={()=>{
              dispatch(toggleSignIn())
          }}>
            {isSignIn ? " Sign up":" Sign in"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
