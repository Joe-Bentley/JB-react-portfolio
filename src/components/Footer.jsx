import React from 'react'
import Social from './Social'
import Background from '../assets/pexels-bg2.jpg'
import Logo_Black from "../assets/Logo_Black.png";

const Footer = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Background})` }}
      name="footer"
      className="w-full h-auto bg-white dark:bg-[#1C1C1C] text-gray-300 border-t-4 border-[#1C1C1C] dark:border-white footer-bg"
    >
      <div className="flex md:items-center md:justify-evenly justify-center flex-wrap">
        <img
          className="md:block hidden w-[150px]"
          src={Logo_Black}
          alt="Initials Logo"
        />
        <Social />
        <p className="pb-4 md:pb-0">
          Copyright &copy; 2022 Joe-Bentley | <span className="hover:underline">
            <a href="https://github.com/Joe-Bentley">Github</a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Footer