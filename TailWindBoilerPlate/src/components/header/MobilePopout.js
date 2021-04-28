import React, { useState, useContext, useEffect } from "react";
import UserContext from "../UserContext";

const MobilePopout = () => {
  const { transition, setTransition } = useContext(UserContext);
  const { sideMenu, setSideMenu } = useContext(UserContext);

  return (
    <div className="block md:hidden ">
      {sideMenu && (
        <div className=" fixed   z-30">
          <div
            className={` bg-white h-screen w-96 ${transition} transition transform ease-in-out duration-300 `}
          >
            <div className="border-t border-b border-gray-200">
              <p
                className=" text-xs p-2 "
                onClick={() => {
                  setTransition("-translate-x-96");
                  setTimeout(() => {
                    setSideMenu(false);
                    document.body.style.overflow = "visible";
                  }, 400);
                }}
              >
                <img
                  className=" filter contrast-0   object-center h-6 "
                  src="/images/close.svg"
                />
                close
              </p>
            </div>
            <div className=" text-sm p-2 flex flex-col space-y-6 text-gray-700  ">
              <a href="#" className=" hover:text-gray-900">
                Home
              </a>
              <a href="#" className="hover:text-gray-900">
                Products
              </a>
              <a href="#" className="hover:text-gray-900">
                Services
              </a>
              <a href="#" className="hover:text-gray-900">
                Integrations
              </a>
              <a href="#" className="hover:text-gray-900">
                How it works
              </a>
              <a href="#" className="hover:text-gray-900">
                Mockup Generator
              </a>
              <a href="#" className="hover:text-gray-900">
                Resources
              </a>
            </div>
            <div className="flex  items-center px-2  flex-col">
              <a
                href="#"
                className="bg-red-600 w-full hover:shadow-lg hover:border-black border
        
           text-white  font-semibold text-sm text-center py-2 rounded-md mt-2 mb-2  "
              >
                Sign Up
              </a>
              <a
                href="#"
                className="bg-gray-300 w-full border hover:shadow-md hover:border-black  font-semibold text-sm text-center text-gray-900 py-2 rounded-md mb-2 "
              >
                Sign In
              </a>
            </div>
          </div>
        </div>
      )}

      {sideMenu && (
        <div
          className="inset-0 fixed z-20  "
          onClick={() => {
            setTransition("-translate-x-96");
            setTimeout(() => {
              setSideMenu(false);
              document.body.style.overflow = "visible";
            }, 400);
          }}
        >
          <div className="bg-gray-900  bg-opacity-50 h-screen w-screen"></div>
        </div>
      )}
    </div>
  );
};

export default MobilePopout;
