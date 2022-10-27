import React from "react";
import axios from "axios";

const Header = () => {
  return (
    <div className="flex justify-center items-center mt-5 flex-wrap">
      <div className="flex gap-7">
        <input className="p-1 " type="text" placeholder="Search" />
        <select className="flex text-center rounded-lg p-2 m-3 bg-green-400">
          <option value="breakfast">Breakfast</option>
          <option value="brunch">Brunch</option>
          <option value="lunch">Lunch</option>
          <option value="snack">Snack</option>
          <option value="teatime">Teatime</option>
        </select>
        <button className="rounded-lg text-white w-[5rem]">Search</button>
      </div>
    </div>
  );
};

export default Header;
