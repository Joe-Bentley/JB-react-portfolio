import React from 'react'
import { Link } from 'react-scroll'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { ImPhone, ImMail2 } from "react-icons/im";

const Home = () => {
  return (
    <div name='home' className='w-full h-screen
    bg-white text-[#1C1C1C] dark:bg-[#1C1C1C] dark:text-gray-300'>

      <div className='max-w-[1000px] mx-auto my-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-slate-600'></p>
        <h1 className='text-4xl sm:text-7xl font-bold'>Joe Bentley</h1>
        <h2 className='text-2xl mt-4 sm:text-5xl font-bold text-[#FF0000] dark:text-slate-500 type'>Junior Developer</h2>
        <p className='text-[#1C1C1C] dark:text-gray-300 py-4 max-w-[700px]'>Welcome to my Portfolio. Built with React JS and Tailwind, this portfolio showcases some of my recent work and personal projects. Please take a look around and feel free to contact me for more info!</p>
        <div>
          <ul className='sm:text-2xl flex flex-row py-4 gap-2'>
            <li className='hover:text-[#FF0000] hover:translate-y-[-4px] duration-500'><a href="mailto:joe.bentley.20@gmail.com"><ImMail2/></a></li>
            <li className='hover:text-[#FF0000] hover:translate-y-[-4px] duration-500'><a href="tel:+447545311812"><ImPhone/></a></li>
          </ul>
        </div>
        <div>
          <Link to="about" smooth={true} duration={500}>
            <button className='border-2 border-gray-400 dark:border-white px-6 py-3 my-2 flex items-center  hover:bg-[#FF0000] hover:text-white'>View More
              <HiArrowNarrowRight className='ml-3 '/>
            </button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Home