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
      <div className="meal">
        <form className="log">
          <input type="text" name="name" required placeholder="Your name" />
          <input
            type="password"
            name="pass"
            required
            placeholder="Your password"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
