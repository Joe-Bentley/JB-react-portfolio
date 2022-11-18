import React, { useState } from "react";
import Profile_No_Bg from "../assets/jb-profile-color-nobg.png";
import { SiAccenture } from "react-icons/si";

const Tabs = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <div className="mx-auto p-4 md:h-auto py-2 max-w-[1000px] w-full px-4">
      <div className="grid sm:grid-cols-2 gap-3 mx-2 items-center justify-center">
        <img
          className="drop-shadow-sm shadow-red"
          src={Profile_No_Bg}
          alt="Profile Pic"
          oncontextmenu="return false;"
        />
        <div className="">
          <div>
            <ul
              className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row dark:text-gray-300"
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center border-b-4 focus-within:border-[#FF0000] hover:border-[#FF0000]">
                <a
                  className="text-1xl uppercase px-5 py-3 block leading-normal"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Profile
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center border-b-4 focus-within:border-[#FF0000] hover:border-[#FF0000]">
                <a
                  className="text-1xl uppercase px-5 py-3 block leading-normal"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Experience
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 last:mt-1 flex-auto text-center border-b-4 focus-within:border-[#FF0000] hover:border-[#FF0000]">
                <a
                  className="text-1xl uppercase px-5 py-3 block leading-normal"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  Skills
                </a>
              </li>
            </ul>
            <div className="flex flex-col min-w-0 break-words dark:text-gray-300 w-full sm:h-[450px] my-6 shadow-lg dark:shadow-black">
              <div className="px-4 py-5 flex-auto overflow-y-auto">
                <div className="tab-content tab-space">
                  <div
                    className={openTab === 1 ? "block" : "hidden"}
                    id="link1"
                  >
                    <p className="p-2 text-base">
                      I have previously been working for an ecommerce company,
                      helping to build websites for clients;
                      including T.M.Lewin; 14 Day Manicure and Neon Beach, and I
                      am now seeking to progress my career further in software
                      development.
                      <br />
                      <br /> Notable personal successes include delivery of a
                      rebuild website for a major retailer attaining a
                      successful planned Go Live launch date. For another
                      client, I was pivotal in the site rollout to multiple
                      countries in Asia, America and Europe. This involved
                      working with internal country managers, translation teams
                      and different time zones.
                    </p>
                    <p className="p-2 text-base">
                      For more info please see my <span><a className='underline'href="/">CV</a></span> and contact me via the form below or email me directly <span><a className='underline' href="mailto:joe.bentley.20@gmail.com">here</a></span>.
                    </p>
                  </div>
                  <div
                    className={openTab === 2 ? "block" : "hidden"}
                    id="link2"
                  >
                    <p className="p-2 text-base font-bold">
                      Junior Developer eCompelete / Naturecan <br /> January
                      2022 - November 2022
                    </p>
                    <p className="p-2 text-base">
                      My first professional role as a junior developer, working
                      for eComplete / Naturecan. Focusing on ecommerce
                      development, building and maintain themes on Shopify for
                      external clients and internal projects. Undertaking
                      responsibilities such as debugging, building components,
                      writing documentation, and site rollouts.
                      <br />
                      <br /> During my employment at eComplete, I worked in an
                      environment where I developed my knowledge of agile
                      methodologies using JIRA; Kanban boards and Sprints. I was
                      responsible for managing a project sprint board on a
                      weekly basis. I have expanded my knowledge of ecommerce
                      and agency work, as well as being handed direct client
                      engagement.
                      <br />
                      <br />
                      Part of my role as a junior developer has been to maintain
                      and debug internal websites, which gave me opportunities
                      to enhance my problem-solving skills. Alongside these
                      tasks, I would continually write documentation to record
                      the issues and fixes.
                    </p>
                  </div>
                  <div
                    className={openTab === 3 ? "block" : "hidden"}
                    id="link3"
                  >
                    <ul className="p-8 sm:text-2xl leading-loose flex flex-col justify-center ">
                      <li className="cursor-pointer-none flex flex-row items-center gap-1">
                        <SiAccenture className="text-xs mr-1 text-[#FF0000] " />{" "}
                        Html
                      </li>
                      <li className="cursor-pointer-none flex flex-row items-center gap-1">
                        <SiAccenture className="text-xs mr-1 text-[#FF0000] " />{" "}
                        CSS
                      </li>
                      <li className="cursor-pointer-none flex flex-row items-center gap-1">
                        <SiAccenture className="text-xs mr-1 text-[#FF0000] " />{" "}
                        JavaScript
                      </li>
                      <li className="cursor-pointer-none flex flex-row items-center gap-1">
                        <SiAccenture className="text-xs mr-1 text-[#FF0000] " />{" "}
                        React
                      </li>
                      <li className="cursor-pointer-none flex flex-row items-center gap-1">
                        <SiAccenture className="text-xs mr-1 text-[#FF0000] " />{" "}
                        Tailwind
                      </li>
                      <li className="cursor-pointer-none flex flex-row items-center gap-1">
                        <SiAccenture className="text-xs mr-1 text-[#FF0000] " />{" "}
                        Shopify
                      </li>
                      <li className="cursor-pointer-none flex flex-row items-center gap-1">
                        <SiAccenture className="text-xs mr-1 text-[#FF0000] " />{" "}
                        Liquid
                      </li>
                      <li className="cursor-pointer-none flex flex-row items-center gap-1">
                        <SiAccenture className="text-xs mr-1 text-[#FF0000] " />{" "}
                        Git
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
