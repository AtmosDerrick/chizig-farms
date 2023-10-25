import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import logo from "../Assets/Images/chi1.png";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className=" w-full  bg-primary h-[10vh]">
      <nav className="relative text-white flex justify-between w-full p-2  xl:px-0 xl:w-3/4 xl:mx-auto ">
        <div className="py-2 flex justify-start w-3/4 ">
          <div className="w-18 bg-white h-12 flex items-center">
            <img src={logo} alt="chizig farms logo" className="w-16 " />
          </div>
        </div>

        <div className="text-base font-medium w-full py-4 ml-2 ">
          <ul className="flex justify-between lg:justify-evenly">
            <Link to="/">
              <li className="mx-4 hidden lg:block">Home</li>
            </Link>
            <Link to="/about">
              <li className="mx-4 hidden lg:block">About</li>
            </Link>
            <Link to="/conferenceandevent">
              <li className="mx-4 hidden lg:block">Our Team</li>
            </Link>
            <Link to="/conferenceandevent">
              <li className="mx-4 hidden lg:block">Activites</li>
            </Link>
            <Link to="/ministry">
              <li className="mx-4 hidden lg:block">Contacts</li>
            </Link>

            <div
              className=" text-xl text-gray-100 lg:hidden"
              onClick={toggleMenu}>
              <i class="fa-solid fa-bars fa-2x"></i>
            </div>
          </ul>
        </div>
      </nav>
      {menu ? (
        <div>
          <Menu />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Navbar;
