import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { signUpLabel } from "../utils/constants";
import toast, { Toaster } from "react-hot-toast";

const SignUp = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  const handleSubmit = async () => {
    const userDetail = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      name: nameRef.current.value,
    };

    try {
      const response = await fetch("http://localhost:8080/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetail),
      });

      const result = await response.json();
      console.log(result);
      const { success, message, error } = result;
      if (success) {
        toast.success(message||"sucess");
      } else if(error) {
        toast.error(error?.details[0]?.message);
      }
    } catch (error) {}
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <Toaster position="bottom-right" reverseOrder={true} />
      <div className="bg-white w-full max-w-sm border border-gray-300 p-6 shadow-md">
        <div className="flex justify-center mb-6">
          <img
            className="w-10"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCpzAlmrfzPB_q16Dbvq0IihxEcGEKTZFLA&s"
            alt="Logo"
          />
        </div>
        <h2 className="text-xl font-bold text-center mb-6">{signUpLabel}</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            ref={nameRef}
            className="w-full h-10 mb-4 p-2 border border-gray-300 rounded-md"
            type="name"
            placeholder="Name"
          />

          <input
            ref={emailRef}
            className="w-full h-10 mb-4 p-2 border border-gray-300 rounded-md"
            type="email"
            placeholder="Email address"
          />
          <input
            ref={passwordRef}
            className="w-full h-10 mb-4 p-2 border border-gray-300 rounded-md"
            type="password"
            placeholder="Password "
          />

          <button
            className="w-full h-10 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>

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
          Already a member?
          <button className="text-black hover:underline font-bold cursor-pointer">
            <Link to={"/signin"}>Sign in</Link>
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
