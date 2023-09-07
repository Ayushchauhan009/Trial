import React from "react";
import { Navbar, Footer } from "../layout";

const Cookie = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-[120px] lg:mt-40 mb-20 lg:px-20 px-5">
        <h1 className="font-antonio text-[28px] lg:text-[36px]   text-[#B80001] ">
          Cookie Policy
        </h1>
        <p className="my-6 lg:my-9 font-Barlow lg:text-[20px]">
          Aartech Solonics uses cookies and similar technologies on our website.
          This Cookies Policy explains what cookies are, how we use them, and
          your cookie preferences.
        </p>
        <div>
          <ol>
            <li className="list-decimal  ml-4 lg:text-[20px] text-[#0C013D] font-semibold font-Barlow">
              <h2>What Are Cookies?</h2>
            </li>

            <ul>
              <li className="lg:text-[20px] ml-6 list-disc mb-6 mt-2 lg:mt-4 lg:mb-9 text-[#0C013D] font-Barlow">
                Cookies are small text files placed on your device when you
                visit a website. They help us recognize your device and enhance
                your browsing experience.
              </li>
            </ul>
            <li className="list-decimal  ml-4 lg:text-[20px] text-[#0C013D] font-semibold font-Barlow">
              <h2>Types of Cookies We Use</h2>
            </li>

            <ul className="my-2 lg:my-4">
              <li className="lg:text-[20px] ml-6 list-disc text-[#0C013D] font-Barlow">
                Essential Cookies: These are necessary for the website to
                function properly. They are usually set in response to your
                actions on the site.
              </li>
              <li className="lg:text-[20px] ml-6 lg:my-2 list-disc text-[#0C013D] font-Barlow">
                Analytics Cookies: We use these cookies to collect information
                about how you use our website. This helps us improve our
                website's performance and content.
              </li>
              <li className="lg:text-[20px] ml-6 list-disc mb-6 lg:mb-9 text-[#0C013D] font-Barlow">
                Marketing Cookies: These cookies are used to deliver
                personalized ads and promotional content based on your interests
                and browsing habits.
              </li>
            </ul>

            <li className="list-decimal  ml-4 lg:text-[20px] text-[#0C013D] font-semibold font-Barlow">
              <h2>Your Cookie Preferences</h2>
            </li>

            <ul>
              <li className="lg:text-[20px] mt-2 lg:mt-4 ml-6 list-disc mb-6 lg:mb-9 text-[#0C013D] font-Barlow">
                You can manage your cookie preferences by adjusting your browser
                settings. You can also opt-out of certain cookies through our
                cookie consent banner.
              </li>
            </ul>
            <li className="list-decimal  ml-4 lg:text-[20px] text-[#0C013D] font-semibold font-Barlow">
              <h2> Changes to this Cookies Policy</h2>
            </li>

            <ul>
              <li className="lg:text-[20px] mt-2 lg:mt-4 ml-6 list-disc mb-6 lg:mb-9 text-[#0C013D] font-Barlow">
                We may update this Cookies Policy as our website evolves and in
                response to legal requirements. Any changes will be posted on
                this page, and the "Effective Date" will be updated.
              </li>
            </ul>
          </ol>
        </div>
      </div>
      <div className="mb-10 lg:mb-20 lg:px-20 px-5">
        <h1 className="font-antonio text-[28px] lg:text-[36px] text-[#B80001] ">
          Contact Us
        </h1>
        <p className="my-6 lg:my-9 font-Barlow lg:text-[20px]">
          If you have any questions or concerns about this Privacy Policy,
          please contact us at
        </p>
        <p className="font-semibold lg:text-[20px] font-Barlow">
          Tel:+91-755-2463593/4276335
        </p>
        <p className="font-semibold lg:text-[20px] font-Barlow">
          Mob No. +91-9752531167, 9993091167
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Cookie;
