import React, { useState, useEffect } from "react";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Tabs from "./components/Tabs";
import { Link } from "react-scroll";
import { WiMoonAltFirstQuarter } from "react-icons/wi";
import AOS from "aos";
import "aos/dist/aos.css";
import Logo_White from "./assets/Logo_White.png";
import Logo_Black from "./assets/Logo_Black.png";

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="bg-white dark:bg-[#1C1C1C] min-h-screen font-inter ">
        <div className="w-[150px] fixed z-10 top-[-25px] left-[-25px]">
          <Link
            to="home"
            className="hover:cursor-pointer"
            smooth={true}
            duration={500}
          >
            {theme === "dark" ? (
              <img src={Logo_Black} alt="Initials Logo" />
            ) : (
              <img src={Logo_White} alt="Initials Logo" />
            )}
          </Link>
        </div>
        <button
          type="button"
          onClick={handleThemeSwitch}
          className="fixed z-10 left-[50%] top-[29px]"
        >
        <WiMoonAltFirstQuarter className="text-2xl mr-2 mb-1 text-black dark:text-white" />
        </button>
        <Navbar />

        <div 
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0">

          <Home />
        </div>

        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <About />
        </div>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <Tabs />
        </div>

        <Skills />

        <div
          data-aos="fade-right"
          data-aos-offset="250"
          data-aos-easing="ease-in-sine"
        >
          <Work />
        </div>

        <div
          data-aos="fade-up"
          data-aos-offset="250"
          data-aos-easing="ease-in-sine"
        >
          <Contact />
        </div>

        <Footer />
    
      </div>
    </div>
  );
}

export default App;
