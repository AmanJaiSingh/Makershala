import React from "react";

export const Header = () => {
  return (
    <div className="w-screen h-80 md:h-28 bg_1 md:pt-8 text-white">
      <div className="flex md:flex-row flex-col justify-between pr-10 xs:text-xs lg:pr-20 pl-10 lg:pl-44 text-2xl font-semibold">
        <h1 className="text-orange-400 cursor-pointer">Courses</h1>
        <div className="cursor-pointer md:p-0 p-4">
          <h1>DIY Hub</h1>
          <h1 className="text-sm text-orange-400">COMMING SOON</h1>
        </div>
        <div className="-mt-5 cursor-pointer flex justify-around">
          <a src="https://www.makershala.com/">
            <img
              className="h-24 "
              src="https://www.makershala.com/images/svg/logo.svg"
            />
          </a>
        </div>
        <h1 className="cursor-pointer">Competitions </h1>
        <h1 className="cursor-pointer">Blog</h1>
        <div>
          <button className=" duration-400 text-sm md:text-2xl w-2/12 md:w-full mb-10 bg-orange-500 hover:bg-orange-400 text-white font-bold lg:py-2 py-2 lg:px-8 px-3 border-b-4 border-orange-700 hover:border-orange-500 rounded-xl">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};
