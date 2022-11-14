import React from 'react'
import NBC from '../assets/NBC.png'
import TML from '../assets/TML.png'
import FDM from '../assets/14DM.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray border-gray-600'>Work</p>
            <p className='py-6'>A selected few ecommerce websites I helped build.</p>
          </div>

          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5'>
            
            <div style={{backgroundImage: `url(${NBC})`}} className='shadow-lg shadow-black group container flex justify-center items-center mx-auto work-card'>
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                Neon Beach
                </span>
                <div className='pt-8 text-center'>
                    <a href="https://neonbeach.com/">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-gray-700 text-lg'>Link</button>
                    </a>
                </div>
              </div>
            </div>

            <div style={{backgroundImage: `url(${TML})`}} className='shadow-lg shadow-black group container flex justify-center items-center mx-auto work-card'>
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                T.M.Lewin
                </span>
                <div className='pt-8 text-center'>
                    <a href="https://tmlewin.co.uk/">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-gray-700 text-lg'>Link</button>
                    </a>
                </div>
              </div>
            </div>

            <div style={{backgroundImage: `url(${FDM})`}} className='shadow-lg shadow-black group container flex justify-center items-center mx-auto work-card'>
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                14 Day Manicure
                </span>
                <div className='pt-8 text-center'>
                    <a href="https://14daymanicure.com/">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-gray-700 text-lg'>Link</button>
                    </a>
                </div>
              </div>
            </div>

          </div>
          <p className='py-6'>Some info about the sites</p>
          <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi esse hic quisquam facilis ex, aperiam consequatur! Ullam veritatis, accusamus possimus sit, deserunt ut, perspiciatis nisi quo mollitia voluptatem quaerat sint!</p>
        </div>
    </div>
  )
}

export default Work