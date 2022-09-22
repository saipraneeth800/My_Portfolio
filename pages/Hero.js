import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  const [topbutton, setTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setTopButton(true);
      } else {
        setTopButton(false);
      }
    });
  }, []);
  const name = ["S", "a", "i", " ", "P", "r", "a", "n", "e", "e", "t", "h"];

  return (
    <>
      <div
        className="relative flex flex-col p-6 m-auto lg:flex-row lg:items-center"
        id="hero"
      >
        <div className="lg:w-3/5 p-10 lg:mt-10">
          {/* <h1 className='text-3xl m-4 font-semibold'> */}
          <h2 className="ml-4 text-xl text-blue-400">Hi, I am</h2>
          {/* <h1 className='text-3xl m-4 font-medium tracking-wider text-blue-900 dark:text-white lg:text-5xl'>
            Sai Praneeth
        </h1> */}
          <motion.div className="flex tracking-widest cursor-pointer m-4 ">
            {name.map((cur, i) => {
              return (
                <motion.pre
                  key={i}
                  className="text-3xl font-medium text-blue-900 dark:text-white lg:text-5xl font-sans"
                  initial={{ scale: i }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.2, originX: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {cur}
                </motion.pre>
              );
            })}
          </motion.div>
          <hr className="m-4 lg:w-80 w-46 h-1 bg-gray-100 rounded border-0  dark:bg-gray-700" />
          <h3 className="m-4  text-blue-500">Front-End Developer</h3>
          {/* <p className="m-4 mb-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            adipisci perspiciatis ea beatae dicta, eius voluptatibus rerum?
            Commodi, saepe pariatur.
          </p> */}

          <a href="/resume/Sai_praneeth.pdf" target="_blank" rel="noreferrer">
            <motion.button
              whileHover={{ scale: 1.2, originX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="border-none p-3 m-4 rounded-lg w-40 bg-blue-600 hover:bg-blue-700 shadow-2xl shadow-blue-500/50 text-white"
            >
              Resume
            </motion.button>
          </a>
        </div>
        <div className="flex items-center justify-center scale-90 lg:w-1/2 lg:mt-10">
          <img
            src="/sai11.png"
            alt=""
            className="rounded-md dark:bg-gray-800"
          />
        </div>
      </div>
      {topbutton && (
        <button
          className="fixed lg:m-4 m-2 bottom-0 right-0 rounded-full bg-blue-300 dark:bg-gray-700 hover:scale-125 duration-300 text-gray-600 dark:text-white"
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          <FontAwesomeIcon icon={faArrowUp} className="lg:h-5  lg:m-4 m-2" />
        </button>
      )}
    </>
  );
};

export default Hero;
