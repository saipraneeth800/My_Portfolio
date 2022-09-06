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
        <div className="hidden w-full md:block md:w-auto text-2xl text-white">

          <ul class="flex  space-x-8  md:text-lg dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
