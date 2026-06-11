import React from "react";
import Button from "./button";
import { images } from "../../utils/images";

const Card = ({ data }) => {
  return (
    <div className="bg-[linear-gradient(90deg,rgba(255,255,255,0.2)_0%,rgba(0,0,0,0)_52%,rgba(255,255,255,0.2)_100%)] w-80 relative flex flex-col mt-28 rounded-2xl pb-10">
      <img
        src={data?.image}
        alt={data?.name || "Plant"}
        className="object-contain relative bottom-16"
      />

      <p className="pl-10 font-inter-regular text-gray-200 font-size-18px relative bottom-7">
        {data?.title}
      </p>
      <div className="flex justify-between items-center relative bottom-3 px-3 pl-10">
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
        className="w-28 border border-white ml-10 text-white py-2 mt-2 font-inter-regular font-size-20px rounded-lg"
      />
    </div>
  );
};

export default Card;
