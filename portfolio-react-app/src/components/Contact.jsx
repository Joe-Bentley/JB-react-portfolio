import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f]  flex justify-center items-center p-4'>
      <form method="POST" action="https://getform.io/f/52b92735-f00e-4e17-9383-61bc03185c0e" className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500 text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'>Drop me a message</p>
          </div>
          <input className='p-2' type="text" placeholder='Name' name='name' />
          <input className='my-4 p-2' type="email" placeholder='Email' name='email' />
          <textarea className='p-2' name="message" rows="10" placeholder='Message'></textarea>
          <button className='text-white border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-slate-500 '>Submit</button>

      </form>

    </div>
  )
}

export default Contact