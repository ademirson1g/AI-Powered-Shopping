import React, { useState } from "react";
import { FaBars, FaTimes, FaUser, FaSearch } from "react-icons/fa";

import "../../styles/animation.css";
import JoinUsButton from "../atoms/JoinUsButton";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <div className="hidden md:block cursor-pointer font-bold">
              <a href="/"><span className="text-white mr-6">Home</span></a>
              <span className="text-white mr-6">About</span>
              <span className="text-white mr-6">How to start?</span>
            </div>
          </div>
          <div className="text-white text-4xl font-bold mr-6 cursor-pointer">
            <a href="/">
              <span className="hover:text-white">Smart Spend</span>
            </a>
          </div>
          <div className="hidden md:block cursor-pointer">
            <div className="flex items-center">
              <FaUser className="text-white mr-6" size={20} />
              <FaSearch className="text-white mr-6" size={20} />
              <a href="/register">
                <JoinUsButton />
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md 
                      text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white 
                        transition duration-150 ease-in-out"
            >
              {isOpen ? (
                <FaTimes className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FaBars className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className="line bg-white mt-4 w-full"
        style={{ animation: "expandLine 2s ease-in-out forwards" }}
      >
        <hr />
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 sm:px-3 mt-4">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium 
                    text-white bg-gray-800 focus:outline-none focus:text-white focus:bg-gray-700 
                      transition duration-150 ease-in-out"
          >
            Home
          </a>
          <a
            href="#"
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium 
                    text-white bg-gray-800 focus:outline-none focus:text-white focus:bg-gray-700 
                      transition duration-150 ease-in-out"
          >
            About
          </a>
          <a
            href="#"
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium 
                    text-white bg-gray-800 focus:outline-none focus:text-white focus:bg-gray-700 
                      transition duration-150 ease-in-out"
          >
            How to start?
          </a>
          <div className="flex items-center justify-end mt-4 mr-4">
            <FaUser className="text-white mr-6" size={20} />
            <FaSearch className="text-white mr-6" size={20} />
            <JoinUsButton />
          </div>
          <div
            className="line bg-white mt-4 w-full"
            style={{ animation: "expandLine 0.5s ease-in-out forwards" }}
          >
            <hr />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
