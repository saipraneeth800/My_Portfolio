import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <>
      <div className="lg:flex m-4">
        <div className="lg:w-1/2  p-3">
          <h1 className="text-4xl mb-4 font-medium ">Contact Me</h1>
          <div className="space-y-3 text-lg text-gray-700 dark:text-gray-500 mx-2">
            <div className="flex items-center gap-4 flex-wrap">
              <FontAwesomeIcon icon={faLocationDot} className="text-gray-500" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempore, perspiciatis!
              </p>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <FontAwesomeIcon icon={faPhone} className="text-gray-500" />
              <p>+91 123-456-7890</p>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <FontAwesomeIcon icon={faEnvelope} className="text-gray-500" />
              <p>lorem@gmail.com</p>
            </div>
            <h2>Social Media :</h2>
            <div className="space-x-10">
              <a
                className="  text-gray-400 duration-300  hover:text-[#4267B2]"
                href="#"
              >
                <FontAwesomeIcon icon={faFacebookF} className=" h-10" />
              </a>
              <a
                className=" dark:hover:text-white text-gray-400  duration-300  hover:text-[#171515]"
                href="https://github.com/saipraneeth800"
                target="blank"
              >
                <FontAwesomeIcon icon={faGithub} className=" h-10" />
              </a>
              <a
                className=" text-gray-400  duration-300  hover:text-[#4285F4]"
                href="#"
              >
                <FontAwesomeIcon icon={faEnvelope} className="h-10" />
              </a>
              <a
                className=" text-gray-400 duration-300  hover:text-[#1DA1F2]"
                href="#"
              >
                <FontAwesomeIcon icon={faTwitter} className="h-10" />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 item-center flex-wrap dark:border dark:border-gray-700">
          <div className=" shadow-2xl m-auto">
            <div className="p-4 md:p-12 text-center">
              <form className="mt-5">
                <div>
                  <label className="mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Full Name :{" "}
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700  "
                  />
                </div>

                <div className="flex-1 mt-6">
                  <label className="mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter"
                    className="w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700  "
                  />
                </div>

                <div className="w-full mt-6">
                  <label className="mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Message
                  </label>
                  <textarea
                    placeholder="Message"
                    className="w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700  h-32"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white  transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
