import React from "react";
import Card from "./Card";
import BOC from "../assets/BOC.png";
import Skin111 from "../assets/11skin.png";
import Cambridge from "../assets/Cambridge.png";
import Sunnamusk from "../assets/Sunnamusk.png";
import EOB from "../assets/EOB.png";
import Fudi from "../assets/fudi.png";
import MucOff from "../assets/Muc-off.png";
import NBC from "../assets/NBC.png";
import TML from "../assets/TML.png";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full md:h-full text-[#1C1C1C] dark:text-gray-300"
    >
      <div className="flex items-center">
        <div className="container px-5 py-24 mx-auto">
          <div className="mb-12 sm:text-center">
            <p className="inline text-4xl font-bold border-b-4 border-gray-600 text-gray">
              Work
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <Card
              img={BOC}
              alt="Bands of Courage landing page"
              year="2024"
              title="Bands of Courage"
              description="Built a fully bespoke Shopify theme from scratch, including a custom charm picker for personalised product selection. The interactive picker enables customers to configure their jewellery with unique charm combinations."
              secondary_description="Delivered custom Liquid components, theme architecture, and a seamless checkout experience for a growing DTC brand."
              link="https://bandsofcourage.com"
              btn_text="View Project"
            />
            <Card
              img={Skin111}
              alt="111SKIN theme migration"
              year="2024"
              title="111SKIN"
              description="Contributed to a theme migration for a global skincare brand, ensuring preserved functionality, performance, and SEO throughout the transition."
              secondary_description="Worked across migration planning, Liquid templating, and post-launch validation to maintain site integrity."
              link="https://111skin.com"
              btn_text="View Website"
            />
            <Card
              img={Cambridge}
              alt="Cambridge Satchel Company product page"
              year="2024"
              title="Cambridge Satchel Company"
              description="Developed a new product page optimised for UX and conversions, featuring improved layout, imagery, and add-to-cart flows."
              secondary_description="Focused on conversion-focused design and responsive behaviour across devices."
              link="https://www.cambridgesatchel.com"
              btn_text="View Website"
            />
            <Card
              img={Sunnamusk}
              alt="Sunnamusk landing page"
              year="2024"
              title="Sunnamusk"
              description="Created a high-impact landing page for a featured product campaign, driving engagement and conversion through targeted messaging and visual hierarchy."
              secondary_description="Built with Shopify sections, custom styling, and performance in mind."
              link="https://sunnamusk.com/pages/development?view=paid-ads"
              btn_text="View Website"
            />
            <Card
              img={EOB}
              alt="Embassy of Beauty account page"
              year="2024"
              title="Embassy of Beauty"
              description="Created a bespoke account page experience replicating Figma designs and requirements, integrated with a loyalty partner for a seamless customer journey."
              secondary_description="Delivered pixel-perfect implementation with third-party loyalty integration."
              link="https://embassyofbeauty.co.uk/"
              btn_text="View Website"
            />
            <Card
              img={Fudi}
              alt="Fu:di homepage"
              year="2024"
              title="Fu:di"
              description="Delivered a redesigned homepage improving layout, usability, and site performance. Enhanced navigation, hero sections, and content structure for better conversion."
              secondary_description="Optimised for Core Web Vitals and mobile-first responsiveness."
              link="https://fudi.com"
              btn_text="View Website"
            />
            <Card
              img={MucOff}
              alt="Muc-Off featured product page"
              year="2024"
              title="Muc-Off"
              description="Built a new featured product page for a product launch, showcasing key features and driving purchase intent through clear CTAs and product storytelling."
              secondary_description="Custom sections and product page enhancements aligned with brand guidelines."
              link="https://muc-off.com/collections/bicycle-pressure-washer-bundles/products/mobile-pressure-washer-starter-kit"
              btn_text="View Website"
            />
            <Card
              img={NBC}
              alt="Neon Beach landing page"
              year="2022"
              title="Neon Beach"
              description="Built with Shopify Plus, JavaScript and Liquid, this ecommerce site was one of the first websites I helped to debug, maintain and replicate and rebuild across different countries."
              secondary_description="Neon Beach is an online retailer that specialises in building custom and niche LED Neon signs."
              link="https://neonbeach.com"
              btn_text="View Website"
            />
            <Card
              img={TML}
              alt="TM Lewin landing page"
              year="2022"
              title="T.M.LEWIN"
              description="T.M.Lewin is a successful British online menswear retailer. Working on this ecommerce site was a pleasure, where I learnt a lot in terms of agile methodologies and client based work. Using Shopify 2.0+ and primarily Liquid, with bespoke features and custom components to structure the build."
              secondary_description="Working on this project, I used Ruby to help create custom scripts. I also worked with API's and custom apps to assist with integrations."
              link="https://tmlewin.co.uk/"
              btn_text="View Website"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
