import React, { useState } from "react";
import { Link } from "react-scroll";
import { Spin as Hamburger } from "hamburger-react";
import PDF from '../assets/Joe-Bentley-CV-2022.pdf'


const Navbar = () => {

  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="fixed w-full h-[80px] flex flex-row-reverse justify-between items-center px-4 bg-white text-[#1C1C1C] dark:bg-[#1C1C1C] dark:text-white z-[9]">
      

      <ul className="hidden md:flex">
        <li>
          <Link to="home" className="hover:font-bold" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" className="hover:font-bold" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <a className="hover:font-bold " target='_blank' rel="noreferrer" href={PDF}>CV</a>
        </li>
        <li>
          <Link to="work" className="hover:font-bold" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact"className="hover:font-bold"  smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <ul
        className={
          !isOpen
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-white text-[#1C1C1C] dark:bg-[#1C1C1C] dark:text-white flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl hover:font-bold">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl hover:font-bold">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl hover:font-bold">
          <a target='_blank' rel="noreferrer" href={PDF}>
            CV
          </a>
        </li>
        <li className="py-6 text-4xl hover:font-bold">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl hover:font-bold">
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
