import React from "react";
import Navigation from "./Navigation";

const InformationBar = () => {
  return (
    <div>
      <div className="hidden md:block bg-gray-100 mb-10 pb-6  ">
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-2 mt-10  text-gray-800 px-4  max-w-screen-2xl mx-auto">
          <div className="flex max-w-sm justify-between   ">
            <div className="mt-6 text-lg ">
              <div className="flex items-center  border-b border-gray-300 pb-2  ">
                <img
                  src="images/hanger.svg"
                  alt="hanger"
                  className=" h-9 filter  contrast-50 pr-4  "
                />
                <h1 className="text-xl font-bold">Style and fit</h1>
              </div>
              <div className="mb-2 mt-2">
                <h3 className="font-bold">Regular fit</h3>
                <p className=" leading-6">
                  Standard length, the fabric easily gives into movement
                </p>
              </div>
              <div>
                <h3 className=" font-bold">Tubular</h3>
                <p className=" leading-6">
                  Constructed from a single piece of cloth--it doesnt have side
                  seams
                </p>
              </div>
            </div>
          </div>
          <div className=" order-last  -mt-52 lg:m-0 max-w-sm    lg:pl-0 ">
            <div className=" lg:mt-6 mt-10">
              <div className="flex items-center  border-b border-gray-300 pb-2   ">
                <img
                  src="images/palette.svg"
                  alt="palette"
                  className=" h-9 filter contrast-50 pr-4   "
                />
                <h1 className="text-xl font-bold">Material</h1>
              </div>
              <div className="  mt-1  ">
                <div className=" flex items-center  justify-between">
                  <h3 className="text-md font-bold">Fabric thickness</h3>
                  <p> Medium weight</p>
                </div>
                <div>
                  <progress
                    className="w-full h-1  bg-black"
                    value="70"
                    max="100"
                  >
                    70 %
                  </progress>
                  <div className="flex text-sm justify-between text-gray-500">
                    <p>Lightweight</p>
                    <p>Heavyweight</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-2  mt-2 ">
              <div className=" flex items-center justify-between">
                <h3 className="text-md font-bold">Softness scale</h3>
                <p> Medium rough</p>
              </div>
              <div>
                <progress className="w-full h-1  bg-black" value="30" max="100">
                  70 %
                </progress>
                <div className="flex text-sm justify-between text-gray-500">
                  <p>Extra rough</p>
                  <p>Extra soft</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex md:col-auto col-span-2  ">
            <div className="text-lg mt-6 ml-16 lg:ml-0   max-w-sm ">
              <div className="flex items-center border-b border-gray-300 pb-2">
                <img
                  src="images/iron.svg"
                  alt="iron icon"
                  className=" h-9 filter contrast-50 pr-4  "
                />
                <h1 className="text-xl font-bold ">Features</h1>
              </div>
              <div className="mb-4 mt-2  ">
                <h3 className="font-bold">Budget</h3>
                <p>Suited for the economic buyer</p>
              </div>
              <div className=" mb-4 ">
                <h3 className=" font-bold ">Tear-away tag</h3>
                <p>
                  Easily removable tear-away tag that allows you to add an
                  inside label
                </p>
              </div>
              <div className="mb-4 ">
                <h3 className=" font-bold ">Unisex</h3>
                <p>A classic t-shirt that fits well for both men and women</p>
              </div>
              <div>
                <h3 className=" font-bold ">Bestseller</h3>
                <p>A top-selling item that is loved by our customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <Navigation />
      </div>
    </div>
  );
};

export default InformationBar;
