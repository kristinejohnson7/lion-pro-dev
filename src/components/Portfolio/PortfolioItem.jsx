import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import "./PortfolioItem.css";
import { motion } from "framer-motion";
import CarouselElm from "../Carousel/CarouselElm";

export default function PortfolioItem({ images, handleClose, item }) {
  const dropIn = {
    hidden: {
      opacity: 0,
      scale: 0.75,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.15,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.75,
      transition: {
        ease: "easeIn",
        duration: 0.15,
      },
    },
  };

  const { title, pictures, description, youTubeEmbedId } = item;
  const filteredPictures = pictures.map((picture) => {
    const id = picture.sys.id;
    const image = picture.fields?.file.url;
    return { id: id, image: image };
  });
  return (
    <div className="pItemWrapper">
      <div className="pModalContent">
        <button className="portfolioBtn btn" onClick={handleClose}>
          X
        </button>
        <div className="portfolioTitle">{title}</div>

        <p className="portfolioDescription">{description}</p>
        <iframe
          width="403"
          height="280"
          src={`https://www.youtube.com/embed/${youTubeEmbedId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
        <button className="btn startProjectBtn">Start a project with us</button>
      </div>
      <CarouselElm images={filteredPictures} />
    </div>
  );
}
