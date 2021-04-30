import React, { useState, useRef } from "react";
import MobileSearchBar from "./MobileSearchBar";
import ProductsDropdown from "./ProductsDropdown";
import StreamerDropdown from "./StreamerDropdown";
import MetaDropdown from "./MetaDropdown";

// Bottom Header is Everything Below the first Bottom Border

const BottomHeader = () => {
  const [dropDown, setDropDown] = useState(0);
  const [menuActive, setMenuActive] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const [visible, setVisible] = useState("absolute");

  const subRef = useRef(subMenu);
  subRef.current = subMenu;

  const dropDownTestExtended = (current) => {
    if (current !== true) {
      setMenuActive(false);
      setDropDown(0);
      setVisible("hidden");
    }
  };

  const dropDownTest = () => {
    setTimeout(() => {
      dropDownTestExtended(subRef.current);
    }, 500);
  };

  return (
    <>
      <MobileSearchBar />

      <div
        className="border-gray-200   md:border-b py-1  "
        onMouseEnter={() => setSubMenu(true)}
        onMouseLeave={(() => setSubMenu(false), () => setMenuActive(false))}
      >
        <div className="  max-w-screen-2xl mx-auto pl-12 pr-4 pb-4 space-x-5 text-sm mt-4   text-gray-500 hidden md:block">
          <a
            href="/"
            className="hover:text-gray-900 group"
            onMouseEnter={() => {
              setDropDown(1);
              setMenuActive(true);
              setVisible("absolute");
            }}
            onMouseLeave={() => {
              dropDownTest();
            }}
          >
            Products
            <img
              src="/images/arrow.svg"
              alt="magnify icon"
              className="xl:h-6 transform transition  group-hover:-rotate-180 ease-in-out duration-300 hidden filter contrast-0   md:inline-block h-5  "
            />
          </a>
          <a
            href="/"
            className="hover:text-gray-900 group "
            onMouseEnter={() => {
              setDropDown(2);
              setMenuActive(true);
            }}
            onMouseLeave={() => {
              dropDownTest();
            }}
          >
            Streamers
            <img
              src="/images/arrow.svg"
              alt="arrow svg"
              className="xl:h-6 transform transition  group-hover:-rotate-180 ease-in-out duration-300 hidden filter contrast-0   md:inline-block h-5  "
            />
          </a>
          <a href="/" className="hover:text-gray-900 group">
            Articles
            <img
              src="/images/arrow.svg"
              alt="arrow svg"
              className="xl:h-6 transform transition  group-hover:-rotate-180 ease-in-out duration-300 hidden filter contrast-0   md:inline-block h-5  "
            />
          </a>
          <a
            href="/"
            className="hover:text-gray-900 group "
            onMouseEnter={() => {
              setDropDown(4);
              setMenuActive(true);
            }}
            onMouseLeave={() => {
              dropDownTest();
            }}
          >
            Meta Reports
            <img
              src="/images/arrow.svg"
              alt="arrow svg"
              className="xl:h-6 transform transition  group-hover:-rotate-180 ease-in-out duration-300 hidden filter contrast-0   md:inline-block h-5  "
            />
          </a>
          <a href="/" className="hover:text-gray-900">
            Card Database
          </a>
          <a href="/" className="hover:text-gray-900 group">
            Resources
            <img
              src="/images/arrow.svg"
              alt="arrow svg"
              className="xl:h-6 transform transition  group-hover:-rotate-180 ease-in-out duration-300 hidden filter contrast-0   md:inline-block h-5  "
            />
          </a>
        </div>

        {dropDown === 1 && menuActive === true ? (
          <div className="pl-6  ">
            <div
              className={` border border-gray-200  bg-white z-10 w-full ${visible} max-w-xs mt-1 h-60  mx-auto shadow-2xl flex flex-col pt-4  font-semibold text-gray-600  `}
              onMouseEnter={() => setSubMenu(true)}
              onMouseLeave={() => {
                setMenuActive(false);
                setSubMenu(false);
              }}
            >
              <ProductsDropdown />
            </div>
          </div>
        ) : dropDown === 2 && menuActive === true ? (
          <div
            className="pl-6"
            onMouseEnter={() => setSubMenu(true)}
            onMouseLeave={() => {
              setMenuActive(false);
              setSubMenu(false);
            }}
          >
            <StreamerDropdown />
          </div>
        ) : dropDown === 4 && menuActive === true ? (
          <div
            className="pl-80"
            onMouseEnter={() => setSubMenu(true)}
            onMouseLeave={() => {
              setMenuActive(false);
              setSubMenu(false);
            }}
          >
            <div
              className={` border border-gray-200  bg-white z-10 absolute max-w-xs mt-1 h-36 w-40   shadow-2xl flex flex-col pt-4  font-semibold text-gray-600  `}
            >
              <MetaDropdown />
            </div>
          </div>
        ) : undefined}
      </div>
    </>
  );
};

export default BottomHeader;
