import React from 'react'
import avatar from './../public/sai11.jpg'

const Hero = () => {
  return (
    <>
    <div className='flex w-4/6 m-auto items-center'>
        <div className='w-2/3 p-10 '>
        <h1>
            Sai Praneeth
        </h1>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate adipisci perspiciatis ea beatae dicta, eius voluptatibus rerum? Commodi, saepe pariatur.
        </p>
        </div>
        <div className='mt-10'>

        <img src="/sai11.jpg"  alt="" />
        </div>
    </div>
        {/* <div
              className="rounded-full shadow-2xl mx-auto h-48 w-48 bg-cover"
              style={{ backgroundImage: "url(/sai11.jpg)" }}
            ></div> */}
    </>
  )
}

export default Hero