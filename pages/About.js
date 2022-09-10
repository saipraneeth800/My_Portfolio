import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faCircleUser,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const [tab, setTab] = useState(1);

  return (
    <>
      <div className="lg:flex w-[80%] m-auto">
        <div className="flex items-center justify-center lg:w-1/2">
          <img
            src="/sai11.png"
            alt=""
            className="rounded-md dark:bg-gray-800"
          />
        </div>
        <div className="lg:w-1/2 p-4">
          <h1 className="text-3xl text-center m-4 font-medium tracking-widest text-blue-900">
            About Me
          </h1>
          <hr className=" w-56 h-1 m-auto bg-gray-100 rounded border-0  dark:bg-gray-700" />
          <p className="p-4 text-gray-700 dark:text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
            magnam eveniet itaque odio ad commodi architecto veritatis inventore
            accusamus nostrum, asperiores voluptatem corrupti quisquam tenetur.
            Dolor, dolores! Eos, nemo id delectus dolorem fugiat maiores!
            Laboriosam asperiores corrupti temporibus cum omnis!
          </p>
          <div className="flex justify-center border-gray-200 dark:border-gray-700 ">
            <button
              className={
                "h-10  px-8 text-sm border-b-2 hover:border-gray-400 text-center sm:text-base  whitespace-nowrap " +
                (tab === 1 && "text-blue-600 border-blue-500 border-b-2")
              }
              onClick={() => setTab(1)}
            >
              <FontAwesomeIcon icon={faCircleUser} className="pr-4" />
              Profile
            </button>

            <button
              className={
                "h-10 px-8 text-sm text-center text-gray-700 sm:text-base border-b-2 dark:text-white  hover:border-gray-400 " +
                (tab === 2 && "text-blue-600 border-blue-500 border-b-2")
              }
              onClick={() => setTab(2)}
            >
              <FontAwesomeIcon icon={faToolbox} className="pr-4" />
              Skills
            </button>

            <button
              className={
                "h-10 px-8 text-sm text-center text-gray-700 sm:text-base dark:text-white  border-b-2 hover:border-gray-400 " +
                (tab === 3 && "text-blue-600 border-blue-500 border-b-2")
              }
              onClick={() => setTab(3)}
            >
              <FontAwesomeIcon icon={faUserGraduate} className="pr-4" />
              Education
            </button>
          </div>
          <div className="dark:bg-gray-800 mt-4 w-full mb-6 shadow-lg   rounded-lg">
            <div className="px-4 py-5">
              
                <div className={tab === 1 ? "block" : "hidden"}>
                  <p>
                  tab 1111
                    
                  </p>
                </div>
                <div className={tab === 2 ? "block" : "hidden"}>
                  <p>
                  tab 222
                    
                  </p>
                </div>
                <div className={tab === 3 ? "block" : "hidden"}>
                  <p>
                  tab 3333
                  </p>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
