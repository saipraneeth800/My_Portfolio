import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Navbar = () => {
  const [navcolor, setNavcolor] = useState(false);
  const { theme, setTheme } = useTheme();
  const [cl, setCl] = useState(false);
  useEffect(() => setCl(true), []);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setNavcolor(true);
    } else {
      setNavcolor(false);
    }
  };
  // window.addEventListener('scroll',changeColor)
  if (!cl) return null;
  return (
    <>
      <div className="bg-gray-700 dark:bg-gray-900 sticky top-0 z-10 flex justify-around items-center h-20 shadow-lg">
        <div>
          <h1 className="text-2xl text-white">LOGO</h1>
        </div>
        {/* <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button> */}
        <div
          className="hidden w-full md:block md:w-auto text-2xl text-white"
        >
          <ul className="flex space-x-8  md:text-lg dark:border-gray-700">
            <li>
              <a
                href="#"
                className="dark:text-white hover:text-[#9CD3D8]"
               
              >
                Home
              </a>
            </li>
            <li>
              <Link href="/Project">
                <a
                  className="dark:text-white hover:text-[#9CD3D8]"
                 
                >
                  Projects
                </a>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="dark:text-white hover:text-[#9CD3D8]"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="dark:text-white hover:text-[#9CD3D8]"
              >
                Contact
              </a>
            </li>
            {/* <a href="#" className='hover:text-[#FFD116]'>Home</a> */}

          <li className="flex items-center gap-4">
          <h1 className="text-xl">

            {theme === "light" ? (
              <FontAwesomeIcon icon={faMoon} />
            ) : (
              <FontAwesomeIcon icon={faSun} />
            )}
          </h1>
            <label class=" relative cursor-pointer">
              <input
                type="checkbox"
                value=""
                class="sr-only peer"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              />

              <div class="w-12 h-6 bg-gray-200   rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full after:absolute after:top-[1.5px]  after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600"></div>
            </label>
          </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
