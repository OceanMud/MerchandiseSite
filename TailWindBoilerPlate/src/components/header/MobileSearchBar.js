import React from "react";

const MobileSearchBar = () => {
  return (
    <div className="relative flex  p-4  border-gray-200 border-b   md:hidden">
      <input
        type="form"
        placeholder="Search GwentGear"
        className=" w-full rounded-md  border border-gray-500 
          text-sm
         text-gray-900
        hover:shadow-lg bg-gray-100 hover:bg-gray-50 focus:bg-white outline-none pl-10 py-1 "
      />
      <img
        src="images/magnify.svg"
        className=" absolute inset-0  filter contrast-0  group-hover:contrast-100 inline-block w-5 ml-2  left-4 top-5
         "
      />
    </div>
  );
};

export default MobileSearchBar;
