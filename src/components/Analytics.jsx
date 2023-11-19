import React from "react";
import Laptop from ".././assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold uppercase">
            Data Analytics Dashboard
          </p>
          <h1 className="text-2xl font-bold py-2 md:text-4xl sm:text-3xl">
            Manage data Analytics centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            architecto ut voluptates vero libero fugiat unde, rerum earum magni,
            deleniti quis voluptatem vel? Ipsum quisquam quas, esse unde facere
            explicabo.
          </p>
          <button className="bg-black w-[200px] md:mx-0 mx-auto font-medium rounded-md my-6 py-3 text-[#00df9a]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
