import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { faWheatAwn } from "@fortawesome/free-solid-svg-icons";
import { faShip } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="w-full mx-auto">
      <div className="h-[80vh] w-full landing ">
        <div className="h-[80vh] w-full opacity-0 bg-white  absolute"></div>
        <div className=" h-[50vh] absolute z-30 w-full">
          <div className="text-5xl font-serif font-bold text-white flex justify-center items-center h-[50vh]">
            <div className="w-1/2 text-center">
              <div className="mb-4 drop-shadow-lg">
                {" "}
                Farming with Passion, Feeding the World
              </div>
              <p className="text-base px-24 font-medium">
                Farming with Passion, we cultivate high-quality, sustainable
                agricultural products to feed and make a positive impact on the
                world.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-4 bg-primary w-full"></div>
      <div className="w-2/4  h-[20vh] mx-auto mt-8 grid grid-cols-3 gap-5 mb-4">
        <div className="bg-secondary text-white font-medium rounded-lg flex justify-center items-center">
          <div className="text-white shadow-md">
            <FontAwesomeIcon
              icon={faSeedling}
              className="text-3xl text-center w-full"
            />
            <div className="text-2xl font-semibold text-center ">We Grow</div>
          </div>
        </div>
        <div className="bg-primary text-white font-medium rounded-lg flex justify-center items-center">
          <div className="text-white shadow-md">
            <FontAwesomeIcon
              icon={faWheatAwn}
              className="text-3xl text-center w-full"
            />
            <div className="text-2xl font-semibold text-center ">
              We Harvest
            </div>
          </div>
        </div>
        <div className="bg-secondary text-white font-medium rounded-lg flex justify-center items-center">
          <div className="text-white shadow-md">
            <FontAwesomeIcon
              icon={faShip}
              className="text-3xl text-center w-full"
            />
            <div className="text-2xl font-semibold text-center ">We Export</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
