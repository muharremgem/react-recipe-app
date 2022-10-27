import React from "react";
import Navbar from "../components/Navbar";
import testi from "../assets/testimonial.png";
import offer from "../assets/offer.png";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className=" bg-blue-300 w-full h-screen flex flex-col ">
        <img className="w-[50rem]" src={testi} alt="about" />

        <img className="w-[50rem] mt-20" src={offer} alt="about" />
      </div>
    </div>
  );
};

export default About;
