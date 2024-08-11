import React, { useRef } from "react";
import {btnLabel,FreeCode_Log,Google_Logo,NoAccount,signInLabel,signUp,Submit} from "../utils/constants";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import usePrivateRoute from "../hooks/usePrivateRoute";
import useHandleSignIn from "../hooks/useHandleSignIn";
import { useSelector } from "react-redux";

const SignIn = () => {
  const { emailError, passwordError } = useSelector((store) => store.validation);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  usePrivateRoute();
  const handleSubmit = useHandleSignIn(emailRef, passwordRef);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <Toaster position="bottom-right" reverseOrder={true} />
      <div className="bg-white w-full max-w-sm border border-gray-300 p-6 shadow-md">
        <div className="flex justify-center mb-6">
          <img className="w-10" src={FreeCode_Log} alt="Logo" />
        </div>
        <h2 className="text-xl font-bold text-center mb-6">{signInLabel}</h2>
        <form>
          <div className="relative mb-4 mt-6">
            {emailError && (
              <span className="absolute text-red-600 text-sm -top-5 left-0">
                {emailError}
              </span>
            )}
            <input
              ref={emailRef}
              className={`w-full h-10 p-2 border ${
                emailError ? "border-red-600" : "border-gray-300"
              } rounded-md`}
              type="email"
              placeholder="Email address"
            />
          </div>

          <div className="relative mb-4 mt-6">
            {passwordError && (
              <span className="absolute text-red-500 text-sm -top-5 left-0">
                {passwordError}
              </span>
            )}
            <input
              ref={passwordRef}
              className={`w-full h-10 p-2 border ${
                passwordError ? "border-red-500" : "border-gray-300"
              } rounded-md`}
              type="password"
              placeholder="Password"
            />
          </div>

          <button
            className="w-full h-10 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600"
            onClick={handleSubmit}
          >
            {Submit}
          </button>
        </form>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-gray-500">OR</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <button className="w-full flex items-center justify-center h-10 mb-4 border border-gray-300 rounded-md hover:bg-gray-100">
          <img className="w-6 mr-2" src={Google_Logo} alt="Google logo" />
          {btnLabel}
        </button>

        <p className="text-center text-gray-600 mt-6">
          {NoAccount}
          <button className="text-black hover:underline font-bold cursor-pointer">
            <Link to={"/signup"}>{signUp}</Link>
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
