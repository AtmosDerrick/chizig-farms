import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-primary h-[10vh] flex items-center ">
      <div className="w-3/4 mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/your-logo.png" // Replace with the path to your logo
            alt="Logo"
            className="w-10 h-10 mr-2"
          />
          <span className="text-white text-lg font-semibold">Chizig Farms</span>
        </div>
        <div className="space-x-8">
          <a href="/" className="text-white hover:text-gray-200">
            Home
          </a>
          <a href="/about" className="text-white hover:text-gray-200">
            About
          </a>
          <a href="/products" className="text-white hover:text-gray-200">
            Products
          </a>
          <a href="/gallery" className="text-white hover:text-gray-200">
            Gallery
          </a>
          <a href="/contact" className="text-white hover:text-gray-200">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
