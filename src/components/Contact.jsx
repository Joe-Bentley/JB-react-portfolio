import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-white text-[#1C1C1C] dark:bg-[#1C1C1C] dark:text-gray-300 flex justify-center items-center p-4 mb-1'>
      <form method="POST" action="https://getform.io/f/52b92735-f00e-4e17-9383-61bc03185c0e" className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Let's connect!</p>
            <p className='py-4'></p>
          </div>
          <input className='p-2 placeholder:text-black dark:placeholder:text-white text-black dark:text-white dark:bg-transparent border-b-[3px]' type="text" placeholder='Name' name='name' />
          <input className='my-4 p-2 placeholder:text-black dark:placeholder:text-white text-black dark:text-white dark:bg-transparent border-b-[3px]' type="email" placeholder='Email' name='email' />
          <textarea className='p-2 placeholder:text-black dark:placeholder:text-white text-black dark:text-white dark:bg-transparent border-b-[3px]' name="message" rows="10" placeholder='Message'></textarea>
          <button className='border-2 border-gray-500 px-4 py-3 my-8 flex items-center hover:bg-[#FF0000] hover:text-white'>Submit <HiArrowNarrowRight className='ml-3 '/>
          </button>

      </form>

    </div>
  )
}

export default Contact