import React from "react";
import { Link } from "react-router-dom";

const SellerCardDescriptions = () => {
  return (
    <div className="md:col-start-4 md:col-span-2 ">
      <div className="mx-auto    max-w-md">
        <div className="flex  md:justify-start  ">
          <h1 className=" text-2xl font-bold  ">
            Unisex Basic Softstyle T-Shirt | Gildan 64000
          </h1>
        </div>
        <div className="flex mt-6 md:justify-start ">
          <div>
            <span className="text-gray-500 line-through text-xl">$54.00</span>
            <span className="text-red-500 pl-2 text-xl">$40.50</span>
          </div>
        </div>

        <div className=" flex items-center space-x-2 mt-4 md:justify-start     ">
          <img src="images/star.svg" className=" h-4  " />
          <img src="images/star.svg" className="h-4 " />
          <img src="images/star.svg" className=" h-4" />
          <img src="images/star.svg" className=" h-4" />
          <img src="images/star.svg" className=" h-4" />
          <a
            href="#"
            className="text-UrlBlue hover:border-UrlBlue border-b border-transparent"
          >
            1176 Reviews
          </a>
        </div>
        <div className=" flex  space-x-2 mt-4  font-bold md:justify-start  ">
          Choose color
        </div>
        <div className=" flex space-x-2 mt-2 md:justify-start     ">
          <input
            type="checkbox"
            className="h-7 w-7 rounded-lg bg-blue-900  text-blue-900 "
          />

          <input
            type="checkbox"
            className=" bg-black text-black h-7 w-7  rounded-lg "
          />
          <input
            type="checkbox"
            className="h-7 w-7 rounded-lg bg-gray-800 text-gray-800 "
          />
          <input
            type="checkbox"
            className="h-7 w-7 rounded-lg text-gray-500 bg-gray-500 "
          />
          <input
            type="checkbox"
            className="h-7 w-7 text-gray-100 bg-gray-100 rounded-lg "
          />
        </div>
        <div className=" mt-6 md:w-72 space-x-24 flex font-bold md:justify-start  ">
          <p className="md:inline md:pr-6 ">Choose Size</p>
          <p className="text-UrlBlue md:inline ">Size guide</p>
        </div>
        <div className=" flex  space-x-1 mt-2  font-bold md:justify-start  ">
          <button className="border py-2 px-4 hover:bg-gray-100 hover:shadow-lg shadow-inner	 font-bold">
            S
          </button>
          <button className="border hover:bg-gray-100 hover:shadow-lg py-2 px-3 font-bold">
            M
          </button>
          <button className="border hover:bg-gray-100 hover:shadow-lg py-2 px-4 font-bold">
            L
          </button>
          <button className="border hover:bg-gray-100 hover:shadow-lg py-2 px-3 font-bold">
            XL
          </button>
          <button className="border hover:bg-gray-100 hover:shadow-lg py-2 px-2 font-bold">
            2XL
          </button>
          <button className="border hover:bg-gray-100 hover:shadow-lg py-2 px-2 font-bold">
            3XL
          </button>
        </div>
        <div className="flex md:justify-start   mt-6">
          <h3 className="font-bold">Estimated delivery to</h3>
        </div>

        <div className="flex mt-2 items-center md:justify-start  ">
          <img src="images/ca.svg" className=" h-4   " />
          <p className=" pl-2 "> Canada</p>
        </div>

        <div className="flex md:justify-start  mt-2">
          <p className=" text-2xl font-bold">Apr 15–23</p>
        </div>
        <div className="flex    md:justify-start  mb-4 md:mr-4  mt-6">
          <Link
            to="/checkout"
            className="uppercase text-white  bg-black w-full h-10 hover:bg-gray-500 transition transform duration-300 ease-in-out  "
          >
            <p className="h-full w-full text-center mt-2"> Add to Bag</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellerCardDescriptions;
