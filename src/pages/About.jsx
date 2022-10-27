import React from "react";
import Navbar from "../components/Navbar";
import testi from "../assets/testimonial.png";
import offer from "../assets/offer.png";

const About = () => {
  return (
    <div>
      <Navbar />
      <div>
        <img className="w-[50rem] " src={testi} alt="about" />

        <img className="w-[50rem] ml-[40rem]  mb-7" src={offer} alt="about" />
      </div>
    </div>
  );
};

export default About;
