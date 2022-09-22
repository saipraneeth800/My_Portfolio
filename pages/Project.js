import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSun, faNoteSticky } from "@fortawesome/free-solid-svg-icons";

const Project = () => {
  // const [style, setStyle] = React.useState({display: 'none'});
  const [style, setStyle] = React.useState(false);
  return (
    <>
      <div id="project">
        <div className="text-center">
          <h1 className="text-3xl m-10 text-blue-900 font-medium tracking-widest dark:text-blue-700">
            My Projects
          </h1>
          <hr className="mx-auto w-56 h-1 bg-gray-100 rounded border-0  dark:bg-gray-700" />
        </div>
        <div className="flex flex-wrap justify-center">
          <div className=" max-w-sm m-10 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:-translate-y-6 duration-300">
            <img className="rounded-lg" src="/weatherapp.jpg" alt="" />
            <hr className="dark:hidden" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                <FontAwesomeIcon icon={faCloudSun} className="mr-2" />
                Weather App
              </h5>

              <p className="mb-3  text-gray-700 dark:text-gray-400">
                This is a Weather App. Tracks weather status in real-time.
                Provides temperature, humidity, pressure and all other details
              </p>
              <div className="text-center mt-6 flex gap-4 justify-center">
                <a
                  href="https://github.com/saipraneeth800/Weather_App"
                  target="_blank" rel="noreferrer"  
                  className="p-3 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 "
                >
                  Github
                </a>
                {/* <a
                  href="#"
                  className="p-3 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 "
                >
                  Preview
                </a> */}
              </div>
            </div>
          </div>
          <div className=" max-w-sm m-10 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:-translate-y-6 duration-300 ">
            <img className="rounded-lg" src="/Notes.png" alt="" />
            <hr className="dark:hidden" />
            <div className="p-5 ">
              <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                <FontAwesomeIcon icon={faNoteSticky} className="mr-2" />
                Notes App
              </h5>

              <p className="mb-3  text-gray-700 dark:text-gray-400">
                This is a notes app. One can add notes and perform CRUD
                operations.
              </p>
              <div className=" text-center mt-6 ">
                <a
                  href="https://github.com/saipraneeth800/Notes"
                  target="_blank" rel="noreferrer" 
                  className="p-3 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 "
                >
                  Github
                </a>
                {/* <a
                  href="#"
                  className="p-3 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 "
                >
                  Preview
                </a> */}
              </div>
            </div>
          </div>

          {/* <div
            className="max-w-sm m-10 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:-translate-y-6 duration-300"
            onMouseEnter={(e) => {
              setStyle(true);
            }}
            onMouseLeave={(e) => {
              setStyle(false);
            }}
          >
            <img className="rounded-lg " src="/weatherapp.jpg" alt="" />
            
            <hr className="dark:hidden"/>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                Weather App
              </h5>

              <p className="mb-3  text-gray-700 dark:text-gray-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolores eaque voluptas explicabo earum mollitia, placeat nam eum
                dicta! Doloremque, exercitationem.
              </p>
              <div className="text-center mt-6 flex gap-4 justify-center">
                <a
                  href="#"
                  className="p-3 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 "
                >
                  Github
                </a>
                
                {style && <a
                  href="#"
                  className="p-3 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 "
                >
                  Preview
                </a>}
                
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Project;
