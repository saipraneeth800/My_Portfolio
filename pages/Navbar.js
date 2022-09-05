import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className='sticky top-0 z-10 flex justify-around mt-8 pb-8 shadow-lg'>
            <div >
                <h1 className='text-2xl'>LOGO</h1>
            </div>
            <div className='text-2xl flex gap-10 '>
                <a href="#" className='hover:text-blue-800'>Home</a>
                <a href="#" className='hover:text-blue-800'>Projects</a>
                <a href="#" className='hover:text-blue-800'>About</a>
                <a href="#" className='hover:text-blue-800'>Contact</a>
            </div>
        </div>
    </>
  )
}

export default Navbar