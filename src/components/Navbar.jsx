import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="bg-green-500 text-white font-bold text-xl flex justify-between cursor-pointer items-end py-5 z-10 w-full ">
        <h1 className="ml-16 ">Food House</h1>
        <div className=" flex gap-5  mr-10 pr-5  ">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/">Logout</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
