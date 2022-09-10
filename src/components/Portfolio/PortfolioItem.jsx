import React from "react";
import "./PortfolioItem.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ScrollHandler from "../Nav/ScrollHandle";
import { Link } from "react-router-dom";

export default function PortfolioItem({ images, handleClose, item }) {
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
        <div>
          <ScrollHandler>
            <Link
              className="btn startProjectBtn"
              to="/#contact"
              onClick={handleClose}
            >
              START YOUR PROJECT
            </Link>
          </ScrollHandler>
        </div>
      </div>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {filteredPictures.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
