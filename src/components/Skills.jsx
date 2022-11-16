import React from 'react'
import html from '../assets/html.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import liquid from '../assets/liquid.png';
import tailwind from '../assets/tailwind.png';
import shopify from '../assets/shop1.png';

const Skills = () => {
const settings = {
        infinite: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        swipeToSlide: true,
        pauseOnHover: false,
        zIndex: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };
  return (
    <div className="mt-[70px] mx-auto p-4 h-auto py-2 max-w-[1000px] border-t-[0.5px] border-b-[0.5px]">
      <div className='py-2'>
        <Slider {...settings}>

          <div>
            <img src={html} className="w-[80px] skill-icon" alt="HTML logo" />
          </div>
          <div>
            <img src={css} className="w-[80px] skill-icon" alt="CSS logo" />
          </div>
          <div>
            <img src={javascript} className="w-[80px] skill-icon" alt="JavaScript logo" />
          </div>
          <div>
            <img src={react} className="w-[80px] skill-icon" alt="React logo" />
          </div>
          <div>
            <img src={tailwind} className="w-[80px] skill-icon" alt="Tailwind logo" />
          </div>
          <div>
            <img src={shopify} className="w-[80px] skill-icon" alt="Shopify logo" />
          </div>
          <div>
            <img src={liquid} className="w-[80px] skill-icon" alt="Liquid logo" />
          </div>

        </Slider>
      </div>
    </div>
  );
}

export default Skills