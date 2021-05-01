import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import history from "../routers/History";
import { checkSignin } from "./utils";
import UserContext from "../UserContext";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUserInfo } = useContext(UserContext);

  const initializeSignin = () => {
    const results = async () => await checkSignin(email, password);
    results()
      .then((result) => {
        setUserInfo({
          name: result.name,
          email: result.email,
          token: result.token,
        });

        history.push("/dashboard");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="lg:grid lg:grid-cols-2  ">
      <div className="p-20 pb-0 ">
        <div className="text-xs font-bold mt-32 space-y-2 lg:w-auto  w-96  mx-auto  ">
          <Link to="/">
            <img
              src="/images/logo.svg"
              alt="GwentGear Logo"
              className="h-16 lg:-mt-10 mb-20"
            />
          </Link>

          <div className="">
            <h1 className="text-2xl font-semibold mb-10  ">
              Sign into GwentGear
            </h1>
          </div>
          <p className="">Email:</p>
          <input
            className="h-10 rounded lg:w-96 w-72 focus:shadow-xl appearance-none focus:outline-none shadow-none focus:ring-0  focus:border-gray-400  border-gray-300 focus:border-t bg-blue-50  border-t-2  "
            value={email}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>Password:</p>
          <input
            className="  h-10 rounded lg:w-96 w-72 focus:shadow-xl appearance-none focus:outline-none shadow-none focus:ring-0  focus:border-gray-400  border-gray-300 focus:border-t bg-blue-50  border-t-2  "
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="border-gray-200 border-b lg:w-96 w-72 ">
            <div
              className="flex justify-center bg-red-600 mb-4 font-semibold text-sm rounded-md text-white mt-6 px-5 py-2 lg:w-auto  "
              onClick={() => initializeSignin()}
            >
              Sign in
            </div>
          </div>

          <div className=" text-sm font-normal flex space-x-2 text-gray-600">
            <div
              href="/"
              className="border-b border-transparent hover:border-gray-600"
            >
              Sign up
            </div>
            <p>·</p>
            <a
              href="/"
              className="border-b border-transparent hover:border-gray-600"
            >
              Forgot password?
            </a>
          </div>
        </div>
      </div>

      <div className="border-l border-gray-300 hidden lg:block">
        <img
          src="/images/signin-splash.jpg"
          alt="Decorative"
          className="h-screen w-full  object-cover"
        />
      </div>
    </div>
  );
};

export default Signin;
