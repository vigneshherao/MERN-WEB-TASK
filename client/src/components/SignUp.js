import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {FreeCode_Log,Have_Account,signIn,signUpLabel,Submit,} from "../utils/constants";
import { Toaster } from "react-hot-toast";
import usePrivateRoute from "../hooks/usePrivateRoute";
import useHandleSignUp from "../hooks/useHandleSignUp";
import { useSelector } from "react-redux";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import useGoogleSuccess from "../hooks/useGoogleSucess";

const SignUp = () => {
  const { emailError, passwordError, nameError } = useSelector((store) => store.validation);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const handleSubmit = useHandleSignUp(emailRef, passwordRef, nameRef);
  usePrivateRoute();
  const handleGoogleSuccess = useGoogleSuccess();
  const onSubmit = (e) => {
    e.preventDefault(); 
    handleSubmit();
  };

  return (
    <GoogleOAuthProvider clientId="226619249007-7fasp6accavgbc3c43cprrgno33vo28h.apps.googleusercontent.com">
      <div className="flex justify-center items-center min-h-screen bg-gray-200">
        <Toaster position="bottom-right" reverseOrder={true} />
        <div className="bg-white w-full max-w-sm border border-gray-300 p-6 shadow-md">
          <div className="flex justify-center mb-6">
            <img className="w-10" src={FreeCode_Log} alt="Logo" />
          </div>
          <h2 className="text-xl font-bold text-center mb-6">{signUpLabel}</h2>

          <form
           onSubmit={onSubmit}
          >
            <div className="relative mb-2">
              {nameError && (
                <span className="absolute text-red-600 text-sm -top-5 left-0">
                  {nameError}
                </span>
              )}
              <input
                ref={nameRef}
                className="w-full h-10 mb-4 p-2 border border-gray-300 rounded-md"
                type="name"
                placeholder="Name"
              />
            </div>

            <div className="relative mb-2">
              {emailError && (
                <span className="absolute text-red-600 text-sm -top-5 left-0">
                  {emailError}
                </span>
              )}
              <input
                ref={emailRef}
                className="w-full h-10 mb-4 p-2 border border-gray-300 rounded-md"
                type="email"
                placeholder="Email address"
              />
            </div>
            <div className="relative mb-4">
              {passwordError && (
                <span className="absolute text-red-600 text-sm -top-5 left-0">
                  {passwordError}
                </span>
              )}
              <input
                ref={passwordRef}
                className="w-full h-10 mb-4 p-2 border border-gray-300 rounded-md"
                type="password"
                placeholder="Password "
              />
            </div>

            <button
              className="w-full h-10 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600"
            >
              {Submit}
            </button>
          </form>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-4 text-gray-500">OR</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <div className="w-full flex items-center justify-center h-12 mb-4  rounded-md hover:bg-gray-100">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onFailure={() => {
                console.error("Google login error");
              }}
            />
          </div>

          <p className="text-center text-gray-600  mt-6">
            {Have_Account}
            <button className="text-black hover:underline font-bold cursor-pointer">
              <Link to={"/signin"}>{signIn}</Link>
            </button>
          </p>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default SignUp;
