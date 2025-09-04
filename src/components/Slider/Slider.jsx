import React, { useState } from "react";
import "./Slider.css";

function Slider({ items, renderItem }) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slider">
      <button className="slider__btn slider__btn--prev" onClick={prevSlide}>
        ‹
      </button>

      <div className="slider__content">
        {renderItem(items[current], current)}
        
      </div>

      <button className="slider__btn slider__btn--next" onClick={nextSlide}>
        ›
      </button>
    </div>
  );
}

export default Slider;
 