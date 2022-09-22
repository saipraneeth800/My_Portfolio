import React from "react";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="lg:flex m-4 " id="contact">
        <div className="lg:w-1/2  p-3">
          {/* <div className="lg:w-1/2  p-3 bg-[url('/contact.svg')] bg-no-repeat  bg-contain bg-bottom "> */}
          <h1 className="text-4xl mb-4 font-medium text-blue-900 dark:text-blue-700 ">
            Contact Me
          </h1>
          <div className="space-y-3 text-lg text-gray-700 dark:text-gray-500 mx-2">
            <motion.div
              whileHover={{ scale: 1.1, originX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center gap-4 cursor-pointer"
            >
              <FontAwesomeIcon icon={faLocationDot} className="text-gray-500" />
              <p>Sai Nanda Nilayam, Subbalakshmi Nagar, Visakhapatnam-16</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, originX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center gap-4 cursor-pointer"
            >
              <FontAwesomeIcon icon={faPhone} className="text-gray-500" />
              <p>+91 800-851-5517</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, originX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center gap-4 cursor-pointer"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-gray-500" />
              <p>praneethsai800@gmail.com</p>
            </motion.div>
            <h2 className="text-blue-700">Social Media :</h2>
            <div>
              <ul className="flex lg:space-x-10 space-x-7">
                <motion.li
                  whileHover={{ scale: 1.2, originX: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    className="  text-gray-400 duration-300  hover:text-[#4267B2]"
                    href="https://www.facebook.com/manukonda.saipraneeth"
                    target="_blank"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      className=" lg:h-10 h-6"
                    />
                  </a>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.2, originX: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    className=" dark:hover:text-white text-gray-400  duration-300  hover:text-[#171515]"
                    href="https://github.com/saipraneeth800"
                    target="blank"
                  >
                    <FontAwesomeIcon icon={faGithub} className=" lg:h-10 h-6" />
                  </a>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.2, originX: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    className=" text-gray-400  duration-300  hover:text-[#D44638] "
                    href="mailto:praneethsai800@gmail.com"
                    target="blank"
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="lg:h-10 h-6"
                    />
                  </a>
                </motion.li>
                {/* <motion.li whileHover={{scale:1.2,originX:0}} transition={{ type: "spring", stiffness: 300}}>

              <a
                className=" text-gray-400 duration-300  hover:text-[#1DA1F2]"
                href="#"
              >
                <FontAwesomeIcon icon={faTwitter} className="lg:h-10 h-6" />
              </a>
            </motion.li> */}
                <motion.li
                  whileHover={{ scale: 1.2, originX: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    className="text-gray-400 hover:text-[#e13060]  duration-300 "
                    href="#"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="lg:h-10 h-6 "
                      aria-hidden="true"
                    />
                  </a>
                </motion.li>
                {/* <motion.li whileHover={{scale:1.2,originX:0}} transition={{ type: "spring", stiffness: 300}}>

              <a
                className="text-gray-400 hover:text-[#0A66C2]  duration-300 "
                href="#"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="lg:h-10 h-6 " aria-hidden="true"/>
                
              </a>
            </motion.li> */}
              </ul>
            </div>
            <img src="/contact.svg" alt="contact" className="w-3/4"></img>
          </div>
        </div>

        <div className="lg:w-1/2 item-center flex-wrap dark:border dark:border-gray-700">
          <div className=" shadow-2xl m-auto">
            <div className="p-4 md:p-12 text-center">
              <form
                method="POST"
                action="https://script.google.com/macros/s/AKfycbw0pMxX6NcpxvGLGTm7QIfSIeDi5bqZGF0pr21sBrJ7tG9a6p4-COz1Q7Bw5-32tOs4/exec"
                onSubmit={handleSubmit}
                className="mt-5"
              >
                <div>
                  <label className="mb-2 text-sm text-blue-600 dark:text-gray-200">
                    Full Name :{" "}
                  </label>
                  <input
                    type="text"
                    name="Name"
                    placeholder="Enter Your Name"
                    className="w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700  "
                  />
                </div>

                <div className="flex-1 mt-6">
                  <label className="mb-2 text-sm text-blue-700 dark:text-gray-200">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="Email"
                    placeholder="Enter email"
                    className="w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700  "
                  />
                </div>

                <div className="w-full mt-6">
                  <label className="mb-2 text-sm text-blue-700 dark:text-gray-200">
                    Message
                  </label>
                  <textarea
                    placeholder="Message"
                    name="Message"
                    className="w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700  h-32"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white  transition-colors duration-300 transform bg-blue-700 rounded-lg hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700"
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
