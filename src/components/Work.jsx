import React from "react";
import NBC from "../assets/NBC.png";
import TML from "../assets/TML.png";
import FDM from "../assets/14DM.png";
import MM from "../assets/MM.jpg";
import Totem from "../assets/python.jpg";
import Mern from "../assets/mern.jpg";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full md:h-full bg-white text-[#1C1C1C] dark:bg-[#1C1C1C] dark:text-gray-300"
    >
      <div className="flex items-center">
        <div className="container px-5 py-24 mx-auto">
          <div className="mb-12">
            <p className="text-4xl font-bold inline border-b-4 text-gray border-gray-600">
              Work
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 sm:w-1/2 lg:w-1/3">
              <div className="h-full shadow-lg dark:shadow-black overflow-hidden md:hover:scale-[1.05] transition duration-300 ease-in">
                <div className="">
                  <img src={NBC} alt="nbc" />
                </div>
                <div className="p-6">
                  <h2 className="text-base">2022</h2>
                  <h1 className="text-2xl font-semibold uppercase mb-3">
                    Neon Beach
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam modi, expedita quos doloremque autem ipsum itaque
                    incidunt ipsam reprehenderit fuga! Dolores quisquam eius cum
                    accusamus?
                  </p>
                  <br />
                  <p className="leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam modi, expedita quos doloremque autem ipsum itaque
                    incidunt ipsam reprehenderit fuga! Dolores quisquam eius cum
                    accusamus?
                  </p>
                  <div className="pt-6">
                    <a href="https://neonbeach.com/">
                      <button className="border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FF0000] hover:text-white">
                        View Website
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3">
              <div className="h-full shadow-lg dark:shadow-black overflow-hidden md:hover:scale-[1.05] transition duration-300 ease-in">
                <img src={FDM} alt="nbc" />
                <div className="p-6">
                  <h2 className="text-base">2022</h2>
                  <h1 className="text-2xl font-semibold uppercase mb-3">
                    14 Day Manicure
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam modi, expedita quos doloremque autem ipsum itaque
                    incidunt ipsam reprehenderit fuga! Dolores quisquam eius cum
                    accusamus?
                  </p>
                  <div className="pt-6">
                    <a href="https://14daymanicure.com/">
                      <button className="border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FF0000] hover:text-white">
                        View Website
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3">
              <div className="h-full shadow-lg dark:shadow-black overflow-hidden md:hover:scale-[1.05] transition duration-300 ease-in">
                <img src={TML} alt="nbc" />
                <div className="p-6">
                  <h2 className="text-base">2022</h2>
                  <h1 className="text-2xl font-semibold uppercase mb-3">
                    T.M.Lewin
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam modi, expedita quos doloremque autem ipsum itaque
                    incidunt ipsam reprehenderit fuga! Dolores quisquam eius cum
                    accusamus?
                  </p>
                  <div className="pt-6">
                    <a href="https://tmlewin.co.uk/">
                      <button className="border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FF0000] hover:text-white">
                        View Website
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3">
              <div className="h-full shadow-lg dark:shadow-black overflow-hidden md:hover:scale-[1.05] transition duration-300 ease-in">
                <img src={MM} alt="nbc" />
                <div className="p-6">
                  <h2 className="text-base">2020</h2>
                  <h1 className="text-2xl font-semibold uppercase mb-3">
                    Musical Masterminds
                  </h1>
                  <p className="leading-relaxed mb-3 text-sm">
                    Musical Masterminds was a student built project app which
                    allows a user to Sign in & out, Create an account, and
                    Delete an account. The purpose of the app is to take part in
                    a musical theatre themed quiz with questions and answers
                    imported using an API via opentdb.com
                  </p>
                  <br />
                  <p className="text-sm">
                    To build this App we used the MERN stack. MERN stack is the
                    combination of MongoDB, Express, React, and Node.js. We also
                    used Axios to connect the front + backend together through
                    express.
                  </p>
                  <div className="pt-6">
                    <a href="https://musical-masterminds.herokuapp.com/">
                      <button className="border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FF0000] hover:text-white">
                        View Website
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3">
              <div className="h-full shadow-lg dark:shadow-black overflow-hidden md:hover:scale-[1.05] transition duration-300 ease-in">
                <img src={Totem} alt="nbc" />
                <div className="p-6">
                  <h2 className="text-base">2020</h2>
                  <h1 className="text-2xl font-semibold uppercase mb-3">
                    Totems
                  </h1>
                  <p className="leading-relaxed mb-3 text-sm">
                    The goal of this project was to use Python, Html, CSS, and
                    Django to create a database holding information about our
                    chosen topic - Artifacts. Throughout the site you will be
                    able to see information about; individual artifacts
                    including, where it is stored, who discovered the artifact
                    and when the artifact was found, you will also be able to
                    look at all artifacts stored in the same location and all
                    artifacts discovered in the same year.
                  </p>
                  <div className="pt-6">
                    <a href="https://github.com/Joe-Bentley/team_totem">
                      <button className="border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FF0000] hover:text-white">
                        View
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3">
              <div className="h-full shadow-lg dark:shadow-black overflow-hidden md:hover:scale-[1.05] transition duration-300 ease-in">
                <img src={Mern} alt="nbc" />
                <div className="p-6">
                  <h2 className="text-base">2020</h2>
                  <h1 className="text-2xl font-semibold uppercase mb-3">
                    Video Game Review
                  </h1>
                  <p className="text-sm">
                    Our first MERN (Mongo, Express, React, Node) app which is
                    designed on a theme of a video game review app for
                    uninformed parents, including some of the recent featured
                    and popular games at the time.
                  </p>
                  <br />
                  <p className="text-sm">
                    To begin, you need to create an account to access the home
                    page.
                  </p>
                  <br />
                  <p className="text-sm">
                    On this particular project I focused my input on the
                    Backend, learning how to use Schemas and Insomnia to GET and
                    POST data. Using Mongo Atlas to store our data cloud based
                    so all contributors had access.
                  </p>
                  <div className="pt-6">
                    <a href="https://github.com/Joe-Bentley/dream-team">
                      <button className="border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FF0000] hover:text-white">
                        View
                      </button>
                    </a>
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

export default Work;
