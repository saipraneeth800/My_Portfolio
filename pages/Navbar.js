import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun,faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Navbar = () => {
  const [navcolor, setNavcolor] = useState(false);
  const [navopen,setNavopen] = useState(false);


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
        <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavopen(!navopen)}
            >
              <FontAwesomeIcon icon={faBars}/>
            </button>
        <div
          className={"lg:flex w-full md:block md:w-auto text-2xl text-white " + (navopen?" flex ":" hidden ")}
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto space-x-8  md:text-lg dark:border-gray-700">
            <li>
              <a
                href="#"
                className="dark:text-white hover:text-[#9CD3D8]"
               
              >
                Home
              </a>
            </li>
            <li>
            <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >HHH</a>
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
            <label className=" relative cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              />

              <div className="w-12 h-6 bg-gray-200   rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full after:absolute after:top-[1.5px]  after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600"></div>
            </label>
          </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
