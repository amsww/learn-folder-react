import React from "react";
import './input.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const img = [process.env.PUBLIC_URL + `/Imgs/img3.jpg`,process.env.PUBLIC_URL + `/Imgs/img3.jpg` ]

export default function App() {
  const renderSlides = () =>
    img.map(num => (
      <div>
        <img src={num} />
      </div>
    ));

  return (
    <div className="App">
      <Slider dots={true}>{renderSlides()}</Slider>
    </div>
  );
}

