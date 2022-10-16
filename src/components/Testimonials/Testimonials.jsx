import React, { useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { AnimatePresence } from "framer-motion";
import { Pagination, Navigation } from "swiper";
import "./Testimonials.scss";
import testimonialsContext from "../../context/testimonials";
import Header from "../Header/Header";
import Modal from "../Modal/Modal";
import { Fade } from "react-awesome-reveal";
import { ReactComponent as Quote } from "../../assets/quote-left.svg";

export default function Testimonials() {
  const { testimonials } = useContext(testimonialsContext);
  const [modalData, setModalData] = useState("");
  const [isOpen, setIsOpen] = useState("");

  const handleDisplayVideo = (e, video) => {
    setModalData(video);
    setIsOpen(true);
  };

  return (
    <section id="testimonials" className="container">
      <Fade>
        <Header title="Testimonials" variant="primary" />
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="testimonySwiper"
        >
          {testimonials.map((testimonial) => {
            const { id, videoSource, title, quote } = testimonial;
            return (
              <SwiperSlide key={id} className="testimonyItem">
                <Quote className="icon" />
                <div className="text">
                  <p>
                    {quote}
                    <span
                      className="videoModal"
                      onClick={(e) => handleDisplayVideo(e, videoSource)}
                    >
                      See full video testimony.
                    </span>
                  </p>
                  <p className="name">{title}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Fade>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {isOpen && (
          <Modal>
            <div className="testimonialIframe">
              <button className="btn" onClick={() => setIsOpen(false)}>
                X
              </button>
              <iframe
                title="title"
                src={modalData}
                frameborder="0"
                webkitallowfullscreen
                mozallowfullscreen
                allowfullscreen
              ></iframe>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </section>
  );
}
