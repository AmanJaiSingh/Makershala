import React from "react";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import myAvatar from "../img/myAvatar.svg";
import myAvatar_2 from "../img/myAvatar_2.svg";
import myAvatar_3 from "../img/myAvatar_3.svg";

export const Banner = () => {
  return (
    <>
      <div className="flex flex-row justify-around font-bold  text-xs  md:text-lg  w-screen h-8 bg-yellow-400 ">
        <div className="flex md:w-1/12 md:m-0 -ml-5 justify-end">
          <NotificationsActiveIcon className="text-orange-700" />
        </div>
        <div className="md:-ml-48 mt-1   -ml-12">
          Join the Parent Board & enjoy excitiong benefits.
          <a className="text-blue-800 hover:underline duration-300 hover:text-red-500 cursor-pointer">
            Details here
          </a>
        </div>
        <div className="h-10 md:-ml-20  mr-24 w-8 flex flex-row">
          <img className="px-1 pb-2" src={myAvatar} alt="" />
          <img className="px-1 pb-2" src={myAvatar_2} alt="" />
          <img className="px-1 pb-2" src={myAvatar_3} alt="" />
        </div>
      </div>
    </>
  );
};
