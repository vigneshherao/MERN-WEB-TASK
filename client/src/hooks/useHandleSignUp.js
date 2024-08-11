import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Sign_ROUTE, SignUP_API } from "../utils/constantApi";
import {setEmailError,setnameError,setPasswordError,} from "../utils/validationSlice";
import { useDispatch } from "react-redux";
import { Email, password, Req } from "../utils/constants";

const useHandleSignUp = (emailRef, passwordRef, nameRef) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const userDetail = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      name: nameRef.current.value,
    };

    try {
      const response = await fetch(SignUP_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetail),
      });

      const result = await response.json();
      const { sucess, message, error } = result;

      dispatch(setEmailError(""));
      dispatch(setPasswordError(""));
      dispatch(setnameError(""));

      if (error) {
        toast.error(error?.details[0]?.message);
        if (error.details[0]?.context.key === Email) {
          dispatch(setEmailError(error.details[0]?.message));
        } else if (error.details[0]?.context.key === password) {
          dispatch(setPasswordError(error.details[0]?.message));
        } else {
          dispatch(setnameError(error.details[0]?.message));
        }
      } else if (!sucess) {
        toast.error(message);
      } else {
        toast.success(message + Req);
        setTimeout(() => {
          navigate(Sign_ROUTE);
        }, 2000);
      }
    } catch (error) {}
  };

  return handleSubmit;
};

export default useHandleSignUp;
