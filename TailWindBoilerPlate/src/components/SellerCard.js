import React, { useEffect } from "react";
import SellerCardImages from "./SellerCardImages";
import SellerCardDescriptions from "./SellerCardDescriptions";
import InformationBar from "./InformationBar";
import DescriptionTabs from "./DescriptionTabs";

const SellerCard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    return () => {
      console.log("unmounted");
    };
  }, []);

  return (
    <div>
      <div>
        <div>
          <div className=" flex space-x-2 pt-4 pl-12 max-w-screen-2xl mx-auto text-sm  pb-4  ">
            <a
              href="#"
              className=" text-UrlBlue tracking-wide   hover:border-UrlBlue border-b border-transparent  "
            >
              Products
            </a>
            <span> / </span>

            <a
              href="#"
              className=" text-UrlBlue tracking-wide hover:border-UrlBlue border-b border-transparent  "
            >
              Men's
            </a>

            <span> / </span>
            <a
              href="#"
              className=" text-UrlBlue tracking-wide hover:border-UrlBlue border-b border-transparent "
            >
              Shirts
            </a>
            <span> / </span>
            <a
              href="#"
              className=" text-UrlBlue tracking-wide hover:border-UrlBlue border-b border-transparent whitespace-nowrap "
            >
              T-Shirts
            </a>
            <span> / </span>
            <span className="font-bold truncate ">
              Unisex Basic Softstyle T-Shirt | Gildan 64000
            </span>
          </div>
        </div>

        <div className="md:grid md:grid-cols-5 max-w-screen-2xl mx-auto">
          <SellerCardImages />
          <SellerCardDescriptions />
        </div>
        <InformationBar />
        <DescriptionTabs />
      </div>
    </div>
  );
};

export default SellerCard;
