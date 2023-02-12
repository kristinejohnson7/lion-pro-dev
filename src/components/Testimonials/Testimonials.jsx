import React, { useContext, useRef, useState, useEffect } from "react";
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
import defaultImg from "../../assets/defaultTest.png";
import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";

export default function Testimonials() {
  const { testimonials } = useContext(testimonialsContext);
  const [modalData, setModalData] = useState("");
  const [isOpen, setIsOpen] = useState("");

  const ref = useRef();

  const handleDisplayVideo = (e, video) => {
    setModalData(video);
    setIsOpen(true);
  };

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isOpen]);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isOpen]);

  return (
    <LazyLoadComponent>
      <section id="testimonials">
        <div className="container">
          <Header title="Testimonials" variant="primary" />
          <Swiper
            slidesPerView={3}
            spaceBetween={0}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="testimonySwiper"
            breakpoints={{
              1150: {
                slidesPerView: 3,
              },
              765: {
                slidesPerView: 2,
              },
              300: {
                slidesPerView: 1,
              },
            }}
          >
            {testimonials.map((testimonial) => {
              const { id, videoSource, title, quote, testImage } = testimonial;
              return (
                <SwiperSlide key={id} className="testimonyItem">
                  <div className="card">
                    <div className="image-content">
                      <span className="overlay"></span>
                      <div className="card-image">
                        <LazyLoadImage
                          src={testImage ? testImage : defaultImg}
                          alt="testimonial"
                          className="card-img"
                        />
                      </div>
                    </div>

                    <div className="card-content">
                      <h2 className="name">{title}</h2>
                      <p className="description">{quote}</p>
                      <button
                        className="btn videoModal"
                        onClick={(e) => handleDisplayVideo(e, videoSource)}
                      >
                        View more
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <AnimatePresence initial={false} exitBeforeEnter={true}>
            {isOpen && (
              <Modal>
                <div className="testimonialIframe" ref={ref}>
                  <button className="btn" onClick={() => setIsOpen(false)}>
                    X
                  </button>
                  <iframe
                    title="title"
                    src={modalData}
                    frameBorder="0"
                  ></iframe>
                </div>
              </Modal>
            )}
          </AnimatePresence>
        </div>
      </section>
    </LazyLoadComponent>
  );
}
