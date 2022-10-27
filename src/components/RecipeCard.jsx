import React from "react";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ data }) => {
  const navigate = useNavigate();
  console.log(data.recipe);
  return (
    <div>
      <p>{data.recipe.label}</p>
      <img
        src={data.recipe.image}
        alt=""
        width="150px"
        className="rounded-lg"
      />
      <button
        className="rounded-lg bg-black text-white p-1 w-[5rem] mt-2"
        onClick={() => navigate("/details", { state: data.recipe })}
      >
        Details
      </button>
    </div>
  );
};

export default RecipeCard;
