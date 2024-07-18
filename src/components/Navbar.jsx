import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { LiaSearchSolid } from "react-icons/lia";

const Navbar = () => {
  return (
    <div className=" px-3   flex gap-2 justify-between  md:px-10 py-3 md:w-full ">
      <div>
        <GiHamburgerMenu className="text-sky-600 text-4xl " />
      </div>
      <div className="flex items-center relative">
        <LiaSearchSolid className=" text-gray-400 text-xl absolute ml-3  " />
        <input
          className=" w-[270px] md:w-[300px]  bg-gray-700 outline-none pr-2 pl-10 p-1 rounded-lg text-white"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default Navbar;
