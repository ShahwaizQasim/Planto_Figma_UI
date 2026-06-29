import React from "react";
import Layout from "../ui/Layout";
import { images } from "../../utils/images";
import Button from "../ui/button";

const TrendingPlants = ({ data, index }) => {
  return (
    <Layout className="pb-16">
      {index === 0 ? (
        <h1 className="text-center font-inter-semibold text-white font-size-55px md:mt-0 mt-6">
          Our Trendy plants
        </h1>
      ) : null}

      <div className="max-w-7xl mx-auto mt-10">
        <div
          className={`flex items-center flex-col md:flex-row justify-between bg-[#2c3a23]/60 rounded-full ${index === 1 ? "flex-row-reverse" : ""}`}
        >
          <div className={`flex-1`}>
            <img
              src={data?.image}
              alt={data?.name || "plant"}
              className={`object-contain h-[200px] md:h-[350px] md:left-10 relative md:bottom-12 ${index === 1 ? " md:left-48 " : ""}`}
            />
          </div>
          <div
            className={`flex-1 flex flex-col gap-2 pb-10 ${index === 1 ? "relative md:left-28 " : ""}`}
          >
            <h1 className="font-inter-semibold font-size-38px text-white">
              {data?.title}
            </h1>
            <p className="max-w-lg font-inter-semibold text-white font-size-20px">
              {data?.description}
            </p>
            <h1 className="font-inter-semibold font-size-38px text-white">
              {data?.currency}. {data?.price}/-
            </h1>
            <div className="flex gap-5 items-center">
              <Button
                label={data?.buttonText}
                className="w-32 bg-transparent border border-white hover:bg-white-600 hover:text-black text-white py-2 px-4 rounded font-inter-regular"
              />
              <div className="h-10 w-10 flex justify-center items-center border border-white rounded-lg">
                <img src={images.bagIcon} alt="bag_icon" className="h-7" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TrendingPlants;
