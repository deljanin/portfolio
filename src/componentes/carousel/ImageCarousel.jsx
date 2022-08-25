import React from "react";
import { useState } from "react";
import "./imageCarousel.scss";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
const ImageCarousel = ({ images, carouselPath }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div
      style={{
        backgroundImage: `url("${carouselPath}/${images[currentIndex]}")`,
      }}
      className="carousel__slide"
    >
      <div
        className="carousel__left"
        onClick={() => {
          if (currentIndex === 0) setCurrentIndex(images.length - 1);
          else {
            setCurrentIndex(currentIndex - 1);
          }
        }}
      >
        <FaArrowCircleLeft className="carousel__button" />
      </div>
      <div className="carousel__middle"></div>
      <div
        className="carousel__right"
        onClick={() => {
          if (currentIndex === images.length - 1) setCurrentIndex(0);
          else {
            setCurrentIndex(currentIndex + 1);
          }
        }}
      >
        <FaArrowCircleRight className="carousel__button" />
      </div>
    </div>
  );
};

export default ImageCarousel;
