import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="text-2xl md:text-4xl sm:text-3xl font-bold py-2">
            Went tips & tricks to optimize your flow
          </h1>
          <p>Sign up to your newsletter and stay up to date</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              name="email"
              placeholder="Enter your email"
              id=""
              required
            />

            <button
              type="submit"
              className="bg-[#00df9a] w-[200px] font-medium rounded-md my-6 ml-4 py-3 text-black"
            >
              Notify Me
            </button>
          </div>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            accusantium{" "}
            <span className="text-[#00df9a]">minima cupiditate!</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
