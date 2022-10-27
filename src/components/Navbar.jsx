import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="bg-green-500  font-bold text-white text-xl flex justify-between cursor-pointer items-end py-5 z-10 w-full ">
        <NavLink
          className="ml-5 transition ease-in-out delay-100 hover:scale-125"
          to="/home"
          style={({ isActive }) => ({
            color: isActive ? "white" : "",
          })}
        >
          Food House
        </NavLink>

        <div className=" flex gap-5   pr-5  ">
          <NavLink
            className=" transition ease-in-out delay-100 hover:scale-125"
            to="/Home"
            style={({ isActive }) => ({
              color: isActive ? "orange" : "",
            })}
          >
            Home
          </NavLink>
          <NavLink
            className="transition ease-in-out delay-100 hover:scale-125 text-white"
            to="/about"
            style={({ isActive }) => ({
              color: isActive ? "orange" : "",
            })}
          >
            About
          </NavLink>
          <NavLink
            className="transition ease-in-out delay-100 hover:scale-125"
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "black" : "",
            })}
          >
            Logout
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
