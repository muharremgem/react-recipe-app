import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

const Details = () => {
  const { state: detail } = useLocation();
  console.log(detail);

  return (
    <div>
      <Navbar />
      <p className="text-3xl text-center mt-5 font-semibold">{detail.label}</p>
      <div className="flex justify-evenly items-center h-[30rem] flex-wrap">
        <ul>
          <p className="text-xl">Nutriens</p>
          <li>Calcium: {detail.digest[5].total.toFixed()}mg</li>
        </ul>
        <img
          src={detail.image}
          alt="img"
          width="200px"
          className="rounded-lg "
        />
      </div>
      <ul className="mt-6 ">
        <p className="text-xl ">Recipe</p>
        {detail.ingredientLines.map((item, idx) => (
          <li key={idx}> {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Details;
