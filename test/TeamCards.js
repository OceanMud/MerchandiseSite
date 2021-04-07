import React from "react";

const TeamCards = ({ member }) => {
  return (
    <a href="#" key={member.title} className="group ">
      <div className="relative ">
        <div className=" transition transform duration-500 group-hover:bg-opacity-0 absolute bg-blue-900 bg-opacity-60 h-full w-full bg-cover"></div>
        <img
          src={member.img}
          alt={member.alt}
          className=" object-cover object-center h-56 w-56"
        ></img>
        <div className="  transition transform duration-500 group-hover:bg-blue-900 bg-purple-900 bg-opacity-75 p-2 w-full absolute bottom-0 text-sm font-semibold text-gray-100">
          {member.name}
          <br />
          {member.title}
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="absolute bottom-4 right-5 invisible transition transform translate-x-0 duration-300 ease-in-out group-hover:visible group-hover:translate-x-3 "
            fill="#FFFFFF"
          >
            <title>caret</title>
            <path d="M9.707 18.707l6-6c0.391-0.391 0.391-1.024 0-1.414l-6-6c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"></path>
          </svg>
        </div>
      </div>
    </a>
  );
};

export default TeamCards;
