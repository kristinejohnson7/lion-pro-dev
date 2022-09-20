import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import "./Testimonials.scss";
import testimonialsContext from "../../context/testimonials";
import Header from "../Header/Header";
import { Fade } from "react-awesome-reveal";

export default function Testimonials() {
  const { testimonials } = useContext(testimonialsContext);

  return (
    <section id="testimonials" className="container">
      <Header title="Testimonials" variant="primary" />
      <Fade>
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
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="testimonialIframe">
                <iframe
                  title="title"
                  src={testimonial.videoSource}
                  frameborder="0"
                  webkitallowfullscreen
                  mozallowfullscreen
                  allowfullscreen
                ></iframe>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Fade>
    </section>
  );
}
