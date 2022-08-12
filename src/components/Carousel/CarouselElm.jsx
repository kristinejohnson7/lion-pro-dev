import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./CarouselElm.css";

export default function CarouselElm({ images }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {images.map((image) => (
        <Carousel.Item className="portfolioCarousel" key={image.id}>
          <img
            className="d-block w-100"
            src={image.image}
            alt="portfolio slide"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
