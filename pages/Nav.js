import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faBars,
  faHome,
  faDiagramProject,
  faUser,
  faContactCard,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Nav({ fixed }) {
  const [navopen, setNavopen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [cl, setCl] = useState(false);

  useEffect(() => setCl(true), []);

  if (!cl) return null;

  return (
    <>
      <nav className="z-50 flex flex-wrap w-full  fixed items-center m-auto lg:p-5 bg-gray-50 dark:bg-gray-800 mb-3 bg-gray-0 ">
        <div className="px-4 mx-auto">
          <div className="w-full gap-10 flex justify-between lg:w-auto">
            <a
              className="text-xl  font-bold leading-relaxed mr-4 py-2"
              href="#"
            >
              SP.
              {/* <img src="/logo.png"  /> */}
            </a>

            <label className="flex items-center gap-3 relative cursor-pointer">
              <h1 className="text-xl ">
                {theme === "light" ? (
                  <FontAwesomeIcon icon={faSun} />
                ) : (
                  <FontAwesomeIcon icon={faMoon} />
                )}
              </h1>
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              />

              <div className="w-12 h-6 bg-gray-200   rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full after:absolute after:top-[14px]  after:left-[33px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-700"></div>
            </label>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 "
              type="button"
              onClick={() => setNavopen(!navopen)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div
            className={" justify-center " + (navopen ? " flex " : " hidden ")}
          >
            <ul className="flex cursor-pointer flex-col ">
              <motion.li
                whileHover={{ scale: 1.2, originX: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  activeClass="active"
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="p-3 flex items-center uppercase font-bold  hover:opacity-75"
                  onClick={() => {
                    setNavopen(!navopen);
                  }}
                >
                  <FontAwesomeIcon
                    icon={faHome}
                    className="text-lg leading-lg  opacity-75"
                  />
                  <span className="ml-2">Home</span>
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.2, originX: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  activeClass="active"
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="p-3 flex items-center  uppercase font-bold  hover:opacity-75"
                  onClick={() => {
                    setNavopen(!navopen);
                  }}
                >
                  <FontAwesomeIcon
                    icon={faDiagramProject}
                    className="text-lg leading-lg  opacity-75"
                  />
                  <span className="ml-2">Projects</span>
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.2, originX: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => {
                    setNavopen(!navopen);
                  }}
                  className="p-3 flex items-center  uppercase font-bold  hover:opacity-75"
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-lg leading-lg  opacity-75"
                  />
                  <span className="ml-2">About</span>
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.2, originX: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="p-3 flex items-center  uppercase font-bold  hover:opacity-75"
                  onClick={() => {
                    setNavopen(!navopen);
                  }}
                >
                  <FontAwesomeIcon
                    icon={faContactCard}
                    className="text-lg leading-lg  opacity-75"
                  />
                  <span className="ml-2">Contact</span>
                </Link>
              </motion.li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
