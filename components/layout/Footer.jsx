import React from "react";
import { footImg, linkedin } from "../../assets/images";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="mainFOOT lg:px-20 pt-20 p-5 bg-foot-blue h-auto text-white">
        <div className="footsec lg:flex justify-between items-start ">
          <div className="first-col lg:flex space-x-20">
            <div className="footImg flex items-center flex-row lg:fle-col space-x-20 lg:space-x-0">
              <img src={footImg} alt="" />
              <div className="contactImg lg:hidden flex space-x-4 top-[-420px] lg:top-0 right-0  lg:right-[150px]  items-center justify-center  ml-[2rem] lg:-ml-[26px]  ">
                <span className="font-barlow text-[20px] font-bold whitespace-nowrap">
                  Follow us
                </span>{" "}
                <a
                  href="https://www.linkedin.com/company/aartech-solonics-limited/"
                  target="_blank"
                >
                  <img src={linkedin} alt="" className="" />
                </a>
              </div>
            </div>
            <div className="footlinks flex items-start justify-start">
              <div className="pagesLink my-6 lg:my-0 font-semibold text-[18px] -ml-[5rem] lg:ml-[1rem]">
                <ul>
                  <li className="font-barlow">HOME</li>
                  <li className="font-barlow">BRANDS</li>
                  <li className="font-barlow">MEDIA</li>
                  <li className="font-barlow">CONTACT</li>
                </ul>
              </div>
              <div className="serviceLink my-6 lg:my-0 font-semibold text-[18px] lg:ml-16 ml-[3rem] hover:">
                <ul>
                  <li className="font-barlow">SERVICES</li>
                  <li className="font-barlow">INDUSTRIES</li>
                  <li className="font-barlow">PRODUCTS</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="sec-col">
            <div className="address w-72 font-barlow font-semibold uppercase text[18px]">
              “Ashirwad” E-2/57, Arera Colony, Bhopal, Madhya Pradesh (M.P.)
              India 462016 Tel:+91-755-2463593/4276335 Mob No. +91-9752531167,
              9993091167
              <div className="contact-button">
                <button className="border border-slate-100 outline-none py-2 px-3 text-sm my-4">
                  CONTACT US
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="footbottom font-barlow flex mt-3">
          <ul className="lg:flex lg:space-x-10 lg:ml-52 lg:mr-[11.5rem]">
            <li className="font-barlow my-1">
              {" "}
              ©Aartech Solonics. All rights reserved.
            </li>
            <Link to="/privacy-policy" className="font-barlow  my-1">
              {" "}
              Privacy policy
            </Link>
            <Link to="/cookie-policy" className="font-barlow  my-1">
              {" "}
              Cookie policy
            </Link>
          </ul>
          <div className="contactImg hidden lg:flex space-x-4 top-[-420px] lg:top-0 right-0  lg:right-[150px]  items-center justify-center  ml-[2rem] lg:-ml-[26px]  ">
            <span className="font-barlow text-[20px] font-bold whitespace-nowrap">
              Follow us
            </span>{" "}
            <a
              href="https://www.linkedin.com/company/aartech-solonics-limited/"
              target="_blank"
            >
              <img src={linkedin} alt="" className="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
