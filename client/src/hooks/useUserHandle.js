import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSignedUser, signOutUser } from "../utils/btnSlice";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { User_SignOut } from "../utils/constants";

const useUserHandle = () => {
  const user = useSelector((store) => store?.btns?.isSignedUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const signedUser = localStorage.getItem("signedUser");
    if (signedUser) {
      dispatch(setSignedUser(signedUser));
    }
  }, [dispatch]);

  const handleSignOut = () => {
    setTimeout(() => {
      toast.success(user + User_SignOut);
      navigate("/");
    }, 1000);
    localStorage.removeItem("token");
    localStorage.removeItem("signedUser");
    dispatch(signOutUser());
  };

  return [user, handleSignOut];
};

export default useUserHandle;
