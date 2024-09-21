import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [nav,setNav]=useState(false);
    const handleNav=()=>{setNav(!nav)};
  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-3">
      <h1 className=" w-full text-3xl font-bold text-[#00df9a]">AGENTt.</h1>
      <div className="hidden md:flex gap-12 ">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/company">Company</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div onClick={handleNav} className="block md:hidden">
        {nav?<AiOutlineClose size={24} />:<AiOutlineMenu size={24}/>}
      </div>
      <div className={nav?"fixed top-0 left-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500":"hidden"}>
      <h1 className=" w-full text-3xl font-bold text-[#00df9a] pt-4 pl-4">AGENTt.</h1>
        <div className="flex flex-col gap-8 p-6 pt-10">
        <Link className=" border-b border-b-gray-600 " to="/">Home</Link>
        <Link className=" border-b border-b-gray-600 " to="/about">About</Link>
        <Link className=" border-b border-b-gray-600 " to="/company">Company</Link>
        <Link className=" border-b border-b-gray-600 " to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
