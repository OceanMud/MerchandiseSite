import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="lg:grid lg:grid-cols-2  ">
      <div className="p-20 pt-0  ">
        <div className="text-xs font-bold mt-32 space-y-2 lg:w-auto  w-96  mx-auto  ">
          <Link to="/">
            <img src="/images/logo.svg" className="h-16 lg:-mt-10 mb-20" />
          </Link>
          <div className="">
            <h1 className="text-2xl font-semibold mb-10  ">
              Sign up to GwentGear
            </h1>
          </div>

          <p>Username:</p>
          <input
            className="  h-10 rounded lg:w-96 w-72 focus:shadow-xl appearance-none focus:outline-none shadow-none focus:ring-0  focus:border-gray-400  border-gray-300 focus:border-t bg-blue-50  border-t-2  "
            type="text"
            placeholder=""
          />
          <p className="">Email:</p>
          <input
            className="h-10 rounded lg:w-96 w-72 focus:shadow-xl appearance-none focus:outline-none shadow-none focus:ring-0  focus:border-gray-400  border-gray-300 focus:border-t bg-blue-50  border-t-2  "
            type="text"
            placeholder=""
          />
          <p className="">Password:</p>
          <input
            className="h-10 rounded lg:w-96 w-72 focus:shadow-xl appearance-none focus:outline-none shadow-none focus:ring-0  focus:border-gray-400  border-gray-300 focus:border-t bg-blue-50  border-t-2  "
            type="text"
            placeholder=""
          />
          <div className="border-gray-200 border-b lg:w-96 w-72 ">
            <button className="bg-red-600 mb-4 font-semibold text-sm rounded-md text-white mt-6 px-5 py-2 lg:w-auto w-full ">
              Sign in
            </button>
            <div className="mb-4 ">
              <span className=" font-normal">
                <input type="checkbox" className="mr-2  focus:ring-0" /> I agree
                to GwentGear's
                <a
                  href="#"
                  className="text-UrlBlue mx-1  border-b border-transparent hover:border-UrlBlue "
                >
                  Terms of Service
                </a>
                and
                <a
                  href="#"
                  className="text-UrlBlue ml-1  border-b border-transparent hover:border-UrlBlue "
                >
                  Privacy Policy
                </a>
                .
              </span>
            </div>
          </div>
          <div className=" text-sm font-normal flex space-x-2 text-gray-600">
            <a
              href="#"
              className="border-b border-transparent hover:border-gray-600"
            >
              Sign in
            </a>
            <p>·</p>
            <a
              href="#"
              className="border-b border-transparent hover:border-gray-600"
            >
              Forgot password?
            </a>
          </div>
        </div>
      </div>

      <div className="border-l border-gray-300 hidden lg:block">
        <img
          src="/images/signup-splash.jpg"
          className="h-screen w-full  object-cover"
        />
      </div>
    </div>
  );
};

export default Signup;
