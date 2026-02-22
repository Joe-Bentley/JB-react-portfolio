import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-white text-[#1C1C1C] dark:bg-[#1C1C1C] dark:text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="pb-8 pl-4 sm:text-right">
            <p className="hidden text-4xl font-bold border-b-4 border-gray-600 sm:block">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="text-3xl font-bold sm:text-right">
            <p>Hi, I'm Joe 👋</p>
            <br />
            <p>
              A passionate Mid-Level Shopify Developer and former professional dancer
            </p>
          </div>
          <div>
            <p>
            I’m a Mid-Level Shopify Developer specialising in bespoke theme development and scalable ecommerce solutions. Over the past four years, I’ve worked with agencies and growing brands to build high-performance Shopify experiences focused on usability, speed, and conversion.
            <br />
            <br />
            Before becoming a developer, I was a cruise ship performer and dance captain — a career that taught me leadership, adaptability, and how to perform when it’s time to deliver.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
