import React from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export const Card = (img) => {
  return (
    <div
      class="lg:my-5 my-2 mx-0
     lg:mx-6"
    >
      <div class="max-w-sm w-11/12 mx-auto overflow-hidden bg-white  rounded-3xl shadow-lg ">
        <img class="object-cover w-full h-52" src={img.img} alt="NIKE AIR" />

        <div className="text-xl">
          <div className="relative left-48 text-left pl-5 bottom-48 -mt-5 banner_1 pt-2  m-0 text-white text-xs  font-thin">
            <AccessTimeIcon style={{ fontSize: 16 }} /> Ends in 8 days
          </div>
          <h1 className="text-left font-medium p-3 -mb-1">
            Little Wizards - Clay Modelling competition 2021
          </h1>
          <div className="text-gray-500  text-xs text-justify ml-2">
            <h3 className="m-1">
              <PermIdentityIcon
                style={{ fontSize: 18 }}
                className="mr-1 mb-0.5"
              />
              3 Members teams
            </h3>
            <h3 className="m-1">
              <CalendarTodayIcon
                style={{ fontSize: 18 }}
                className="mr-1 mb-0.5"
              />
              For 7-8 years olds
            </h3>
            <h3 className="m-1">
              <EmojiEventsIcon
                style={{ fontSize: 18 }}
                className="mr-1 mb-0.5"
              />
              19 prizes worth Rs.2,00,000
            </h3>
          </div>
          <div className="w-full border-t"></div>
          <div>
            <button className="m-5 w-6/12 bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded-xl">
              Enter Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
