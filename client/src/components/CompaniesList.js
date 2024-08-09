import React from "react";
import {FaGoogle,FaMicrosoft,FaSpotify,FaAmazon,FaApple,} from "react-icons/fa";
import { Amazon, Apple, Google, Microsoft, Spotify} from "../utils/constants";

const CompaniesList = () => {
  return (
    <div className="flex flex-wrap justify-center sm:justify-between mt-8 text-custom-dark-blue">
      <div className="flex items-center mb-4 mr-4 sm:mb-0">
        <FaApple size={30} />
        <p className="ml-2 font-bold">{Apple}</p>
      </div>
      <div className="flex items-center mb-4 mr-4 sm:mb-0">
        <FaGoogle size={30} />
        <p className="ml-2 font-bold">{Google}</p>
      </div>
      <div className="flex items-center mb-4 mr-4 sm:mb-0">
        <FaMicrosoft size={30} />
        <p className="ml-2 font-bold">{Microsoft}</p>
      </div>
      <div className="flex items-center mb-4 mr-4 sm:mb-0">
        <FaSpotify size={30} />
        <p className="ml-2 font-bold">{Spotify}</p>
      </div>
      <div className="flex items-center mb-4 sm:mb-0">
        <FaAmazon size={30} />
        <p className="ml-2 font-bold">{Amazon}</p>
      </div>
    </div>
  );
};

export default CompaniesList;
