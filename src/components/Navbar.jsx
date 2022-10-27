import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="bg-green-500 font-bold text-white text-xl flex justify-between cursor-pointer items-end py-5 z-10 w-full ">
        <NavLink
          className="ml-16 "
          to="/home"
          style={({ isActive }) => ({
            color: isActive ? "white" : "",
          })}
        >
          Food House
        </NavLink>

        <div className=" flex gap-5  mr-10 pr-5 ">
          <NavLink
            className=" transition ease-in-out delay-100 hover:scale-125 "
            to="/Home"
            style={({ isActive }) => ({
              color: isActive ? "black" : "",
            })}
          >
            Home
          </NavLink>
          <NavLink
            className=""
            to="/about"
            style={({ isActive }) => ({
              color: isActive ? "black" : "",
            })}
          >
            About
          </NavLink>
          <Link to="/">Logout</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
