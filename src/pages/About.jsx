import React from "react";
import Navbar from "../components/Navbar";
import testi from "../assets/testimonial.png";
import offer from "../assets/offer.png";
import { SiGithub, SiLinkedin } from "react-icons/si";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className=" bg-blue-300 w-full h-screen flex flex-col ">
        <img className="w-full" src={testi} alt="about" />
        <p className="flex justify-center text-3xl font-bold mt-2">
          Lezzetli Yemek Tarifleri İçin Lütfen Bize Ulaşın...=)
        </p>
        <a
          href="https://github.com/muharremgem"
          className="flex flex-wrap justify-center"
          target="_blank"
        >
          <SiGithub className="text-5xl mt-5 font-bold" />
        </a>
        <a
          href="https://www.linkedin.com/in/muharremgem/"
          className="flex flex-wrap justify-center"
          target="_blank"
        >
          <SiLinkedin className="text-5xl mt-5 font-bold" />
        </a>
        <img className="w-full  mt-20" src={offer} alt="about" />
      </div>
    </div>
  );
};

export default About;
