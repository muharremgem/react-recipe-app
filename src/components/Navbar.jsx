import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <h1>Food House</h1>

      <ul>
        <li>
          <NavLink>Home</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
