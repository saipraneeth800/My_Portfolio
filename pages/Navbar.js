import React, { useState } from "react";

const Navbar = () => {
  const [navcolor, setNavcolor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setNavcolor(true);
    } else {
      setNavcolor(false);
    }
  };
  // window.addEventListener('scroll',changeColor)

  return (
    <>
      <div className="bg-[#165952] sticky top-0 z-10 flex justify-around items-center h-20 shadow-lg">
        <div>
          <h1 className="text-2xl">LOGO</h1>
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
        <div  id="navbar-default" className="hidden w-full md:block md:w-auto text-2xl text-white">
        
          <ul class="flex  space-x-8  md:text-lg  dark:border-gray-700">
            <li>
              <a
                href="#"
                class="dark:text-white hover:text-[#9CD3D8]"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                class="dark:text-white hover:text-[#9CD3D8]"
                aria-current="page"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                class="dark:text-white hover:text-[#9CD3D8]"
                aria-current="page"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                class="dark:text-white hover:text-[#9CD3D8]"
                aria-current="page"
              >
                Contact
              </a>
            </li>

            {/* <a href="#" className='hover:text-[#FFD116]'>Home</a> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
