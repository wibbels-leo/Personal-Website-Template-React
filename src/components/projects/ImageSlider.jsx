import React, { useState } from "react";
import { ArrowRight, ArrowLeft } from "react-feather";
import "./ImageSlider.css";

export default function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="sliderStyles">
      {currentIndex > 0 && (
        <ArrowLeft
          onClick={() => setCurrentIndex(currentIndex - 1)}
          className="arrowLeft"
        />
      )}
      <img
        src={process.env.PUBLIC_URL + slides[currentIndex]}
        alt="greenhouse"
        className="slideStyles"
      />
      {currentIndex < slides.length - 1 && (
        <ArrowRight
          onClick={() => setCurrentIndex(currentIndex + 1)}
          className="arrowRight"
        />
      )}
    </div>
  );
}
