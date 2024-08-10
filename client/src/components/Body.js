import { Link } from "react-router-dom";
import usePrivateRoute from "../hooks/usePrivateRoute";
import { Body_Btn, Body_Title, Heading_Content } from "../utils/constants";
import CompaniesList from "./CompaniesList";

const Body = () => {
  
  //This will check for the auth and private routing
  usePrivateRoute();

  return (
    <div className="bg-customGray w-full h-screen flex flex-col items-center p-6 sm:p-10">
      <div className="w-full max-w-[800px] text-left mt-10">
        {Heading_Content.map((header) => (
          <h2
            className="text-2xl sm:text-5xl font-semibold custom-dark-blue mb-6 sm:mb-10"
            key={header.id}
          >
            {header.title}
          </h2>
        ))}
        <p className="font-mono font-semibold text-xl custom-dark-blue">
          {Body_Title}
        </p>
        <CompaniesList />
        <div className="sm:flex justify-center mt-5">
          <button className="bg-customYellow p-3 w-full sm:w-[65%] mt-10 text-2xl font-mono shadow-sm hover:bg-yellow-600">
            <Link to={"/signin"}> {Body_Btn}</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
