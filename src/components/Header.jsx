import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";

const Header = () => {
  const [searchBar, setSearchBar] = useState(null);
  const [meal, setMeal] = useState(null);
  const [data, setData] = useState(null);

  const api_key = "06e7953f7ab0c04a47b1075c5a711721";
  const app_id = "a80f9f73";

  const getApi = () => {
    axios
      .get(
        `https://api.edamam.com/search?q=${searchBar}&app_id=${app_id}&app_key=${api_key}&mealType=${meal}`
      )
      .then((res) => {
        console.log(res.data.hits);
        setData(res.data.hits);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center mt-5 flex-wrap">
        <div className="flex gap-7">
          <input
            className="p-1 "
            type="text"
            placeholder="Search"
            onChange={(e) => {
              setSearchBar(e.target.value);
            }}
          />
          <select
            className="flex text-center rounded-lg p-2 m-3 bg-green-400"
            onChange={(e) => {
              setMeal(e.target.value);
            }}
          >
            <option value="breakfast">Breakfast</option>
            <option value="brunch">Brunch</option>
            <option value="lunch">Lunch</option>
            <option value="snack">Snack</option>
            <option value="teatime">Teatime</option>
          </select>
          <button
            className="rounded-lg text-white w-[5rem]"
            onClick={() => getApi()}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        {data && data.map((item, idx) => <RecipeCard data={item} key={idx} />)}
      </div>
    </>
  );
};

export default Header;
