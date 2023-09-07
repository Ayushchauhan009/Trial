import React from "react";

const TestimonialDot = ({ active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`h-2 w-2 rounded-full mx-1 ${
        active
          ? "bg-red-600 border border-red-600"
          : "bg-transparent border border-red-600"
      }`}
    ></button>
  );
};

export default TestimonialDot;
