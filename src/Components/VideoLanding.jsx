import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { deviceType } from "react-device-detect";

//images
import growing from "../Assets/Images/video1.mp4";
import harvest from "../Assets/Images/video2.mp4";
import packing from "../Assets/Images/video3.mp4";

function VideoLanding() {
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
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          slidesToSlide={false}
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={3000}
          keyBoardControl={false}
          customTransition="transform 1000ms ease-in-out"
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={[]}
          deviceType={deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item padding-40px"
          className="relative">
          <div className="bg-gray-400 2xl:h-[80vh]">
            <video controls className="w-full " muted autoPlay>
              <source src={growing} type="video/mp4" />
              <source src={growing} type="video/ogg" />
            </video>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default VideoLanding;
