import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    console.log(currentSlide);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    console.log(currentSlide);
  };

  const data = [
    "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/Harry-Potter-Movies-in-Order.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5",
    "https://fossbytes.com/wp-content/uploads/2021/02/A-poster-of-Harry-Potter-and-the-Goblet-of-Fire-Harry-Potter-movies-in-order.jpg",
    "https://assets.mspimages.in/gear/wp-content/uploads/2023/02/harry-potter.jpg",
  ];
  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon className="whiteIcon" />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon className="whiteIcon" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
