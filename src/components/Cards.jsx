import React from "react";
import single from ".././assets/single.png";
import double from ".././assets/double.png";
import triple from ".././assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 py-4 my-8 rounded-lg hover:scale-105  duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={single}
            alt="/"
          />
          <h2 className="text-center text-2xl font-bold py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center text-medium mt-8">
            <p className="py-2 border-b mx-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] mx-auto font-medium rounded-md my-6 py-3 text-black">
            Get Started
          </button>
        </div>
        <div className="w-full shadow-xl md:my-0 bg-gray-100 flex flex-col p-4 py-4 my-4 rounded-lg hover:scale-105  duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={double}
            alt="/"
          />
          <h2 className="text-center text-2xl font-bold py-8">Partnership</h2>
          <p className="text-center text-4xl font-bold">$199</p>
          <div className="text-center text-medium mt-8">
            <p className="py-2 border-b mx-8">1TB Storage</p>
            <p className="py-2 border-b mx-8">3 User Allowed</p>
            <p className="py-2 border-b mx-8">Send up to 10 GB</p>
          </div>
          <button className="bg-[#000000] w-[200px] mx-auto font-medium rounded-md my-6 py-3 text-[#00df9a]">
            Get Started
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 py-4 my-8 rounded-lg hover:scale-105  duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={triple}
            alt="/"
          />
          <h2 className="text-center text-2xl font-bold py-8">Group Acount</h2>
          <p className="text-center text-4xl font-bold">$199</p>
          <div className="text-center text-medium mt-8">
            <p className="py-2 border-b mx-8">5 TB storage</p>
            <p className="py-2 border-b mx-8">10 Users Allowed</p>
            <p className="py-2 border-b mx-8">Send up to 20 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] mx-auto font-medium rounded-md my-6 py-3 text-black">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
