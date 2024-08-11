import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setSignedUser } from "../utils/btnSlice";
import { SignIN_API, Course_Route } from "../utils/constantApi";
import { setEmailError, setPasswordError } from "../utils/validationSlice";
import { Email, Error_Occured, Login_Failed, password, success_MSG } from "../utils/constants";

const useHandleSignIn = (emailRef, passwordRef) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const userDetail = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    const response = await fetch(SignIN_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetail),
    });

    const data = await response.json();
    const { message, error, sucess, jwtToken, name } = data;

    dispatch(setEmailError(""));
    dispatch(setPasswordError(""));

    if (sucess) {
      toast.success(message || success_MSG);
      localStorage.setItem("token", jwtToken);
      localStorage.setItem("signedUser", name);
      dispatch(setSignedUser(localStorage.getItem("signedUser")));
      navigate(Course_Route);
    } else if (error) {
      if (error.details[0]?.context.key === Email) {
        dispatch(setEmailError(error.details[0]?.message));
      } else if (error.details[0]?.context.key === password) {
        dispatch(setPasswordError(error.details[0]?.message));
      }
      toast.error(error.details[0]?.message || Error_Occured);
    } else if (!sucess) {
      toast.error(message || Login_Failed);
    }
  };

  return handleSubmit;
};

export default useHandleSignIn;
