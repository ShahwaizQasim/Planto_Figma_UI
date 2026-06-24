import React from "react";
import Button from "./button";
import { images } from "../../utils/images";

const Card = ({ data, isData }) => {
  return (
    <div className={`relative  ${isData?"mt-20 pr-4":"mt-24 w-80" } rounded-2xl pb-10  bg-white/5 backdrop-blur-md
                border border-white/10`}>
      <img
        src={data?.image}
        alt={data?.name || "Plant"}
        className={`object-contain ${isData? "mt-5 mb-4 relative top-2 left-10 h-8": "relative bottom-16"}`}
      />

      <p className={`pl-10 font-inter-regular text-gray-200 font-size-18px ${isData? "" :"relative bottom-7"}`}>
        {data?.title}
      </p>
      <div className={`flex justify-between items-center ${isData? " mt-2": "relative bottom-3"} px-3 pl-10`}>
        <div>
          <h1 className="font-size-24px text-white font-inter-regular tracking-[1px]">
            {data?.name}
          </h1>
        </div>
        <div>
          <img
            src={images.RightArrowIcon}
            alt="icon"
            className="object-contain h-3 pr-6"
          />
        </div>
      </div>
      <Button
        label={data?.buttonText}
        className={`w-28 border border-white ml-10 text-white py-2 mt-2 font-inter-regular font-size-20px rounded-lg ${isData ? "mt-5":""}`}
      />
    </div>
  );
};

export default Card;
