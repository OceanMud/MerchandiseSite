import React from "react";

const Resources = () => {
  return (
    <div className="px-14 bg-gray-100 text-gray-600  ">
      <div className="mt-20 pt-10 pb-10   max-w-screen-xl justify-between mx-auto lg:flex md:pl-0  sm:pl-20 grid md:grid-cols-3 grid-cols-2 md:gap-0 gap-4  ">
        <div className="lg:flex lg:flex-col    lg:w-4/12 items-start md:block hidden  ">
          <img className=" mt-2 h-20 pb-4 " src="/images/logo.svg" />
          <p className="font-bold text-gray-900 ">So much more than cards</p>
          <p className="w-52">Trusted to deliver items since 2021</p>
        </div>
        <div className="flex flex-col space-y-2 xl:w-2/12 lg:w-3/12   pb-4">
          <h3 className="font-bold text-lg text-gray-900  ">
            Sell with GwentGear
          </h3>
          <a href="#" className="hover:text-gray-900">
            Print on demand
          </a>
          <a href="#" className="w-48 hover:text-gray-900">
            Use Warehousing & Fulfillment
          </a>
          <a href="#" className="w-48 hover:text-gray-900">
            Sell online without inventory
          </a>
        </div>
        <div className="flex flex-col space-y-2  xl:w-2/12 lg:w-3/12  ">
          <h3 className="font-bold text-lg w-48  text-gray-900 sm:whitespace-nowrap md:whitespace-normal">
            Create custom products
          </h3>
          <a href="#" className="hover:text-gray-900">
            Product catalog
          </a>
          <a href="#" className="hover:text-gray-900">
            Design Maker
          </a>{" "}
        </div>

        <div className="flex flex-col space-y-2  w-2/12 md:col-start-2  ">
          <h3 className="font-bold text-lg text-gray-900   ">Resources</h3>
          <a href="#" className="hover:text-gray-900">
            Shipping
          </a>
          <a href="#" className="hover:text-gray-900">
            Returns
          </a>
          <a href="#" className="hover:text-gray-900">
            Policies
          </a>
          <a href="#" className="hover:text-gray-900">
            Sitemap
          </a>
        </div>
        <div className="flex flex-col space-y-2  lg:w-2/12  ">
          <h3 className="font-bold text-lg text-gray-900">About Printful</h3>
          <a href="#" className="hover:text-gray-900">
            Our story
          </a>
          <a href="#" className="hover:text-gray-900">
            Contacts
          </a>
        </div>

        <div className=" pt-10  items-start md:hidden block   ">
          <img className=" mt-2 h-16 pb-4 " src="/images/logo.svg" />
          <p className="font-bold hover:text-gray-900 text-gray-900 whitespace-nowrap">
            So much more than cards
          </p>
          <p className="w-52 hover:text-gray-900">
            Trusted to deliver items since 2021
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resources;
