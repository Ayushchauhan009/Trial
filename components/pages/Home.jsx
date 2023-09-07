import React from "react";
import { Navbar, Header, TestimonialSlider, Footer } from "../layout";
import { Link } from "react-router-dom";
import { testi1 } from "../../assets/images";

const Home = () => {
  const testimonials = [
    {
      image: testi1,
      company: "Associate Manager, Adani Power Limited",
      text: "AARTECH Solonics transformed our operations. Their unwavering support during any service hiccups is just remarkable. The HSBT system increased our plant's reliability. They're our ultimate reliability partners!",
      author: "Mr. Pankaj Lochan Sahoo",
    },
    {
      image: testi1,
      company: " Assistant General Manager, Hindalco Mahan",
      text: "Their team ensures our operations run seamlessly with their precise solutions. Their commitment to excellence is truly commendable. I would highly recommend AARTECH Solonics for their top-notch solutions.",
      author: "Mr. Ashim Singh",
    },
    {
      image: testi1,
      company: "Deputy Manager, Damodar Valley Corporation",
      text: "Choosing AARTECH Solonics was a game-changer. Their technical expertise is impressive, but it's their friendly approach and commitment to keeping promises that stood out. Our project was completed on time with ease and precision.",
      author: "Mr. Soumik Manma",
    },
    {
      image: testi1,
      company: "Manager, Jindal Power Limited",
      text: "Absolutely customer-centric! AARTECH's experienced team provides incredible support. Their innovative products run our electrical system flawlessly. Almost zero product failures, truly user-friendly.",
      author: "Mr. Jay Prakash Yadav",
    },
    {
      image: testi1,
      company: "Senior Manager, NTPC",
      text: "Working with the AARTECH team was exceptional! Their consistent support turned our collaboration into a delightful experience. I recommend their services to anyone seeking reliability and expertise.",
      author: "Mr. Ksh.Premkishan Singh",
    },
    {
      image: testi1,
      company: "Executive Engineer, CSTPS",
      text: "AARTECH Solonics stands out with its innovative and customized solutions. They've tailored their expertise to our needs, solving our challenges with ease and precision, driving our success forward.",
      author: "Mr. Virendra Rapartiwar",
    },
  ];
  return (
    <div>
      <Navbar />
      <Header />
      <TestimonialSlider testimonials={testimonials} />
      <Footer />
    </div>
  );
};

export default Home;
