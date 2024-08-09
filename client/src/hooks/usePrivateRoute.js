import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Course_Route } from "../utils/constantApi";

const usePrivateRoute = () => {
  const user = useSelector((store) => store?.btns?.isSignedUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate(Course_Route);
    }
  }, [user, navigate]);
};

export default usePrivateRoute;
