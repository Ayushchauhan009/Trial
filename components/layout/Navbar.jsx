import React, { useState, useEffect } from "react";
import axios from "axios";
import cors from "cors";
import { Link } from "react-router-dom";
import { logo } from "../../assets/images";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-bg z-20 fixed inset-0 h-[88px] flex items-center justify-between ">
      <div className="flex items-center justify-between w-full px-5 md:px-20">
        <Link to="/">
          <img
            src={logo}
            alt=""
            className="w-[71px] h-[49px] md:w-auto md:h-auto"
          />
        </Link>
        <div className="flex items-center flex-row-reverse lg:flex-row">
          <button
            className="md:hidden z-50 text-white ml-4"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {/* ... (SVG icon) */}
          </button>

          <div className="flex items-center space-x-4">
            <select className="inline-block lg:hidden outline-none text-white ml-4 py-1 px-3 font-barlow font-semibold bse-bg">
              <option value="bse">BSE</option>
              <option value="nse">NSE</option>
            </select>
            <p className="font-medium block lg:hidden text-white">Stock Data</p>
          </div>
        </div>
      </div>
      <div
        className={`${
          isMenuOpen
            ? "flex flex-col py-20 px-8  text-[24px] space-y-4 fixed h-screen z-20 inset-0 bg-blue-900"
            : "hidden lg:flex"
        } flex md:items-center font-barlow md:space-x-7 mt-0 px-5 md:px-20`}
      >
        <Link
          to="/about"
          className="text-white font-bold text-[18px] hover:opacity-75"
          onClick={() => setIsMenuOpen(false)}
        >
          ABOUT
        </Link>
        <Link
          to="/brands"
          className="text-white font-bold text-[18px] hover:opacity-75"
          onClick={() => setIsMenuOpen(false)}
        >
          BRANDS
        </Link>
        <Link
          to="/media"
          className="text-white font-bold text-[18px] hover:opacity-75"
          onClick={() => setIsMenuOpen(false)}
        >
          MEDIA
        </Link>
        <Link
          to="/investors"
          className="text-white font-bold text-[18px] hover:opacity-75"
          onClick={() => setIsMenuOpen(false)}
        >
          INVESTORS
        </Link>
        <Link
          to="/contact"
          className="text-white font-bold text-[18px] hover:opacity-75"
          onClick={() => setIsMenuOpen(false)}
        >
          CONTACT
        </Link>
        <div className="flex items-center space-x-4">
          <select className="lg:inline-block hidden outline-none text-white ml-4 py-1 px-3 font-barlow font-semibold bse-bg">
            <option value="bse">BSE</option>
            <option value="nse">NSE</option>
          </select>
          <p className="font-medium block lg:hidden text-white">null</p>
        </div>
      </div>

      {/* Render BSE and NSE data somewhere in your Navbar */}
    </div>
  );
};

export default Navbar;
