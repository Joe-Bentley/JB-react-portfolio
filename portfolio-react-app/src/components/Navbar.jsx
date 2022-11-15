import React, { useState } from "react";
import { Link } from "react-scroll";
import { Spin as Hamburger } from "hamburger-react";
// import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };


  const [isOpen, setOpen] = useState(false);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-white text-[#1C1C1C] dark:bg-[#1C1C1C] dark:text-white">
      <div>{/* Logo */}</div>

      <ul className="hidden md:flex">
        <li>
          <Link to="home" className="hover:underline" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" className="hover:underline" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <a href="/">CV</a>
        </li>
        <li>
          <Link to="work" className="hover:underline" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact"className="hover:underline"  smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-white text-[#1C1C1C] dark:bg-[#1C1C1C] dark:text-white flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl hover:underline">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl hover:underline">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl hover:underline">
          <a target="_blank" href="www.google.com">
            CV
          </a>
        </li>
        <li className="py-6 text-4xl hover:underline">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl hover:underline">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      <div className="hidden"></div>
    </div>

  );
};

export default Navbar;
