import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { deviceType } from "react-device-detect";

//images
import pineaple from "../Assets/Images/pineaple.jpg";
import plaintain from "../Assets/Images/plantain.jpg";

function Slide() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <div className="">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          slidesToSlide={deviceType !== "mobile" ? 1 : 1}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="transform 1000ms ease-in-out"
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item padding-40px"
          className="relative">
          <div className=" ">
            <div className="w-full relative  h-[25rem] lg:h-[30rem] rounded-2xl">
              <img
                src={pineaple}
                alt="MMRA Images"
                className="w-full h-full rounded-2xl"
              />
            </div>
          </div>

          <div className=" ">
            <div className="w-full relative  h-[25rem] lg:h-[30rem] rounded-2xl">
              <img
                src={plaintain}
                alt="MMRA Images"
                className="w-full h-full rounded-2xl"
              />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Slide;
