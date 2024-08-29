import React from "react";
import { FaGithub } from "react-icons/fa6";
import HeroImage from "../assets/illustration.png";
const Hero = () => {
  return (
    <div className="grid lg:grid-flow-col place-items-center gap-3  text-sm ">
      <div className="space-y-8 order-2 lg:order-1 flex flex-col items-center text-center">
        <div className="text-3xl font-bold tracking-wider text-[#0A2E36]">
          Free Store API
        </div>
        <p className=" opacity-55">
          Fake store rest API for your e-commerce or shopping website prototype
        </p>
        <a
          href="https://github.com/SaranMuruganM/FreeStore---REST_API"
          target="_blank"
          className="flex items-center gap-4 p-3 border text-m bg-[#036D19] text-white rounded-md w-fit "
        >
          View on GitHub <FaGithub size={20} />
        </a>
      </div>
      <img
        src={HeroImage}
        alt="illustraion shopping"
        className="w-full h-full order-1 lg:order-2"
      />
    </div>
  );
};

export default Hero;
