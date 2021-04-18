import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className=" bg-gray-50">
      <div className="flex relative  max-w-max-w-screen-3xl mx-auto ">
        <img src="/images/Hero5.png" className="w-full h-1/3  object-cover  " />
        <div className=" flex flex-col w-3/4 h-2/5 justify-center items-center  mr-10 sm:mr-0   absolute">
          <p className="  text-gray-100 tracking-wider font-bold lg:text-6xl md:text-4xl sm:text-3xl text-2xl text-shadow-xl ">
            5 STAR STYLE
          </p>
          <br className="md:block hidden" />
          <p className=" lg:max-w-lg md:max-w-md max-w-xs  text-gray-100 tracking-wider font-bold lg:text-2xl md:text-lg sm:text-md text-sm text-shadow-xl ">
            We’re getting rave reviews. Meet our top rated styles—from true
            classics to our newest arrivals.
          </p>

          <Link
            to="/SellerCard"
            className="   border border-black md:w-36 w-28  text-center py-2 hover:bg-black hover:text-white font-semibold  "
          >
            SHOP NOW
          </Link>
        </div>
      </div>

      <div className="flex relative  max-w-max-w-screen-3xl mx-auto  ">
        <img src="/images/Hero6.png" className="w-full h-1/3  object-cover " />
        <div className=" flex flex-col w-full justify-center bottom-20 items-center absolute">
          <img src="images/Headertext3.png" className="w-3/4 " />
          <br />
          <Link
            to="SellerCard"
            className="  bg-white  w-40 text-center py-2 hover:bg-black hover:text-white font-semibold  "
          >
            SHOP SHORT TEES
          </Link>
        </div>
      </div>

      <div className="flex   p-10  max-w-max-w-screen-3xl justify-center   ">
        <div className="xl:flex grid gap-4 md:grid-cols-2 grid-cols-1 ">
          <img
            src="/images/minihero1.png"
            className=" h-96 border-gray-700 border-2 "
          />
          <img
            src="/images/minihero2.png"
            className=" h-96 border-gray-700 border-2"
          />
          <img
            src="/images/minihero3.png"
            className=" h-96 border-gray-700  border-2"
          />
          <img
            src="/images/minihero4.png"
            className=" h-96 border-gray-700 border-2"
          />
        </div>
      </div>

      <div className="flex   pb-10  max-w-max-w-screen-3xl justify-center   ">
        <div className="flex flex-col space-y-3">
          <h1 className="text-center text-2xl font-bold">IN GWENTGEAR STYLE</h1>
          <p className="max-w-xl text-center font-semibold text-gray-700 text-lg pb-2 ">
            We want to see you in GwentGear. Share your style with us and tag
            @OceanMud & #GwentGear for a chance to be featured.
          </p>
          <Link
            to="SellerCard"
            className="  self-center border border-black w-28 text-center py-2 hover:bg-black hover:text-white font-semibold  "
          >
            VIEW STORE
          </Link>
        </div>
      </div>

      <div className="flex relative  max-w-max-w-screen-3xl   mx-auto -mb-20 ">
        <img
          src="/images/HeroGif.gif"
          className="w-full h-1/3  object-cover  "
        />
        <img
          src="/images/Headertext1.png"
          className="absolute bottom-32 right-3 filter drop-shadow-2xl transform  -rotate-12 w-1/2"
        />
        <img
          src="/images/Headertext2.png"
          className="absolute bottom-20 right-1 filter drop-shadow-2xl transform  -rotate-12 w-1/2"
        />
        <Link
          home={"true"}
          to="SellerCard"
          className=" absolute bottom-4 right-10  self-center bg-white  w-28 text-center py-2 hover:bg-black hover:text-white font-semibold  "
        >
          VIEW STORE
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
