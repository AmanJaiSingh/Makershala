import React from "react";
import { Card } from "../plates/Card";
import StarIcon from "@mui/icons-material/Star";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import FavoriteIcon from "@mui/icons-material/Favorite";
import img from "./imgs";

export const Body = () => {
  return (
    <div className="text-black w-screen  font-bold p-24">
      <EmojiEventsIcon
        className="absolute rotate-12 top-80  md:right-96   text-orange-400"
        style={{ fontSize: 80 }}
      />
      <MilitaryTechIcon
        className="absolute -rotate-12 md:top-80 bottom-72 left-12  text-orange-400"
        style={{ fontSize: 80 }}
      />
      <FavoriteIcon
        className="absolute rotate-12 md:top-44  bottom-96 md:left-72 left-36 text-orange-400"
        style={{ fontSize: 80 }}
      />
      <StarIcon className="absolute  md:left-16 left-20 top-96  md:top-44 rotate-12 text-orange-400" />
      <StarIcon className="absolute  md:left-96 left-52 md:top-80 bottom-60 -rotate-12 text-orange-400" />
      <StarIcon className="absolute  right-36 md:top-44 bottom-96 rotate-12 text-orange-400" />
      <StarIcon
        style={{ fontSize: 40 }}
        className="absolute text-3xl right-24 md:top-80 bottom-52 -rotate-12 text-orange-400"
      />
      <div className="-left-32 circle_1  h-52 w-52 rounded-full absolute bg-gradient-to-b from-orange-300 to-orange-500"></div>
      <div className="circle_2 -right-32   h-52 w-52 rounded-full absolute bg-gradient-to-b from-cyan-300 to-cyan-500"></div>
      <div className="bottom-36 -right-32   h-52 w-52 rounded-full absolute bg-gradient-to-b from-red-300 to-red-500"></div>
      <h1 className="text-4xl"> Competitions</h1>
      <h1 className="text-lg font-normal mt-2">
        Grow your project building skills by competing in out exiting
        competitions.
      </h1>
      <h1 className="text-lg font-normal">
        You can compete as a team member or individually.
      </h1>
      <div className="flex flex-wrap lg:m-6 m-2 lg:mt-10 mt-5 ">
        {img.map((e) => {
          return <Card img={e[0]} />;
        })}
      </div>
    </div>
  );
};
