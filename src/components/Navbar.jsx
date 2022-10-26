import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        <h1>Food House</h1>
        <a href="">About</a>
        <a href="">Logout</a>
        <Link to="/">Github</Link>
      </div>
    </div>
  );
};

export default Navbar;
