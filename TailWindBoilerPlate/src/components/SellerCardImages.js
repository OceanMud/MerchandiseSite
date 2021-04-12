import React, { useState } from "react";

const SellerCardImages = () => {
  const [inHover, setInHover] = useState(-1);
  return (
    <>
      <div className="   ">
        <div className=" space-y-3 md:flex md:flex-col md:items-center hidden  flex-1  ">
          <img
            src="images/model0.jpg"
            className=" h-36 w-24 hover:border-red-500 border-b-4"
            onMouseEnter={() => setInHover(0)}
          />
          <img
            src="images/model0-1.png"
            className="  h-36 w-24  hover:border-red-500 border-b-4  "
            onMouseEnter={() => setInHover(1)}
          />
          <img
            src="images/model0-2.png"
            className=" h-36 w-24  hover:border-red-500 border-b-4  "
            onMouseEnter={() => setInHover(2)}
          />
          <img
            src="images/model0-3.png"
            className="  h-36 w-24 hover:border-red-500 border-b-4 "
            onMouseEnter={() => setInHover(3)}
          />
        </div>
      </div>

      <div className="md:col-start-2  md:col-span-2  flex   justify-center lg:justify-start   ">
        {inHover === 0 ? (
          <img
            src="images/model0.jpg"
            className="lg:h-auto md:h-96 md:w-auto  w-full max-w-md mx-auto "
          />
        ) : inHover === 1 ? (
          <img
            src="images/model0-1.png"
            className="lg:h-auto md:h-96 md:w-auto w-full max-w-md mx-auto "
          />
        ) : inHover === 2 ? (
          <img
            src="images/model0-2.png"
            className="lg:h-auto md:h-96 md:w-auto w-full max-w-md mx-auto "
          />
        ) : (
          <img
            src="images/model0-3.png"
            className=" lg:h-auto md:h-96 md:w-auto w-full max-w-md mx-auto"
          />
        )}
      </div>
    </>
  );
};

export default SellerCardImages;
