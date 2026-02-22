import React, { useState, useEffect, useRef } from "react";
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

  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });

  const [theme, setTheme] = useState(null);

  const gradientRef = useRef(null);
  const themeRef = useRef(theme);
  const targetX = useRef(50);
  const targetY = useRef(50);
  const currentX = useRef(50);
  const currentY = useRef(50);

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
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const lerp = (a, b, t) => a + (b - a) * t;
    let rafId;

    const animate = () => {
      currentX.current = lerp(currentX.current, targetX.current, 0.06);
      currentY.current = lerp(currentY.current, targetY.current, 0.06);

      if (gradientRef.current) {
        const isDark = themeRef.current === "dark";
        const hue = 190 + (currentX.current / 100) * 160; // teal → blue → indigo → purple → rose
        const opacity = isDark ? 0.13 : 0.06;
        const color = `hsla(${hue}, 70%, 60%, ${opacity})`;
        gradientRef.current.style.background = `radial-gradient(circle at ${currentX.current}% ${currentY.current}%, ${color}, transparent 60%)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      targetX.current = (e.clientX / window.innerWidth) * 100;
      targetY.current = (e.clientY / window.innerHeight) * 100;
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="bg-white dark:bg-[#1C1C1C] min-h-screen font-inter ">
        <div ref={gradientRef} className="fixed inset-0 pointer-events-none z-0" />
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
          className="fixed z-10 left-[50%] top-[29px] hover:font-bold"
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
        <div className="my-4 sm:my-10">
          <Skills />
        </div>
        <div
          data-aos="fade-right"
          data-aos-offset="250"
          data-aos-easing="ease-in-sine"
        >
          <Work />
        </div>

        <div
          data-aos="fade-down"
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
