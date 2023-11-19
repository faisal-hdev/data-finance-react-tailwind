import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="uppercase text-[#00df9a] font-bold p-2">
          Growing with data analytics
        </p>
        <h1 className="font-bold text-4xl md:text-7xl sm:text-6xl">
          Grow with Data
        </h1>
        <div className="flex justify-center items-center">
          <p className="text-xl font-bold md:text-5xl sm:text-4xl py-4">
            Fast, flexible financing for
          </p>
          <Typed
            className="text-xl font-bold md:text-5xl sm:text-4xl md:pl-4 pl-3"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms
        </p>
        <button className="bg-[#00df9a] w-[200px] mx-auto font-medium rounded-md my-6 py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
