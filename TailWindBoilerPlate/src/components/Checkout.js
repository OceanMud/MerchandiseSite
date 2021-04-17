import React from "react";

const Checkout = () => {
  return (
    <div className=" pb-40 -mb-20 bg-gray-50 pt-10">
      <div className="flex justify-center ">
        <div className="flex items-center space-x-4 font-bold">
          <div className="rounded-full px-4 py-2 border-gray-500 border text-white font-semibold bg-gray-900">
            1
          </div>
          <h3>Products</h3>
        </div>
        <div className="w-28 border-gray-300 ml-4 mr-4 mt-1 self-center border-b"></div>
        <div className="flex items-center space-x-4 font-bold">
          <div className="rounded-full px-4 py-2 border-gray-500 border  font-semibold bg-gray-50">
            2
          </div>
          <h3 className="font-normal">Shipping</h3>
        </div>
        <div className="w-28 border-gray-300 ml-4 mr-4 mt-1 self-center border-b"></div>
        <div className="flex items-center space-x-4 font-bold">
          <div className="rounded-full px-4 py-2 border-gray-500 border  font-semibold bg-gray-50">
            3
          </div>
          <h3 className="font-normal">Review Order</h3>
        </div>
      </div>
      <div className="bg-white  border-gray-300 border mt-10 h-72 pt-8 px-20  max-w-5xl mx-auto text-sm text-gray-500">
        <div className="flex  tracking-wider border-b pb-2 border-gray-200 ">
          <h3 className="w-2/4 ">PRODUCT</h3>
          <h3 className="w-1/4">QTY</h3>
          <h3 className="w-1/4">PRICE</h3>
        </div>
      </div>
      <div className="bg-white border-gray-300 border mt-3 h-48 max-w-5xl mx-auto pt-8 px-20 text-sm ">
        <div className="flex justify-center">
          <div className="flex  flex-col  w-80    ">
            <div className="flex justify-between mb-2  ">
              <p>Subtotal (1 item)</p>
              <p className="text-gray-900 font-bold ">$7.95</p>
            </div>
            <div className="flex justify-between mb-6  ">
              <p>Total</p>
              <p className="text-gray-900 font-bold">$7.95</p>
            </div>
            <a
              href="#"
              className="bg-red-600 w-full hover:shadow-lg  hover:border-black border
                  
                     text-white  font-semibold  text-base  text-center py-3 rounded-md   "
            >
              Continue to Shipping
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
