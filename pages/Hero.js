

const Hero = () => {
  return (
    <>
    {/* <div className='flex w-4/6 h-full m-auto items-center tracking-widest'> */}
    <div className='flex flex-col p-6 m-auto lg:flex-row lg:items-center'>
        <div className='lg:w-3/5 p-10 lg:mt-10'>
        {/* <h1 className='text-3xl m-4 font-semibold'> */}
        <h2 className="ml-4 text-xl text-blue-400">Hi, I am</h2>
        <h1 className='text-3xl m-4 font-medium tracking-wider text-blue-900 dark:text-white lg:text-5xl'>
            Sai Praneeth
        </h1>
        <hr className='m-4 lg:w-80 w-46 h-1 bg-gray-100 rounded border-0  dark:bg-gray-700'/>
        <h3 className='m-4 text-blue-500'>Front-End Developer</h3>
        <p className='m-4 '>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate adipisci perspiciatis ea beatae dicta, eius voluptatibus rerum? Commodi, saepe pariatur.
        </p>
        <button className="border-none p-4 ml-4 rounded-lg w-40 bg-blue-600 hover:bg-blue-700 shadow-2xl shadow-blue-500/50 text-white">Resume</button>
        </div>
        <div className='flex items-center justify-center lg:w-1/2 lg:mt-10'>

        <img src="/sai11.png"  alt="" className='rounded-md dark:bg-gray-800'/>
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