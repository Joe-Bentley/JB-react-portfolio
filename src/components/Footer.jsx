import React from 'react'
import Social from './Social'
import Background from '../assets/pexels-bg2.jpg'

const Footer = () => {
  return (
    <div style={{backgroundImage: `url(${Background})`}}
    name='footer' className='w-full h-auto bg-white dark:bg-[#1C1C1C] text-gray-300 border-t-4 border-[#1C1C1C] dark:border-white footer-bg'>
        <div>
            <Social />
        </div>
    </div>
  )
}

export default Footer