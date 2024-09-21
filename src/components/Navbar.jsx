import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className= "text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className=" w-full text-3xl font-bold text-[#00df9a]">AGENTt.</h1>
      <div className="flex gap-8">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/company">Company</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
