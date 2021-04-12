import React, { useState } from "react";

const Header = () => {
  const [dropDown, setDropDown] = useState(0);
  const [menuActive, setMenuActive] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const [visible, setVisible] = useState("absolute");

  const dropDownTest = () => {
    setTimeout(() => {
      if (subMenu === false) {
        setMenuActive(false);
        setDropDown(0);
        setVisible("hidden");
        return;
      }
    }, 1000);
  };

  return (
    <>
      <div className="border-gray-200 border-b      ">
        <div className="flex max-w-screen-2xl mx-auto py-4 md:px-6  justify-between  pr-5 bottom-1 text-gray-500">
          <div className="flex pl-2  md:w-auto w-full  ">
            <div>
              <img
                className=" md:hidden block h-6 filter contrast-0  "
                src="/images/menu.svg"
              />
              <p className=" md:hidden text-xs ">menu</p>
            </div>

            <div className="flex w-full items-center justify-center ">
              <img
                className="xl:h-6 md:block hidden h-4 "
                src="/images/logo.svg"
              />
              <img
                className="xl:h-6  md:hidden pl-24  block h-5  "
                src="/images/logo-icon.svg"
              />
            </div>
            <div className="relative hidden md:block">
              <input
                type="form"
                placeholder="Search Printful"
                className=" xl:ml-40 xl:w-96 w-48 rounded-md ml-10  border border-gray-500 
            text-sm
           text-gray-900
          hover:shadow-lg bg-gray-100 hover:bg-gray-50 focus:bg-white outline-none pl-10 py-2 "
              />
              <img
                src="images/magnify.svg"
                className=" absolute inset-0  filter contrast-0  group-hover:contrast-100 inline-block w-6 ml-2 xl:left-40 left-10 top-2
           "
              />
            </div>
          </div>
          <div className=" text-sm flex items-center space-x-4 flex-shrink-0   ">
            <a href="#" className=" group  flex items-center ">
              <img
                src="images/world.svg"
                className=" hidden  filter contrast-0  group-hover:contrast-100 md:inline-block w-5 
           "
              />
              <span className="group-hover:text-gray-900 align-baseline hidden md:inline-block ">
                Preferences
              </span>
            </a>
            <a href="#" className="group  flex items-center ">
              <img
                src="images/user.svg"
                className="  filter contrast-0  group-hover:contrast-100  inline-block w-5   "
              />
              <span className="group-hover:text-gray-900 hidden md:inline-block ">
                Sign in
              </span>
            </a>
            <a href="#" className="group  flex items-center">
              <img
                src="images/user-add.svg"
                className="  filter contrast-0  group-hover:contrast-100 inline-block w-5  "
              />
              <span className="group-hover:text-gray-900 align-baseline hidden md:inline-block ">
                Sign up
              </span>
            </a>
            <a href="# " className=" flex items-center">
              <img
                src="images/cart.svg"
                className="filter contrast-0   inline-block w-5  "
              />
              <span className="align-baseline hidden md:inline-block">
                My cart
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="relative flex  p-4  border-gray-200 border-b   md:hidden">
        <input
          type="form"
          placeholder="Search Printful"
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
      <div className="border-gray-200   md:border-b py-1  ">
        <div className="  max-w-screen-2xl mx-auto pl-12 pr-4 pb-4 space-x-5 text-sm mt-4   text-gray-500 hidden md:block">
          <a
            href="# "
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
              className="xl:h-6 transform transition  group-hover:-rotate-180 ease-in-out duration-300 hidden filter contrast-0   md:inline-block h-5  "
              src="/images/arrow.svg"
            />
          </a>
          <a
            href="#"
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
              className="xl:h-6 transform transition  group-hover:-rotate-180 ease-in-out duration-300 hidden filter contrast-0   md:inline-block h-5  "
              src="/images/arrow.svg"
            />
          </a>
          <a href="#" className="hover:text-gray-900 group">
            Integrations
            <img
              className="xl:h-6 transform transition  group-hover:-rotate-180 ease-in-out duration-300 hidden filter contrast-0   md:inline-block h-5  "
              src="/images/arrow.svg"
            />
          </a>
          <a href="#" className="hover:text-gray-900 group">
            How it works
            <img
              className="xl:h-6 transform transition  group-hover:-rotate-180 ease-in-out duration-300 hidden filter contrast-0   md:inline-block h-5  "
              src="/images/arrow.svg"
            />
          </a>
          <a href="#" className="hover:text-gray-900">
            Mockup Generator
          </a>
          <a href="#" className="hover:text-gray-900 group">
            Resources
            <img
              className="xl:h-6 transform transition  group-hover:-rotate-180 ease-in-out duration-300 hidden filter contrast-0   md:inline-block h-5  "
              src="/images/arrow.svg"
            />
          </a>
          <a href="#" className="hover:text-gray-900">
            Blog
          </a>
        </div>

        {dropDown === 1 && menuActive === true ? (
          <div
            className="pl-6  "
            onMouseEnter={() => setSubMenu(true)}
            onMouseLeave={() => setMenuActive(false)}
          >
            <div
              className={` border border-gray-200  bg-white z-10 w-full ${visible} max-w-xs mt-1 h-60  mx-auto shadow-2xl flex flex-col pt-4  font-semibold text-gray-600  `}
            >
              <a
                href="#"
                className="hover:bg-gray-100 hover:text-gray-900 flex group items-center justify-between  py-2 w-full"
              >
                <p className="px-4">T-shirt</p>
                <img
                  className="xl:h-6 transform transition group-hover:translate-x-3  -rotate-90 ease-in-out duration-300 hidden filter contrast-0  mr-4  md:inline-block h-5  "
                  src="/images/arrow.svg"
                />
              </a>
              <a
                href="#"
                className="hover:bg-gray-100 hover:text-gray-900 flex group items-center justify-between  py-2 w-full"
              >
                <p className="px-4"> Unisex Long Sleeve Tee</p>
                <img
                  className="xl:h-6 transform transition group-hover:translate-x-3  -rotate-90 ease-in-out duration-300 hidden filter contrast-0  mr-4  md:inline-block h-5  "
                  src="/images/arrow.svg"
                />
              </a>
              <a
                href="#"
                className="hover:bg-gray-100 hover:text-gray-900 flex group items-center justify-between  py-2 w-full"
              >
                <p className="px-4">White Glossy Mug</p>
                <img
                  className="xl:h-6 transform transition group-hover:translate-x-3  -rotate-90 ease-in-out duration-300 hidden filter contrast-0  mr-4  md:inline-block h-5  "
                  src="/images/arrow.svg"
                />
              </a>
              <a
                href="#"
                className="hover:bg-gray-100 hover:text-gray-900 flex group items-center justify-between  py-2 w-full"
              >
                <p className="px-4">Ceramic Mug with Color Inside</p>
                <img
                  className="xl:h-6 transform transition group-hover:translate-x-3  -rotate-90 ease-in-out duration-300 hidden filter contrast-0  mr-4  md:inline-block h-5  "
                  src="/images/arrow.svg"
                />
              </a>
              <a
                href="#"
                className="hover:bg-gray-100 hover:text-gray-900 flex group items-center justify-between  py-2 w-full"
              >
                <p className="px-4">Glossy Black Magic Mug</p>
                <img
                  className="xl:h-6 transform transition group-hover:translate-x-3  -rotate-90 ease-in-out duration-300 hidden filter contrast-0  mr-4  md:inline-block h-5  "
                  src="/images/arrow.svg"
                />
              </a>
            </div>
          </div>
        ) : dropDown === 2 && menuActive === true ? (
          <div
            className="pl-6  "
            onMouseEnter={() => setSubMenu(true)}
            onMouseLeave={() => setMenuActive(false)}
          >
            <div className=" border border-gray-200  bg-white z-10 w-full absolute max-w-xs mt-1 h-60  mx-auto shadow-2xl ml-20 grid grid-cols-3 grid-flow-row pt-4 text-sm  font-semibold text-gray-600  ">
              <a href="#" className=" space-y-2    py-2 ">
                <p className="px-4 hover:text-gray-900 hover:bg-gray-100">
                  Bushr
                </p>
                <p className="px-4 hover:text-gray-900 hover:bg-gray-100">
                  Cceely
                </p>
                <p className="px-4 hover:text-gray-900 hover:bg-gray-100">
                  Crozyr
                </p>
              </a>
              <a
                href="#"
                className=" hover:text-gray-900 space-y-2  py-2 w-full"
              >
                <p className="px-4 hover:text-gray-900 hover:bg-gray-100">
                  Freddybabes
                </p>
                <p className="px-4 hover:text-gray-900 hover:bg-gray-100">
                  Gorflow
                </p>
                <p className="px-4 truncate hover:text-gray-900 hover:bg-gray-100">
                  Mia Malkova
                </p>
              </a>
              <a
                href="#"
                className=" hover:text-gray-900 space-y-2   py-2 w-full"
              >
                <p className="px-4 hover:text-gray-900 hover:bg-gray-100">
                  Nik__r
                </p>
                <p className="px-4 hover:text-gray-900 hover:bg-gray-100">
                  OceanMud
                </p>
                <p className="px-4 hover:text-gray-900 hover:bg-gray-100">
                  Pajabol
                </p>
              </a>
              <a href="#" className="hover:text-gray-900  space-y-2   w-full">
                <p className="px-4 hover:text-gray-900 hover:bg-gray-100">
                  Redrame
                </p>
                <p className="px-4 hover:text-gray-900  hover:bg-gray-100">
                  Saber_97
                </p>
                <p className="px-4 hover:text-gray-900 hover:bg-gray-100">
                  Satshime
                </p>
              </a>
              <a href="#" className=" hover:text-gray-900   space-y-2 w-full">
                <p className="px-4 hover:text-gray-900 hover:bg-gray-100">
                  Shaggyccg
                </p>
                <p className="px-4 hover:text-gray-900 truncate hover:bg-gray-100">
                  SpecimenGwent
                </p>
                <p className="px-4 hover:text-gray-900  hover:bg-gray-100">
                  Spyro_ZA
                </p>
              </a>
              <a href="#" className=" hover:text-gray-900   space-y-2 w-full">
                <p className="px-4 hover:text-gray-900 hover:bg-gray-100">
                  TailBot
                </p>
                <p className="px-4 hover:text-gray-900 hover:bg-gray-100">
                  Trynet123
                </p>
                <p className="px-4 hover:text-gray-900  hover:bg-gray-100">
                  Vendetta_sc
                </p>
              </a>
            </div>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </>
  );
};

export default Header;

// hello