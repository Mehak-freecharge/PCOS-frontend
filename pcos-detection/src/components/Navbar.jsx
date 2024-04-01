import React, { useState } from "react";
import logo from "../images/logo.png";
import { motion } from "framer-motion";
import Sidebar from "./sidebar/Sidebar";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="fixed w-full h-20 flex flex-row justify-between items-center bg-[#FFC0CB] z-10">
      {" "}
      <div className="flex flex-row items-center">
        {" "}
        <Sidebar />
        <img
          src={logo}
          alt=""
          className="hidden lg:block ml-20 w-60 h-60"
        />{" "}
      </div>
      {/* <div className="mt-4 text-5xl font-mono">
        <h1>sheAura</h1>
        <img src={logo} alt="" className="h-full w-50" />
      </div> */}
      <div className="">
        <ul className="flex flex-row gap-3 mr-6">
          <li className=" bg-white border-2 border-black hover:bg-[#FF92A5] hover:text-black hover:border-black py-3 px-6 rounded-full mb-1 md:mb-0 md:mr-4 cursor-pointer">
            Login
          </li>
          <li className=" bg-white border-2 border-black hover:bg-[#FF92A5] hover:text-black hover:border-black py-3 px-6 rounded-full cursor-pointer">
            Signup
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
