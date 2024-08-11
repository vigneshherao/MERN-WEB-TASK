import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Fetch_COURSE } from "../utils/constantApi";

//created a function will fecth the api and user and return arrays with data

const useFetchCourse = () => {
  const { isSignedUser } = useSelector((store) => store?.btns);
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSignedUser) {
      navigate("/");
    } else {
      fetchCourses();
    }
  }, [isSignedUser, navigate]);

  //fetching function
  const fetchCourses = async () => {
    const headers = {
      headers:{
        'Authorization':localStorage.getItem('token'),
      }
    }
    const data = await fetch(Fetch_COURSE,headers);
    const jsonData = await data.json();
    setCourses(jsonData);
  };

  return [isSignedUser, courses];
};

export default useFetchCourse;
