import React, { useState, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const SellerCardImages = () => {
  const [inHover, setInHover] = useState(0);
  const subRef = useRef(0);
  subRef.current = inHover;

  const images = [
    "images/model0.jpg",
    "images/model0-1.png",
    "images/model0-2.png",
    "images/model0-3.png",
  ];

  const slide1 = () => (
    <img
      src={images[inHover]}
      className="lg:h-auto md:h-96 md:w-auto  w-full max-w-md mx-auto "
    />
  );

  const slide2 = () => (
    <img
      src={images[inHover]}
      className="lg:h-auto md:h-96 md:w-auto w-full max-w-md mx-auto "
    />
  );

  const slide3 = () => (
    <img
      src={images[inHover]}
      className="lg:h-auto md:h-96 md:w-auto w-full max-w-md mx-auto "
    />
  );
  const slide4 = () => (
    <img
      src={images[inHover]}
      className="lg:h-auto md:h-96 md:w-auto w-full max-w-md mx-auto "
    />
  );

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

      <div className="md:col-start-2 lg:mt-0 md:mt-32  md:col-span-2  flex   justify-center lg:justify-start   ">
        <Swiper
          spaceBetween={100}
          navigation={true}
          loop={true}
          slidesPerView={1}
          onSlideChange={() => console.log("hey")}
          onSwiper={(swiper) => console.log(swiper)}
          onSlidePrevTransitionStart={() => {
            if (subRef.current > 0) {
              subRef.current--;
              setInHover(subRef.current);
            } else if (subRef.current === 0) {
              subRef.current = 3;
              setInHover(subRef.current);
            }
          }}
          onSlideNextTransitionStart={() => {
            if (subRef.current < 3) {
              subRef.current++;
              setInHover(subRef.current);
            } else {
              subRef.current = 0;
              setInHover(subRef.current);
            }
          }}
        >
          <SwiperSlide>{slide1}</SwiperSlide>
          <SwiperSlide>{slide2}</SwiperSlide>
          <SwiperSlide>{slide3}</SwiperSlide>
          <SwiperSlide>{slide4}</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default SellerCardImages;
