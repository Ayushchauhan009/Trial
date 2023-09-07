import React from "react";
import { Navbar, BreadCrumbs, Footer } from "../layout";
import { breadHome } from "../../assets/images";
import { industry } from "../../constants";

const Industry = ({ title, image, desc }) => {
  return (
    <div>
      <h3 className="text-[#B80001] font-bold font-barlow text-[20px] lg:text-[24px]">
        {title}
      </h3>
      <img src={image} alt="" className="my-2 w-[100%] h-auto" />
      <p className="font-barlow text-[16px] leading-[26px] font-[500] lg:font-normal lg:text-[20px]">
        {desc}
      </p>
    </div>
  );
};

const Industries = () => {
  const breadcrumbs = [
    {
      url: "/",
      image: breadHome,
    },
    { displayName: "ALL INDUSTRIES", url: "/industries" },
  ];
  return (
    <div>
      <Navbar />
      <div className="px-4 pt-[80px] lg:pt-[88px] lg:px-20">
        <div className="font-barlow font-[500] mt-[24px] mb-[24px] lg:mt-[28px] lg:mb-[18px] text-[#0C013D]">
          <BreadCrumbs breadcrumbs={breadcrumbs} />
        </div>
        <h1 className="text-[28px] lg:text-[36px] mt-[30px] lg:mt-[50px] mb-[14px] font-antonio">
          All Industries
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-[30px] gap-y-[48px] mb-[48px]">
          {industry.map((indus, index) => {
            return <Industry key={index} {...indus} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Industries;
