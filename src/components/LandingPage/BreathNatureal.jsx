import React from "react";
import Button from "../ui/button";
import Card from "../ui/Card";
import Layout from "../ui/Layout";
import { images } from "../../utils/images";
import { TrendyHousePlant } from "../../utils/data";

const BreathNatureal = () => {
  return (
    <Layout>
      <div className="flex justify-between px-8 z-20">
        <div className=" flex flex-col mt-10 z-20">
          <h1 className="font-size-118px font-inter-semibold text-white tracking-[4px]">
            Breath Natureal
          </h1>
          <p className="font-size-22px text-gray-200 font-inter-regular max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex gap-6 mt-6 items-center">
            <Button label="Explore" />
            <Button
              label="live Demo..."
              className="border-0 flex gap-2 text-white items-center"
              icon={true}
              iconSrc={images.playIcon}
            />
          </div>
        </div>
        <div className="flex-1 w-full flex justify-center items-end">
          <div className="flex justify-center items-end w-full">
            {TrendyHousePlant.map((item) => (
              <Card key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>

      <div
        className="bg-white/10 backdrop-blur-md
                border border-white/10 opacity-100 w-72 pt-5 pb-10 rounded-xl p-4 mt-12 z-20 relative md:left-8 md:bottom-10"
      >
        <div className="flex gap-2 ">
          <div className="h-10 w-10 rounded-full">
            <img
              src={images.alinaImage}
              alt="user_photo"
              className="object-contain"
            />
          </div>
          <div>
            <p className="text-white font-inter-regular">alena Patel</p>
            <img
              src={images.starsImage}
              alt="stars_img"
              className="object-contain w-16"
            />
          </div>
        </div>
        <p className="font-size-18px font-inter-regular text-gray-300 pt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt...
        </p>
      </div>
    </Layout>
  );
};

export default BreathNatureal;
