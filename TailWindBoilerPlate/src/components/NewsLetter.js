import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-gray-200  ">
      <div className="pt-10 xl:max-w-6xl lg:max-w-4xl md:max-w-2xl sm:max-w-md max-w-sm mx-auto justify-between  pb-6    ">
        <h1 className="font-bold text-lg mb-4">Subscribe to our newsletter!</h1>

        <input
          className="rounded w-96 focus:shadow-xl appearance-none focus:outline-none shadow-none focus:ring-0  focus:border-gray-400  border-gray-300 focus:border-t bg-gray-50  border-t-2  "
          type="text"
          placeholder="NewsLetter"
        />
      </div>

      <div className="pt-4 xl:max-w-6xl lg:max-w-4xl md:max-w-2xl  max-w-md mx-auto  border-b border-t border-gray-300 pb-4 ">
        <div className="flex justify-between ">
          <h1 className=" text-gray-600 text-xs mb-1 ">
            Payment methods we accept:
          </h1>
          <h1 className=" text-gray-600 text-xs mr-16 ">We deliver with:</h1>
        </div>
        <div className="flex justify-between">
          <div className="flex space-x-1">
            <img src="images/visa.svg" className=" h-6 " />
            <img src="images/mastercard.svg" className=" h-6 " />
            <img src="images/american-express.svg" className=" h-6 " />
            <img src="images/paypal.svg" className=" h-6 " />
            <img src="images/discover.svg" className=" h-6 " />
            <img src="images/jcb.svg" className=" h-6 " />
          </div>
          <div className="flex space-x-1">
            <img src="images/usps.svg" className=" h-6 " />
            <img src="images/dhl.svg" className=" h-6 " />
            <img src="images/fedex.png" className=" h-6 " />
            <img src="images/asendia.png" className=" h-6 " />
          </div>
        </div>
      </div>
      <div className="pt-4 xl:max-w-6xl lg:max-w-4xl md:max-w-2xl sm:max-w-md max-w-sm mx-auto justify-between border-b border-gray-300 text-gray-500     ">
        <h1 className=" text-xs mb-4">
          ©2021 All Rights reserved. OceanMud® LLC.
        </h1>
      </div>
    </div>
  );
};

export default NewsLetter;
