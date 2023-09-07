import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Testimonial from "./Testimonial";
import TestimonialDot from "./TestimonialDot";

const TestimonialSlider = ({ testimonials }) => {
  const duplicatedTestimonials = [...testimonials]; // Duplicate testimonials

  const [currentIndex, setCurrentIndex] = useState(0);

  const moveToNext = () => {
    setCurrentIndex((currentIndex + 1) % duplicatedTestimonials.length);
  };

  const moveToPrev = () => {
    setCurrentIndex(
      currentIndex === 0 ? duplicatedTestimonials.length - 1 : currentIndex - 1
    );
  };

  // Auto-scrolling logic
  useEffect(() => {
    const interval = setInterval(moveToNext, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const translateValue = isMobile
    ? (currentIndex * 100) % (duplicatedTestimonials.length * 100)
    : (currentIndex * 50) % (duplicatedTestimonials.length * 50);

  return (
    <div className="relative w-full bg-[#0C013D] py-20 overflow-hidden">
      <h2 className="text-[36px] font-antonio mb-[36px] text-white px-5 lg:px-20">
        Testimonials
      </h2>
      <div
        className="testimonial-container"
        style={{
          transform: `translateX(-${translateValue}%)`,
        }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <Testimonial testimonial={testimonial} />
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center">
        {testimonials.map((_, index) => (
          <TestimonialDot
            key={index}
            active={index === currentIndex % testimonials.length}
            onClick={() => setCurrentIndex(index + testimonials.length)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
