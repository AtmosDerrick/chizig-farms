import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { faWheatAwn } from "@fortawesome/free-solid-svg-icons";
import { faShip } from "@fortawesome/free-solid-svg-icons";
import Slide from "../Components/Slide";

//images
import about from "../Assets/Images/about.jpg";
import pineaple from "../Assets/Images/pineaple.jpeg";
import plaintain from "../Assets/Images/plantain.jpg";
import farms from "../Assets/Images/farms.jpeg";

function Home() {
  return (
    <div className="w-full mx-auto">
      <div className="h-[80vh] w-full landing ">
        <div className="h-[80vh] w-full opacity-0 bg-white  absolute"></div>
        <div className=" h-[50vh] absolute z-30 w-full">
          <div className="text-7xl font-serif font-bold text-white flex justify-center items-center h-[50vh]">
            <div className="w-1/2 text-center">
              <div className="mb-4 drop-shadow-lg">Chizig Farms</div>
              <p className="text-xl px-24 font-medium">
                Farming with Passion, Feeding the World
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
      <div className="bg-primary-100 w-full mt-4 ">
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
      <div className="h-[30vh] w-full middle"></div>

      {
        // <section className="bg-gray-100 py-12">
        // <div className="container w-3/4 mx-auto text-center">
        //   <h2 className="title">Our Products & Services</h2>
        //   <div className="flex justify-between">
        //     <ul className="text-left list-disc text-lg px-4 mt-4 w-full">
        //       <li>Maize (Corn)</li>
        //       <li>Cassava</li>
        //       <li>Yam</li>
        //       <li>Plantains</li>
        //       <li>Rice</li>
        //       <li>Palm Oil</li>
        //     </ul>
        //     <div className="w-full"></div>
        //   </div>
        // </div>
        // </section>
      }

      <div className="my-8 w-3/4 mx-auto flex justify-between gap-4 ">
        <div className="w-3/4 text-6xl font-bold text-primary leading-[5rem] pt-8">
          <span className="text-2xl font-normal italic pb-4 underline">
            We Produce
          </span>
          <br></br>
          <span>
            Healthy and<br></br> Delicious food Products
          </span>
        </div>
        <div className="w-1/2 h-[30rem] bg-red-500 rounded-2xl shadow-xl">
          <Slide />
        </div>
      </div>

      <section className="w-full bg-primary-100 mt-8">
        <div className="w-3/4 mx-auto py-4">
          <div className="flex gap-4 justify-between">
            <div className="w-full p-4">
              <h2 className="text-3xl my-4 font-medium">
                Chizig Farms aspires to become the premier vertically integrated
                agricultural enterprise, adding substantial value to the
                agricultural sector in Ghana.
              </h2>
              <p className="text-lg text-justify mt-4">
                Chizig Farms is dedicated to the vision of becoming Ghana's
                leading vertically integrated agricultural enterprise. Through
                our commitment to sustainable farming practices and innovation,
                we aim to add significant value to the agricultural sector in
                the country. With a focus on quality, environmental
                responsibility, and a deep connection to the land, we seek to
                contribute to the growth and prosperity of local communities and
                the nation as a whole. Chizig Farms is more than just an
                agricultural business; it's a promise of excellence,
                sustainability, and positive change in the farming industry.
              </p>
            </div>

            <div className="w-full pt-12">
              <img src={farms} className="w-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
