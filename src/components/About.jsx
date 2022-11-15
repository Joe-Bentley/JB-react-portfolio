import React from 'react'
import Profile from '../assets/jb-profile.jpg'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-white text-[#1C1C1C] dark:bg-[#1C1C1C] dark:text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-600'>About</p>
          </div>
          <div></div>
          </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-3xl font-bold '>
            <p>Hi, I'm Joe. A passionate junior web developer and former professional dancer</p>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus itaque nemo neque qui quasi, earum unde corporis nihil, saepe et eligendi optio ducimus iusto consequatur enim. Id aliquam neque dolore!</p>
          </div>
        </div>
      <div className='mt-24'>
        <img className='w-[500px]'src={Profile} alt="Profile Pic"/>
      </div>
      </div>
    </div>
  )
}

export default About