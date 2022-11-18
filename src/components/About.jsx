import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-white text-[#1C1C1C] dark:bg-[#1C1C1C] dark:text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-[100vh]">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="sm:block hidden text-4xl font-bold border-b-4 border-gray-600">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl font-bold ">
            <p>Hi, I'm Joe. </p>
            <br />
            <p>
              A passionate junior web developer and former professional dancer
            </p>
          </div>
          <div>
            <p>
              I've travelled around the world for many years performing on
              cruises as a show team dancer and later, dance captain. During the
              lockdown periods, I found my passion for technology and software.

            <br />
            <br />

              I completed the Code Nation 12 week immersive bootcamp and knew I
              wanted to pursue a career in tech. It was goodbye to dancing and
              hello to developing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
