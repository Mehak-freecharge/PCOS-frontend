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
    <div className="w-[full] h-40 flex flex-row justify-between">
      <div className="flex flex-row">
        {" "}
        <Sidebar />
        {/* <img src={logo} alt="" className="" /> */}
      </div>
      <div className="mt-4 text-5xl font-mono">
        <h1>sheAura</h1>
        {/* <img src={logo} alt="" className="h-full w-50" /> */}
      </div>
      <div className="mt-4 ">
        <ul className="flex flex-row gap-3 mr-6">
          <li className=" bg-white border-2 border-black hover:bg-black hover:text-white hover:border-white py-3 px-8 rounded-full mb-2 md:mb-0 md:mr-4 cursor-pointer">
            Login
          </li>
          <li className=" bg-white border-2 border-black hover:bg-black hover:text-white hover:border-white py-3 px-8 rounded-full cursor-pointer">
            Signup
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
