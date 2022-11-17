import React from 'react'
import { Link } from 'react-scroll'
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen
    bg-white text-[#1C1C1C] dark:bg-[#1C1C1C] dark:text-gray-300'>

      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-slate-600'></p>
        <h1 className='text-4xl sm:text-7xl font-bold'>Joe Bentley</h1>
        <h2 className='text-3xl mt-4 sm:text-6xl font-bold text-[#FF0000] dark:text-slate-500 type'>Junior Developer</h2>
        <p className='text-[#1C1C1C] dark:text-gray-300 py-4 max-w-[700px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit rerum provident eaque dolor, quasi facilis ullam odit, quod, veniam eius sapiente dolorem quisquam! Reiciendis ad fugit, distinctio repellat facilis laborum?</p>
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