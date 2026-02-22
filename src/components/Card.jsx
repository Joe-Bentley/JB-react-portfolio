import React from "react";

const Card = (props) => {
  return (
    <div className="flex p-4 w-full sm:w-1/2 lg:w-1/3">
      <div className="h-full flex flex-col shadow-md hover:shadow-lg dark:shadow-black overflow-hidden md:hover:scale-[1.02] transition duration-300 ease-in">
        <img className="h-auto sm:h-[280px] w-full" src={props.img} loading="lazy" alt={props.alt}/>
        <div className="flex flex-col flex-1 p-6">
          <h2 className="mb-3 text-2xl font-semibold tracking-wider uppercase">
            {props.title}
          </h2>
          <p className="text-sm">{props.description}</p>
          <br />
          <p className="text-sm">{props.secondary_description}</p>
          <div className="pt-6 mt-auto">
            <a href={props.link}>
              <button className="border-2 border-gray-400 dark:border-white px-6 py-3 my-2 flex items-center hover:bg-[#FF0000] hover:text-white">
                {props.btn_text}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
