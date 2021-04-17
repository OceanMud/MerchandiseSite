import React from "react";

const Homepage = () => {
  return (
    <div className="">
      <div className="flex relative  max-w-screen-2xl mx-auto ">
        <img src="/images/Hero1.png" className="w-full h-1/3  object-cover  " />
        <img
          src="/images/Headertext1.png"
          className="absolute bottom-32 right-3 filter drop-shadow-2xl transform  -rotate-12 w-1/2"
        />
        <img
          src="/images/Headertext2.png"
          className="absolute bottom-20 right-1 filter drop-shadow-2xl transform  -rotate-12 w-1/2"
        />
      </div>
      <div className="flex relative  max-w-screen-2xl mx-auto  ">
        <img src="/images/Hero2.png" className="w-full h-1/3  object-cover " />
        <div className=" flex w-full justify-center bottom-10  absolute">
          <img src="images/Headertext3.png" className="w-3/4  bottom-10 " />
        </div>
      </div>
      <div className="flex relative p-10  max-w-screen-2xl mx-auto  ">
        <img src="/images/Hero3.png" className="w-full h-1/3  object-cover " />
      </div>

      <div className="flex relative  max-w-screen-2xl mx-auto  ">
        <img src="/images/Hero3.png" className="w-full h-1/3  object-cover " />
        <div className=" flex w-full justify-center bottom-10  absolute">
          <img src="images/Headertext3.png" className="w-3/4  bottom-10 " />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
