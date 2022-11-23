import React from "react";
import Card from "./Card";
import NBC from "../assets/NBC.png";
import TML from "../assets/TML.png";
import FDM from "../assets/14DM1.png";
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
          <div className="mb-12 sm:text-center">
            <p className="text-4xl font-bold inline border-b-4 text-gray border-gray-600">
              Work
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <Card
              img={NBC}
              year="2022"
              title="Neon Beach"
              description="Built with Shopify Plus, JavaScript and Liquid, this ecommerce site was one of the first websites I helped to debug, maintain and replicate and rebuild across different countries."
              secondary_description="Neon Beach is an online retailer that specialises in building custom and niche LED Neon signs."
              link="https://neonbeach.com"
              btn_text="View Website"
            />
            <Card
              img={FDM}
              year="2022"
              title="14 day manicure"
              description="The most recent ecommerce site I worked on, this was a rebuild of an existing site. We used Shopify, Liquid and Dawn 6.0 to replicate the clients existing site. Using JSON and Liquid, to create custom sections and reusable components, utilising Shopify 2.0 features."
              secondary_description="14 Day Manicure is an online nail polish retailer, based in Ireland with an IE and UK website."
              link="https://14daymanicure.com/"
              btn_text="View Website"
            />
            <Card
              img={TML}
              year="2022"
              title="T.M.LEWIN"
              description="T.M.Lewin is a successful British online menswear retailer. Working on this ecommerce site was a pleasure, where I learnt a lot in terms of agile methodologies and client based work. Using Shopify 2.0+ and primarily Liquid, with bespoke features and custom components to structure the build."
              secondary_description="Working on this project, I used Ruby to help create custom scripts. I also worked with API's and custom apps to assit with integrations."
              link="https://tmlewin.co.uk/"
              btn_text="View Website"
            />
            <Card
              img={MM}
              year="2020"
              title="Musical Masterminds"
              description="Musical Masterminds was a student built project app which
              allows a user to Sign in & out, Create an account, and
              Delete an account. The purpose of the app is to take part in
              a musical theatre themed quiz with questions and answers
              imported using an API via opentdb.com"
              secondary_description="To build this App we used the MERN stack. MERN stack is the
              combination of MongoDB, Express, React, and Node.js. We also
              used Axios to connect the front + backend together through
              express."
              link="https://musical-masterminds.herokuapp.com/"
              btn_text="View Website"
            />
            <Card
              img={Totem}
              year="2020"
              title="Totems"
              description="The goal of this project was to use Python, Html, CSS, and
              Django to create a database holding information about our
              chosen topic - Artifacts. Throughout the site you will be
              able to see information about; individual artifacts
              including, where it is stored, who discovered the artifact
              and when the artifact was found, you will also be able to
              look at all artifacts stored in the same location and all
              artifacts discovered in the same year."
              link="https://musical-masterminds.herokuapp.com/"
              btn_text="View"
            />
            <Card
              img={Mern}
              year="2020"
              title="Video Game Review"
              description="Our first MERN (Mongo, Express, React, Node) app which is a video game review app for uninformed parents, including some of the recent featured and popular games at the time."
              secondary_description="On this particular project I focused my input on the Backend, learning how to use Schemas and Insomnia to GET and POST data. Using Mongo Atlas to store our data cloud based so all contributors had access."
              link="https://github.com/Joe-Bentley/dream-team"
              btn_text="View"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
