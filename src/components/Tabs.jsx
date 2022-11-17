import React, { useState } from "react";
import Profile_No_Bg from '../assets/jb-profile-color-nobg.png'

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
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p className="p-2 text-base">
                    1. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta pariatur, maxime quae eum vero id incidunt molestiae
                    rerum optio culpa quasi, provident tempore, sed dolorum.
                    Iusto dolores sequi in accusantium?
                    <br />
                    <br /> Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Cupiditate modi provident ex nobis vitae, vero
                    consequuntur atque, dicta tempore quaerat quasi, sit
                    praesentium deleniti. Aliquam ad ab veritatis molestiae
                    nesciunt.
                  </p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p className="p-2 text-base">
                    2. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta pariatur, maxime quae eum vero id incidunt molestiae
                    rerum optio culpa quasi, provident tempore, sed dolorum.
                    Iusto dolores sequi in accusantium?
                    <br />
                    <br /> Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Cupiditate modi provident ex nobis vitae, vero
                    consequuntur atque, dicta tempore quaerat quasi, sit
                    praesentium deleniti. Aliquam ad ab veritatis molestiae
                    nesciunt.
                  </p>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p className="p-2 text-base">
                    3. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta pariatur, maxime quae eum vero id incidunt molestiae
                    rerum optio culpa quasi, provident tempore, sed dolorum.
                    Iusto dolores sequi in accusantium?
                    <br />
                    <br /> Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Cupiditate modi provident ex nobis vitae, vero
                    consequuntur atque, dicta tempore quaerat quasi, sit
                    praesentium deleniti. Aliquam ad ab veritatis molestiae
                    nesciunt.
                  </p>
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
