import React from "react";
import Navbar from "../components/Navbar";
import testi from "../assets/testimonial.png";
import offer from "../assets/offer.png";
import { SiGithub } from "react-icons/si";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className=" bg-blue-300 w-full h-screen flex flex-col ">
        <img className="w-full" src={testi} alt="about" />
        <p className="flex justify-center text-3xl font-bold mt-2">
          Lezzetli Yemek Tarifleri İçin Lütfen Bize Ulaşın...=)
          <a href={SiGithub}>{SiGithub}</a>
        </p>
        <img className="w-full  mt-36" src={offer} alt="about" />
      </div>
    </div>
  );
};

export default About;
