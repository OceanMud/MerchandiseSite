import React, { useState, useEffect, useContext } from "react";
import UserContext from "../UserContext";
import { Link } from "react-router-dom";
import history from "../routers/History";
import MobilePopout from "./MobilePopout";
import axios from "axios";

import StandardSearchBar from "./StandardSearchBar";

// Top Header is Everything above the first bottom Border

const TopHeader = () => {
  const [login, setLogin] = useState(false); // Signin/Signup -> Account/logout
  const { userInfo } = useContext(UserContext); // Check login Status
  const { jsonToken } = useContext(UserContext); // Save for Account
  const { sideMenu, setSideMenu } = useContext(UserContext); // Shows Mobile
  const { setTransition } = useContext(UserContext); // Pops Out Mobile

  useEffect(() => {
    if (userInfo) {
      setLogin(true);
    }
    return () => {};
  }, [userInfo]);

  const mobileCheck = () => {
    if (!sideMenu) {
      setTimeout(() => {
        setTransition("translate-x-0");
      }, 100);
      document.body.style.overflow = "hidden";
      setSideMenu(true);
    }
  };

  const logoutCheck = () => {
    const config = {
      headers: { Authorization: `Bearer ${jsonToken}` },
    };

    axios
      .post("http://localhost:3001/users/logout", {}, config)
      .then(function (response) {
        if (response.status === 200) {
          setLogin(false);
          history.push("/");
        } else {
          throw new Error("Error");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="border-gray-200 border-b  cursor-pointer     ">
      {sideMenu ? <MobilePopout /> : undefined}

      <div className="flex max-w-screen-2xl mx-auto py-4 md:px-6  justify-between  pr-5 bottom-1 text-gray-500">
        <div className="flex pl-2  md:w-auto w-full  ">
          {/*Menu SVG + Determines if SideMenu should popout */}
          <div onClick={() => mobileCheck()} className="cursor-pointer group">
            <img
              src="/images/menu.svg"
              alt="menu icon"
              className=" md:hidden block h-6 filter contrast-0 group-hover:contrast-75"
            />
            <p className=" md:hidden text-xs group-hover:text-gray-900  ">
              menu
            </p>
          </div>

          <div className="flex w-full items-center justify-center  ">
            <Link to="/">
              <img
                src="/images/logo.svg"
                alt="gwentgear logo"
                className="xl:h-14  pl-24 md:pl-0 md:object-center h-10 "
              />
            </Link>
          </div>
          <StandardSearchBar />
        </div>
        <div className=" text-sm flex items-center space-x-4 flex-shrink-0   ">
          <a href="/" className=" group  flex items-center ">
            <img
              src="images/world.svg"
              alt="preferences icon"
              className=" hidden  filter contrast-0  group-hover:contrast-100 md:inline-block w-5"
            />
            <span className="group-hover:text-gray-900 align-baseline hidden md:inline-block ">
              Preferences
            </span>
          </a>
          {login === false ? (
            <Link to="/signin" className="group  flex items-center ">
              <img
                src="images/user.svg"
                alt="user icon"
                className="  filter contrast-0  group-hover:contrast-100  inline-block w-5"
              />
              <span className="group-hover:text-gray-900 hidden md:inline-block ">
                Sign in
              </span>
            </Link>
          ) : (
            <Link to="/dashboard" className="group  flex items-center">
              <img
                src="images/account.svg"
                alt="account icon"
                className="  filter contrast-0  group-hover:contrast-100  inline-block w-5"
              />
              <p className=" group-hover:text-gray-900 hidden md:inline-block ">
                {userInfo.name}
              </p>
            </Link>
          )}
          {login === false ? (
            <Link to="signup" className="group  flex items-center">
              <img
                src="images/user-add.svg"
                alt="signup icon"
                className="  filter contrast-0  group-hover:contrast-100 inline-block w-5  "
              />
              <span className="group-hover:text-gray-900 align-baseline hidden md:inline-block ">
                Sign up
              </span>
            </Link>
          ) : (
            <div
              className="group  flex items-center"
              onClick={() => logoutCheck()}
            >
              <img
                src="images/logout.svg"
                alt="logout icon"
                className="  filter contrast-0  group-hover:contrast-100 inline-block w-5"
              />
              <span className="group-hover:text-gray-900 align-baseline hidden md:inline-block ">
                Logout
              </span>
            </div>
          )}
          <Link to="/dashboard" className=" flex items-center">
            <img
              src="images/cart.svg"
              alt="cart icon"
              className="filter contrast-0   inline-block w-5  "
            />
            <span className="align-baseline hidden md:inline-block">
              My cart
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
