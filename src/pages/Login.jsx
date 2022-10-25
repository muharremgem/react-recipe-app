import React from "react";
import "./Login.css";
import meal from "../assets/header.png";

const Login = () => {
  return (
    <div>
      <h1 className="site_heading">Food House</h1>
      <h2 className="site_subheading">
        Login to See All of the Delicious Recipes
      </h2>
      <img className="meal" src={meal} alt="asd"  />
    </div>
  );
};

export default Login;
