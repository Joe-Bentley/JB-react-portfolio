import React, { useState, useEffect } from "react";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Footer from "./components/Footer"
import { WiMoonAltFirstQuarter } from "react-icons/wi";

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

  return (
    <div>
      <div className="bg-white dark:bg-[#1C1C1C] min-h-screen font-inter ">
        <button
          type="button"
          onClick={handleThemeSwitch}
          className="fixed z-10 left-[50%] top-[2%]"
        >
          <WiMoonAltFirstQuarter className="text-2xl mr-2 mb-1 text-black dark:text-white" />
        </button>
        <Navbar />
        <Home />
        <About />
        <Work />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
