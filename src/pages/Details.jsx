import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

const Details = () => {
  const { state: detail } = useLocation();
  console.log(detail);

  return (
    <div className="min-h-screen bg-green-300">
      <Navbar />
      <p className="text-3xl text-center mt-5 font-semibold">{detail.label}</p>
      <div className="flex justify-evenly items-center h-[30rem] flex-wrap">
        <ul>
          <p className="text-xl">Nutriens</p>
          <li>Calcium: {detail.digest[5].total.toFixed()}mg</li>
          <li>Carbs: {detail.digest[1].total.toFixed()}g</li>
          <li>Cholesterol: {detail.digest[3].total.toFixed()}mg</li>
          <li>Energy: {detail.calories.toFixed()}kcal</li>
          <li>Fat: {detail.digest[0].total.toFixed()}</li>
          <li>Carbs: {detail.digest[1].total.toFixed()}</li>
          <li>Protein: {detail.digest[2].total.toFixed()}</li>
          <li>Cholesterol: {detail.digest[3].total.toFixed()}</li>
        </ul>
        <img
          src={detail.image}
          alt="img"
          width="200px"
          className="rounded-lg "
        />
      </div>
      <ul className="mt-6 ">
        <p className="text-xl flex justify-center ">Recipe</p>
        {detail.ingredientLines.map((item, idx) => (
          <li className="flex justify-center font-bold mt-5" key={idx}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Details;
