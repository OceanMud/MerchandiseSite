// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// import "swiper/swiper.scss";
// import "swiper/components/navigation/navigation.scss";
// import "swiper/components/pagination/pagination.scss";
// import "swiper/components/scrollbar/scrollbar.scss";
// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

// export default ({ hoverKey }) => {
//   const slide1 = () => (
//     <img
//       src="images/model0.jpg"
//       className="lg:h-auto md:h-96 md:w-auto  w-full max-w-md mx-auto "
//     />
//   );

//   const slide2 = () => (
//     <img
//       src="images/model0-1.png"
//       className="lg:h-auto md:h-96 md:w-auto w-full max-w-md mx-auto "
//     />
//   );

//   const slide3 = () => (
//     <img
//       src="images/model0-2.png"
//       className="lg:h-auto md:h-96 md:w-auto w-full max-w-md mx-auto "
//     />
//   );
//   const slide4 = () => (
//     <img
//       src="images/model0-3.png"
//       className="lg:h-auto md:h-96 md:w-auto w-full max-w-md mx-auto "
//     />
//   );

//   return (
//     <Swiper
//       spaceBetween={100}
//       changeDirection={}
//       navigation={true}
//       slidesPerView={1}
//       pagination={{ clickable: true }}
//       onSlideChange={() => console.log("slide change")}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide>{slide1}</SwiperSlide>
//       <SwiperSlide>{slide2}</SwiperSlide>
//       <SwiperSlide>{slide3}</SwiperSlide>
//       <SwiperSlide>{slide4}</SwiperSlide>
//       ...
//     </Swiper>
//   );
// };
