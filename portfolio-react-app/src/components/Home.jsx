import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-slate-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-white'>Joe Bentley</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-slate-500'>I'm a Junior Web Developer</h2>
        <p className='text-slate-500 py-4 max-w-[700px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit rerum provident eaque dolor, quasi facilis ullam odit, quod, veniam eius sapiente dolorem quisquam! Reiciendis ad fugit, distinctio repellat facilis laborum?</p>
        <div>
          <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-slate-500 '>View more 
            <HiArrowNarrowRight className='ml-3 '/>
          </button>
        </div>
      </div>

    </div>
  )
}

export default Home