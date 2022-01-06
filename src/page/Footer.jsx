import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export const Footer = () => {
  return (
    <div>
      <div className="h-44 overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#6308bd"
            fill-opacity="1"
            d="M0,32L60,26.7C120,21,240,11,360,21.3C480,32,600,64,720,85.3C840,107,960,117,1080,106.7C1200,96,1320,64,1380,48L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className=" bg_1 pt-5 p-20 ">
        <div className="h-auto flex justify-around ">
          <div className="-mt-5 w-4/12  cursor-pointer t ">
            <a src="https://www.makershala.com/">
              <img
                className="h-36"
                src="https://www.makershala.com/images/svg/logo.svg"
              />
            </a>
          </div>
          <div className=" w-full lg:w-7/12 px-4">
            <div className=" flex flex-wrap items-top mb-6">
              <div className=" w-full lg:w-4/12 px-4 ml-auto">
                <span className=" block uppercase text-orange-400 text-sm cursor-default font-semibold mb-2">
                  {" "}
                  ohk
                </span>
                <ul className=" list-unstyled">
                  <li>
                    <a className=" text-orange-100 duration-200 hover:text-orange-500 font-semibold block pb-2 text-sm">
                      Makerbazar
                    </a>
                  </li>
                  <li>
                    <a className="duration-300 text-orange-100 hover:text-orange-500 font-semibold block pb-2 text-sm">
                      Makerkits
                    </a>
                  </li>
                  <li>
                    <a className="duration-300 text-orange-100 hover:text-orange-500 font-semibold block pb-2 text-sm">
                      Makermentor
                    </a>
                  </li>
                  <li>
                    <a className="duration-300 text-orange-100 hover:text-orange-500 font-semibold block pb-2 text-sm">
                      Makerlab
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" w-full lg:w-4/12 px-4 ml-auto">
                <span className=" block uppercase text-red-400 text-sm font-semibold mb-2">
                  About
                </span>
                <ul className=" list-unstyled">
                  <li>
                    <a className="duration-300 text-red-100 hover:text-red-500 font-semibold block pb-2 text-sm">
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a className="duration-300 text-red-100 hover:text-red-500 font-semibold block pb-2 text-sm">
                      Benefits
                    </a>
                  </li>
                  <li>
                    <a className="duration-300 text-red-100 hover:text-red-500 font-semibold block pb-2 text-sm">
                      Team
                    </a>
                  </li>
                  <li>
                    <a className="duration-300 text-red-100 hover:text-red-500 font-semibold block pb-2 text-sm">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" w-full lg:w-4/12 px-4">
                <span className=" block uppercase text-red-400 text-sm font-semibold mb-2">
                  Help
                </span>
                <ul className=" list-unstyled">
                  <li>
                    <a className="duration-300 text-red-100 hover:text-red-500 font-semibold block pb-2 text-sm">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a className="duration-300 text-red-100 hover:text-red-500 font-semibold block pb-2 text-sm">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a className="duration-300 text-red-100 hover:text-red-500 font-semibold block pb-2 text-sm"></a>
                  </li>
                  <li>
                    <a className="duration-300 text-red-100 hover:text-red-500 font-semibold block pb-2 text-sm"></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row px-7 text-white text-base justify-between">
          <div className="flex flex-row justify-between w-5/12">
            <h1 className="hover:text-orange-400 duration-200 cursor-pointer">
              Terms and Condition
            </h1>
            <h1 className="hover:text-orange-400 duration-200 cursor-pointer">
              Privacy policy
            </h1>
            <h1 className="hover:text-orange-400 duration-200 cursor-pointer">
              Payment refund
            </h1>
          </div>
          <div className="flex flex-row justify-between w-2/12">
            <a className="hover:text-orange-400 cursor-pointer duration-300">
              <FacebookIcon />
            </a>
            <a className="hover:text-orange-400 cursor-pointer duration-300 ">
              <InstagramIcon />
            </a>
            <a className="hover:text-orange-400 cursor-pointer duration-300">
              <TwitterIcon />
            </a>
          </div>
        </div>
        <div className="mt-28 ml-7 text-white text-left">
          <p className="mb-10 ">
            <h1 className="text-lg font-semibold ">About Makershala</h1>
            Today, in the computer age, not all schools teach coding in early
            childhood resulting in a major gap in the requirements of the new
            world and our children's skills. WhiteHat Jr introduces and prepares
            your child from 6-18 years for this new coding world. They learn
            fundamentals of coding--logic, structure, sequence and algorithmic
            thinking--to generate creative outcomes like animations and apps.
            All classes are taught Live 1:1 Online in the comfort of your home
            by Top 1% selected teachers and subject matter experts.
          </p>
          <p className="mb-10">
            <h1 className="text-lg font-semibold ">Coding For Kids</h1>
            Whether you are a student interested in the IT careers that you
            could explore with a coding qualification or just fascinated by the
            world of tech and coding courses, WhiteHat Jr offers a wide range of
            online coding courses that make coding accessible to kids and young
            teenagers. We've put together a simple guide to answer some of the
            most commonly asked questions from parents and prospective students
            to help you understand the basics of what our kids programming
            courses cover, whether they are right for your child and how best to
            navigate them.
          </p>
          <p className="mb-10">
            <h1>
              Curious about what is involved in courses for coding for kids?
            </h1>
            We have developed kids programming courses that allow kids, teens,
            and young adults to learn how to code at all ages with proper coding
            classes and in an environment that works for them – Online. The
            courses offered by WhiteHat Jr are designed to teach kids to code
            with core programming skills, and then improve the proficiency of
            the kids coding languages. Our facilitators align digital literacy
            into coding courses, as required by the existing skills of the
            learners. Since our curriculum is developed by industry experts and
            the most important activity of teaching coding is done by top 1%
            selected teachers, learners get state of the art education through
            our propriety, creative activity based curriculum.
          </p>
          <p className="mb-10">
            <h1 className="text-lg font-semibold ">
              Are coding classes for kids suitable?
            </h1>
            When you're a parent exploring the possibilities that coding classes
            for kids can bring, you 're probably wondering whether coding
            courses will suit your child. The benefits of learning to code
            courses extend far beyond future job opportunities. WhiteHat Jr
            teaches coding for kids in programs designed to stimulate
            creativity, problem-solving skills, and academic performance
            overall. Over the longer term, online coding courses are a great way
            to train learners for an increasingly tech-oriented world.
          </p>
          <p className="mb-10">
            <h1 className="text-lg font-semibold ">
              What will you learn in a coding course for kids?
            </h1>
            WhiteHat jr's coding courses are oriented towards coding and
            programming. You will learn:
          </p>
          <p className="mb-10">
            <h1 className="text-lg font-semibold ">
              The essentials of coding:Logix,Structure,Sequence
            </h1>
            <h1>How to create Websites, Animations & Apps</h1>
            <h1>How to manipulate data using programming languages</h1>
            <h1>How to be a problem solver</h1>
            <h1>How technologies converse with each other</h1>
          </p>
          <p className="mb-10">
            <h1 className="text-lg font-semibold mb-5">
              Start to learn coding with us!
            </h1>
            If you are a motivated parent and passionate about technology and
            where it can lead you to, then Join now. If you or your child would
            like to find out more about the opportunities provided by our coding
            programs, explore the kids programming courses offered by WhiteHat
            Jr and consider enrolling for a free trial. Remember, no coding
            experience beforehand is required.
          </p>
        </div>
      </div>
    </div>
  );
};
