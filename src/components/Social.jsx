import React from "react";
import { FaLinkedin, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

const Social = () => {
  return (
    <div name="social">
      <div>
        <ul className="w-full h-[200px] flex flex-wrap justify-evenly items-center text-3xl gap-10 py-3">
          <li className="duration-500 hover:sacle-50 hover:translate-y-[-15px]">
            <a href="https://github.com/Joe-Bentley">
              <FaGithub />
            </a>
          </li>
          <li className="duration-500 hover:sacle-50 hover:translate-y-[-15px]">
            <a href="https://www.facebook.com/profile.php?id=633761350">
            <FaFacebook />
            </a>
          </li>
          <li className="duration-500 hover:sacle-50 hover:translate-y-[-15px]">
            <a href="https://www.linkedin.com/in/joe-bentley-a905b81bb/">
            <FaLinkedin />
            </a>
          </li>
          <li className="duration-500 hover:sacle-50 hover:translate-y-[-15px]">
            <a href="https://www.instagram.com/lordjosephbentley/">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Social;
