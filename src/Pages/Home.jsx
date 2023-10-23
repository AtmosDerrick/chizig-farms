import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { faWheatAwn } from "@fortawesome/free-solid-svg-icons";
import { faShip } from "@fortawesome/free-solid-svg-icons";

//images
import about from "../Assets/Images/about.jpg";

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
      <div className="bg-primary-100 w-full mt-4">
        <div className="w-3/4 mx-auto py-4">
          <h2 className="title mb-4">About Us</h2>
          <div className="w-full flex justify-between gap-4">
            <div className="full">
              <img
                src={about}
                alt="Chizig farms"
                className="w-3/4 rounded-2xl shadow-lg"
              />
            </div>
            <div className="w-full text-lg text-justify">
              <p>
                At Chizig Farms, our story is rooted in a deep love for the land
                and a passion for producing the world's finest agricultural
                products. Founded with a vision of sustainable farming and a
                commitment to environmental responsibility, our journey has been
                one of dedication and growth. What began as a small family farm
                has blossomed into a global presence, serving communities in
                various corners of the world. Our mission is simple yet
                profound: to cultivate excellence in agriculture, nurture the
                earth, and provide fresh, high-quality produce to the world.
                With the tireless efforts of our skilled team, we've established
                ourselves as a trusted source of goodness from the fields,
                especially our beloved pineapples. Join us in our pursuit of
                fresh, flavorful, and responsibly grown agricultural delights
              </p>
              <button className="bg-primary text-white px-8 py-2 mt-4">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
