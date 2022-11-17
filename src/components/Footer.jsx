import React from 'react'
import Social from './Social'
import Background from '../assets/pexels-bg2.jpg'
import Logo_Footer from "../assets/Logo_Footer.png";

const Footer = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Background})` }}
      name="footer"
      className="w-full h-auto bg-white dark:bg-[#1C1C1C] text-gray-300 border-t-4 border-[#1C1C1C] dark:border-white footer-bg"
    >
      <div className="w-full flex items-center sm:justify-evenly justify-evenly flex-wrap">
        <img
          className="w-[150px] pt-2"
          src={Logo_Footer}
          alt="Initials Logo"
        />
        <Social />
        <p className="pb-4 sm:pb-0">
           &copy; 2022 Joe-Bentley | <span className="hover:underline">
            <a href="https://github.com/Joe-Bentley">Github</a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Footer