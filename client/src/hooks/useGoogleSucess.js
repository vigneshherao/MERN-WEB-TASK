import toast from "react-hot-toast";
import { setSignedUser } from "../utils/btnSlice";
import { Course_Route, GoogleAPI } from "../utils/constantApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Login_Failed, success_MSG } from "../utils/constants";

const useGoogleSuccess = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const response = await fetch(GoogleAPI, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: credentialResponse.credential }),
      });
      const data = await response.json();
      const { message, error, sucess, jwtToken, name } = data;
      if (sucess) {
        toast.success(message || success_MSG);
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("signedUser", name);
        dispatch(setSignedUser(localStorage.getItem("signedUser")));
        navigate(Course_Route);
      } else if (error) {
        toast.error(error);
      } else if (!sucess) {
        toast.error(message || Login_Failed);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return handleGoogleSuccess;
};

export default useGoogleSuccess;
