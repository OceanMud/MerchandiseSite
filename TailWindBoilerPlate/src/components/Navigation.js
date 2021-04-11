import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default () => {
  const slide1 = () => (
    <div className="  mx-auto text-lg  max-w-md">
      <div className="flex  mt-6 border-b border-gray-300 pb-2  ">
        <img
          src="images/hanger.svg"
          className=" h-9 filter  contrast-50 pr-4  "
        />
        <h1 className="text-xl  font-bold mr-8  ">Style and fit</h1>
      </div>
      <div className="mb-2 mt-6 flex flex-col mx-auto ">
        <h3 className=" font-bold">Regular fit</h3>
        <p>Standard length, the fabric easily gives into movement</p>
      </div>
      <div className="mt-6 flex flex-col mx-auto ">
        <h3 className=" font-bold">Tubular</h3>
        <p>
          Constructed from a single piece of cloth--it doesnt have side seams
        </p>
      </div>
    </div>
  );

  const slide2 = () => (
    <div className=" mx-auto  max-w-md">
      <div className="flex  mt-6   border-b border-gray-300 pb-2   ">
        <img
          src="images/palette.svg"
          className=" h-9 filter contrast-50 pr-4  "
        />
        <h1 className="text-xl font-extrabold">Material</h1>
      </div>
      <div className=" flex flex-col  ">
        <div className="  mt-1  ">
          <div className=" flex justify-between mt-6">
            <h3 className="text-md font-bold">Fabric thickness</h3>
            <p> Medium weight</p>
          </div>
          <div>
            <progress className="w-full h-1  bg-black" value="70" max="100">
              70 %
            </progress>
            <div className="flex text-sm justify-between text-gray-500">
              <p>Lightweight</p>
              <p>Heavyweight</p>
            </div>
          </div>
        </div>

        <div className="mb-2  mt-4 ">
          <div className=" flex justify-between">
            <h3 className="text-md font-bold">Softness scale</h3>
            <p> Medium rough</p>
          </div>
          <div>
            <progress className="w-full h-1  bg-black" value="30" max="100">
              70 %
            </progress>
            <div className="flex text-sm justify-between text-gray-500">
              <p>Extra rough</p>
              <p>Extra soft</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const slide3 = () => (
    <div className="mx-auto text-lg   max-w-md">
      <div className="flex border-b border-gray-300 pb-2 mt-6">
        <img src="images/iron.svg" className=" h-9 filter contrast-50 pr-4  " />
        <h1 className="text-xl font-bold ">Features</h1>
      </div>
      <div className="mb-4 mt-2  ">
        <h3 className=" font-bold">Budget</h3>
        <p>Suited for the economic buyer</p>
      </div>
      <div className=" mb-4 ">
        <h3 className=" font-bold ">Tear-away tag</h3>
        <p>
          Easily removable tear-away tag that allows you to add an inside label
        </p>
      </div>
      <div className="mb-4 ">
        <h3 className=" font-bold ">Unisex</h3>
        <p>A classic t-shirt that fits well for both men and women</p>
      </div>
      <div className="">
        <h3 className="font-bold ">Bestseller</h3>
        <p>A top-selling item loved by our customers</p>
      </div>
    </div>
  );

  return (
    <Swiper
      className="bg-gray-100  "
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>{slide1}</SwiperSlide>
      <SwiperSlide>{slide2}</SwiperSlide>
      <SwiperSlide>{slide3}</SwiperSlide>
      ...
    </Swiper>
  );
};
