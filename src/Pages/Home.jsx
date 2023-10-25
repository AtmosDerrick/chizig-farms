import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faCity,
  faGlobe,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import { faWheatAwn } from "@fortawesome/free-solid-svg-icons";
import { faShip } from "@fortawesome/free-solid-svg-icons";
import Slide from "../Components/Slide";

//images
import about from "../Assets/Images/about.jpg";
import pineaple from "../Assets/Images/pineaple.jpeg";
import plaintain from "../Assets/Images/plantain.jpg";
import farms from "../Assets/Images/farms.jpeg";
import SlideVideo from "../Components/SlideVideo";
import growing from "../Assets/Images/video1.mp4";
import logo from "../Assets/Images/chi1.png";

function Home() {
  return (
    <div className="w-full mx-auto">
      <div className="h-[60vh] lg:h-[80vh] w-full landing ">
        <div className="h-[60vh] lg:h-[80vh] w-full opacity-0 bg-white  absolute"></div>
        <div className=" h-[50vh] absolute z-30 w-full">
          <div className="text-5xl lg:text-7xl font-serif font-bold text-white flex justify-center items-center h-[50vh]">
            <div className="lw-3/4 g:w-1/2 text-center">
              <div className="mb-4 drop-shadow-lg">Chizig Farms</div>
              <p className="text-xl px-4 lg:px-24 font-medium">
                Farming with Passion, Feeding the World
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-4 bg-primary w-full"></div>
      <div className="mx-4 lg:w-2/4  h-auto lg:h-[20vh] lg:mx-auto mt-8 grid grid-cols-1 lg:grid-cols-3 gap-5 mb-4">
        <div className="bg-secondary text-white font-medium rounded-lg flex justify-center items-center h-[10rem] lg:h-auto">
          <div className="text-white shadow-md">
            <FontAwesomeIcon
              icon={faSeedling}
              className="text-3xl text-center w-full"
            />
            <div className="text-2xl font-semibold text-center ">We Grow</div>
          </div>
        </div>
        <div className="bg-primary text-white font-medium rounded-lg flex justify-center items-center h-[10rem] lg:h-auto">
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
        <div className="bg-secondary text-white font-medium rounded-lg flex justify-center items-center h-[10rem] lg:h-auto">
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
        <div className="mx-4 lg:w-3/4 lg:mx-auto py-4">
          <h2 className="title mb-4">About Us</h2>
          <div className="w-full lg:flex lg:justify-between gap-4">
            <div className="full">
              <img
                src={about}
                alt="Chizig farms"
                className="w-full lg:w-3/4 rounded-2xl shadow-lg"
              />
            </div>
            <div className="w-full text-base lg:text-lg text-justify pt-4 lg:pt-0">
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

      <div className="my-8 mx-4 lg:w-3/4 lg:mx-auto lg:flex lg:justify-between gap-4 ">
        <div className="w-full lg:w-3/4 mb-4 lg:mb-0 text-5xl lg:text-6xl font-bold text-primary lg:leading-[5rem] pt-8">
          <span className="text-2xl font-normal italic pb-4 underline">
            We Produce
          </span>
          <br></br>
          <span>
            Healthy and<br></br> Delicious food Products
          </span>
        </div>
        <div className="w-full  lg:mx-0 lg:w-1/2 h-[30rem] rounded-2xl shadow-xl">
          <Slide />
        </div>
      </div>

      <section className="w-full bg-primary mt-8">
        <div className="w-full  lg:w-3/4 lg:mx-auto py-4">
          <div className="lg:flex gap-4 justify-between">
            <div className="w-full p-4">
              <h2 className="text-2xl g:text-3xl my-4 font-medium text-primary-100">
                Chizig Farms aspires to become the premier vertically integrated
                agricultural enterprise, adding substantial value to the
                agricultural sector in Ghana.
              </h2>
              <p className="text-white text-base lg:text-lg text-justify mt-4">
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

            <div className="w-full pt-12 px-4 lg:px-0">
              <img src={farms} className="w-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-100 w-full py-12">
        <div className="w-full lg:w-3/4 mx-auto text-center ">
          <h2 className="w-3/4 lg:w-1/2 mx-auto text-2xl font-semibold text-primary">
            Our mission is to uplift one million Ghanaians living in remote
            areas from poverty while fostering agriculture sustainability.
          </h2>
          <p className="w-full   lg:w-3/4 lg:mx-auto text-center mt-4 text-lg">
            At Chizig Farms, our mission is a deeply rooted commitment to
            driving positive change in remote areas of Ghana. We are dedicated
            to empowering one million individuals and families, helping them
            move beyond the constraints of poverty. Through sustainable
            agricultural practices, job creation, and community development
            initiatives, we strive to enhance livelihoods, promote
            self-sufficiency, and improve overall well-being. By fostering
            sustainability and economic resilience, we aim to create a lasting
            and impactful difference in the lives of our fellow Ghanaians.
          </p>
        </div>
        <div className="w-full lg:w-1/2 mx-auto mt-8">
          <SlideVideo />
        </div>
      </section>

      <section className="mt-8 ">
        <div className="w-full px-4 lg:px-0 lg:w-3/4 lg:mx-auto">
          <div>
            <h3 className="title mb-8">Market Opportunities</h3>
            <p className="text-lg text-primary font-normal text-justify">
              Chizig Farms, after the production and aggregation phases, engages
              in a systematic approach to supply its agricultural products. This
              process involves the creation of Memorandums of Understanding
              (MoUs), agreements, or contractual arrangements with potential
              buyers, each delineated by its unique terms and conditions. These
              structured agreements empower Chizig Farms to provide clear
              directives to our partner farmer organizations regarding the
              required quantities of produce for the upcoming seasons. Through
              these transparent agreements, we ensure the seamless delivery of
              our agricultural products to our valued customers, while
              simultaneously supporting local farming communities in their
              production endeavors.
            </p>
          </div>

          <div className="w-full lg:w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
            <div className="w-full h-auto bg-primary-100 rounded-2xl">
              {" "}
              <div className="mt-4  flex justify-center items-center ">
                <div className="text-4xl border-2 border-primary p-4 rounded-full">
                  <FontAwesomeIcon icon={faChartLine} />
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-center py-4 text-xl font-semibold uppercase">
                  Local Markets
                </h4>
                <p className="text-base text-justify">
                  In the local market, Chizig Farms is committed to serving our
                  neighboring communities with the freshest and finest
                  agricultural products. We take great pride in delivering
                  quality produce that not only nourishes but also strengthens
                  local economies. By engaging with local markets, we foster a
                  sense of unity and shared prosperity, making a positive impact
                  on both our consumers and the communities we call home.
                </p>
              </div>
            </div>
            <div className="w-full h-auto bg-primary-100 rounded-2xl">
              {" "}
              <div className="mt-4  flex justify-center items-center ">
                <div className="text-4xl border-2 border-primary p-4 rounded-full">
                  <FontAwesomeIcon icon={faGlobe} />
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-center py-4 text-xl font-semibold uppercase">
                  International Markets
                </h4>
                <p className="text-base text-justify">
                  In the international market, Chizig Farms embraces the
                  opportunity to share the essence of Ghana's agriculture with
                  the world. Our dedication to sustainable practices and quality
                  assurance ensures that our products reach global consumers
                  with the same freshness and excellence as they do locally.
                  Through our presence in international markets, we aim to not
                  only meet the demand for our produce but also to be an
                  ambassador of Ghana's agricultural expertise, bringing the
                  flavors and benefits of our land to tables across the globe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-primary-100 mt-8">
        <div className="lg:w-3/4 mx-auto py-4">
          <div className="lg:flex gap-4 lg:justify-between">
            <div className="w-full p-4">
              <h2 className="text-3xl my-4 font-medium text-primary">
                Roots of Chizig Farms: A History of Sustainable Agriculture and
                Growth
              </h2>
              <p className="text-primary text-lg text-justify mt-4">
                Chizig Farms has a rich history deeply rooted in the fertile
                soils of Ghana. Established with a vision of sustainable
                agriculture, our journey began with a small family farm that has
                since flourished into a thriving agricultural enterprise. Over
                the years, we have honed our expertise, embracing innovative
                farming practices and a commitment to environmental
                responsibility. Our history is a testament to the passion and
                dedication of our team, who have transformed a humble beginning
                into a force for excellence in agriculture. Today, Chizig Farms
                stands as a symbol of sustainable growth and a commitment to
                nurturing both the land and the communities we serve.
              </p>
            </div>

            <div className="w-full pt-8 rounded-xl ">
              <video controls className="w-full" muted>
                <source src={growing} type="video/mp4" />
                <source src={growing} type="video/ogg" />
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full my-8">
        <div className="w-full px-4 lg:px-0 lg:w-3/4 mx-auto ">
          <h2 className="title">Our Team</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
            <div className="h-[30rem] bg-gray-100">
              <div className="bg-gray-200 h-[20rem] w-full"></div>
              <div className="p-4">
                <h4 className="text-2xl font-semibold text-secondary">
                  Osei Aron
                </h4>
                <h5 className="text-base font-medium text-gray-900 py-2">
                  Managing Director
                </h5>
              </div>
            </div>
            <div className="h-[30rem] bg-gray-100">
              <div className="bg-gray-200 h-[20rem] w-full"></div>
              <div className="p-4">
                <h4 className="text-2xl font-semibold text-secondary">
                  Osei Aron
                </h4>
                <h5 className="text-base font-medium text-gray-900 py-2">
                  Managing Director
                </h5>
              </div>
            </div>
            <div className="h-[30rem] bg-gray-100">
              <div className="bg-gray-200 h-[20rem] w-full"></div>
              <div className="p-4">
                <h4 className="text-2xl font-semibold text-secondary">
                  Osei Aron
                </h4>
                <h5 className="text-base font-medium text-gray-900 py-2">
                  Managing Director
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="bg-primary py-8 text-white">
        <div className="flex justify-center ">
          <img src={logo} alt="logo" className="w-[15rem] bg-white" />
        </div>
        <div class="container mx-auto text-center">
          <h3 class="text-2xl font-semibold mb-4">Contact Chizig Farms</h3>
          <p class="text-lg mb-4">
            We're here to help and answer any questions you might have. We look
            forward to hearing from you.
          </p>

          <div class="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <a href="tel:+1234567890" class="hover:underline">
              Phone: +1 (234) 567-890
            </a>
            <a href="mailto:info@chizigfarms.com" class="hover:underline">
              Email: info@chizigfarms.com
            </a>
            <a href="/contact" class="hover:underline">
              Contact Form
            </a>
          </div>

          <div class="mt-4">
            <p>&copy; 2023 Chizig Farms. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
