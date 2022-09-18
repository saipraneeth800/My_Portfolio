import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faCircleUser,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3,
  faSquareJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  const [tab, setTab] = useState(1);

  return (
    <>
      <div className="lg:flex w-[80%] m-auto " id="about">
        <div className="flex justify-center lg:w-1/2 scale-75">
          <img
            src="/sai11.png"
            alt=""
            className="rounded-md dark:bg-gray-800"
          />
        </div>
        <div className="lg:w-1/2 p-4 ">
          <h1 className="text-3xl text-center m-4 font-medium tracking-widest text-blue-900 dark:text-blue-700">
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
          <div className="flex justify-center border-gray-200 dark:border-gray-700">
            <button
              className={
                " h-10 px-6 text-sm border-b-2 hover:border-gray-400 text-center sm:text-base dark:text-white " +
                (tab === 1 && "text-blue-600 border-blue-500 border-b-2")
              }
              onClick={(e) => {
                e.preventDefault(), setTab(1);
              }}
            >
              <FontAwesomeIcon icon={faCircleUser} className="md:pr-2" />
              Profile
            </button>

            <button
              className={
                "h-10 px-8 text-sm text-center text-gray-700 sm:text-base border-b-2 dark:text-white  hover:border-gray-400 " +
                (tab === 2 && "text-blue-600 border-blue-500 border-b-2")
              }
              onClick={(e) => {
                e.preventDefault(), setTab(2);
              }}
            >
              <FontAwesomeIcon icon={faToolbox} className="md:pr-2" />
              Skills
            </button>

            <button
              className={
                "h-10 px-8 text-sm text-center text-gray-700 sm:text-base dark:text-white  border-b-2 hover:border-gray-400 " +
                (tab === 3 && "text-blue-600 border-blue-500 border-b-2")
              }
              onClick={(e) => {
                e.preventDefault(), setTab(3);
              }}
            >
              <FontAwesomeIcon icon={faUserGraduate} className="md:pr-2" />
              Education
            </button>
          </div>
          <div className="dark:bg-gray-800 mt-4 w-full mb-6 shadow-lg   rounded-lg ">
            <div className="px-4 py-5 ">
              <div className={(tab === 1 ? " block " : " hidden ") + " pl-4 space-y-3 "}>
                <p>
                  <span className="text-blue-700">Name : </span>
                  <span>M. Sai Praneeth</span>
                </p>
                <p>
                  <span className="text-blue-700">Place : </span>
                  <span>Visakhapatnam, Andhra Pradesh</span>
                </p>
                <p>
                  <span className="text-blue-700">Profession : </span>
                  <span>Student</span>
                </p>
              </div>
              <div className={(tab === 2 ? " block " : " hidden ")}>
                <ul className="pl-4">
                  <li>
                    <FontAwesomeIcon icon={faHtml5} className="pr-2 " />
                    HTML
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCss3} className="pr-2 pt-3" />
                    CSS
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faSquareJs} className="pr-2 pt-3" />
                    JAVASCRIPT
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faReact} className="pr-2 pt-3" />
                    REACT
                  </li>
                </ul>
              </div>
              <div className={(tab === 3 ? " block " : " hidden ") + " pl-4 "}>
                <p className="flex flex-col gap-2">
                  <span className="text-blue-800">2023</span>
                  <span>MCA, GVPCE</span>
                </p>
                <p className="flex flex-col pt-4 gap-2">
                  <span className="text-blue-800">2021</span>
                  <span>B.Sc, Prism Degree College </span>
                </p>
                <p className="flex flex-col pt-4 gap-2">
                  <span className="text-blue-800">2018</span>
                  <span>
                    MPC,(12<sup>th</sup>) Sri Chaitanya Jr College
                  </span>
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
