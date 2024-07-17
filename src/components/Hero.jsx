import React from "react";
import img from "../assets/image.jpg";

export const Hero = () => {
  return (
    <div className="  mt-28 relative  ">
      <div className="   px-24  py-20 ml-12  ">
        <h1 className="text-white font-bold text-7xl ">
          Web Development <br /> and Maintenance
        </h1>
        <span className=" text-sky-600 text-5xl font-semibold underline  decoration-4 underline-offset-8">
          {" "}
          Website
        </span>

        <p className="text-white text-1xl py-5">
          with an achieving dreams in building your product, together say yes to
          extraordinary design
        </p>
        <span className=" text-white border bg-sky-700 p-2 px-4 rounded-full">
          Start a project
        </span>
        <span className=" text-white border  p-2 px-4 rounded-full ml-6">
          Start a project
        </span>
      </div>
      <div className="flex w-[370px] h-[650px] gap-5  overflow-hidden  absolute right-[180px] top-0 -mt-[170px]">
        <div className="mt-16 space-y-8">
          <img className="w-24 h-[300px] rounded-full " src={img} alt="" />
          <img className="w-24 h-[300px] rounded-full " src={img} alt="" />
        </div>
        <div className="space-y-8 -mt-20">
          <img className="w-24 h-[300px] rounded-full " src={img} alt="" />
          <img className="w-24 h-[300px] rounded-full " src={img} alt="" />
          <img className="w-24 h-[300px] rounded-full " src={img} alt="" />
        </div>
        <div className="space-y-8 mt-20">
          <img className="w-24 h-[300px] rounded-full " src={img} alt="" />
          <img className="w-24 h-[300px] rounded-full " src={img} alt="" />
        </div>
      </div>
    </div>
  );
};
