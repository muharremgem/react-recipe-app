import React from "react";
import "./Login.css";
import meal from "../assets/header.png";
import asc from "../assets/ascı.jpg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="nav">
      <h1 className="site_heading">Food House</h1>
      <h2 className="site_subheading">
        Login to See All of the Delicious Recipes
      </h2>
      <div className="meal">
        <form className="log" onSubmit={() => navigate("Home")}>
          <img className="asc" src={asc} alt="as" />
          <input type="text" name="name" required placeholder="Your name" />
          <input
            type="password"
            name="pass"
            required
            placeholder="Your password"
          />
          <button type="submit" className=" text-white bg-green-500">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
