import React, { useEffect, useRef } from 'react'
import { Link } from 'react-scroll'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { ImPhone, ImMail2 } from "react-icons/im";

const TYPEWRITER_TEXT = "Mid-Weight Developer";

const Home = () => {
  const typeRef = useRef(null);

  useEffect(() => {
    const el = typeRef.current;
    if (!el) return;
    el.textContent = "";
    let i = 0;
    const timer = setInterval(() => {
      el.textContent = TYPEWRITER_TEXT.slice(0, i + 1);
      i++;
      if (i === TYPEWRITER_TEXT.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div name='home' className='w-full h-screen
    text-[#1C1C1C] dark:text-gray-300'>

      <div className='max-w-[1000px] mx-auto my-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-slate-600'></p>
        <h1 className='text-4xl font-bold sm:text-7xl'>Joe Bentley</h1>
        <h2 ref={typeRef} className='text-2xl mt-4 sm:text-5xl font-bold text-[#FF0000] dark:text-slate-500 type'></h2>
        <p className='text-[#1C1C1C] dark:text-gray-300 py-4 max-w-[700px]'>This portfolio is a collection of the work I’ve built, the problems I’ve solved, and the projects I’ve enjoyed along the way. It’s designed and developed using React and Tailwind. Have a look around — and if something sparks your interest, <a className='underline transition-opacity duration-300 hover:opacity-70 underline-offset-2' href="mailto:joe.bentley.20@gmail.com">let’s chat!</a></p>
        <div>
          <ul className='flex flex-row gap-2 py-4 sm:text-2xl'>
            <li className='hover:text-[#FF0000] hover:translate-y-[-4px] duration-500'><a href="mailto:joe.bentley.20@gmail.com"><ImMail2/></a></li>
            <li className='hover:text-[#FF0000] hover:translate-y-[-4px] duration-500'><a href="tel:+447545311812"><ImPhone/></a></li>
          </ul>
        </div>
        <div>
          <Link to="about" smooth={true} duration={500}>
            <button className='border-2 border-gray-400 dark:border-white px-6 py-3 my-2 flex items-center hover:bg-[#FF0000] hover:text-white breathe'>View More
              <HiArrowNarrowRight className='ml-3'/>
            </button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Home