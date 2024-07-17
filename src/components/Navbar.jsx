import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { LiaSearchSolid } from "react-icons/lia";

const Navbar = () => {
  return (
    <div className="flex justify-between px-10 py-3">
      <div>
        <GiHamburgerMenu className="text-sky-600 text-3xl" />
      </div>
      <div className="flex items-center relative">
        <LiaSearchSolid className=" text-gray-400 text-xl absolute ml-3  " />
        <input
          className="  bg-gray-700 outline-none pr-2 pl-10 p-1 rounded-lg text-white"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default Navbar;
