import React, { useContext, useState, useEffect, useRef } from "react";
import aboutContext from "../../context/about";
import Modal from "../Modal/Modal";
import { AnimatePresence } from "framer-motion";
import RichTextToReact from "../RichTextToReact/RichTextToReact";
import Header from "../Header/Header";
import s from "./About.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import aboutImg from "../../assets/about.png";

export default function About() {
  const { about } = useContext(aboutContext);
  const [modalData, setModalData] = useState("");
  const [isOpen, setIsOpen] = useState("");

  const ref = useRef();

  const handleDisplayAbout = (e, id) => {
    const modalPage = about.find((service) => service.id === id);
    setModalData(modalPage);
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
    <section id="about" className={`${s.about} container`}>
      <div className={s.aboutHeading}>
        <LazyLoadImage src={aboutImg} alt="about" />
        <div className={s.headingText}>
          <Header title="About Lion Pro Dev" variant="primary" />
          <p>
            Our agency's core values are honesty, integrity, and
            professionalism. We strive to maintain open and transparent
            communication with our clients throughout the web development
            process, ensuring that their input is valued and incorporated into
            the final product. We take pride in building lasting relationships
            with our clients and working together to achieve their online goals.{" "}
          </p>
          <p>
            Whether you're a small start-up or a large corporation, our web
            development agency has the skills and expertise to bring your vision
            to life. We look forward to working with you and helping you achieve
            success in the digital world.
          </p>
        </div>
      </div>
      <h1>
        Meet our team of <span>creators, developers,</span> and{" "}
        <span>problem solvers.</span>
      </h1>
      <div className={s.aboutContainer}>
        {about.map((item) => {
          const { id, name, picture } = item;
          return (
            <div
              className={`${s.aboutCircleWrapper} grow`}
              key={id}
              onClick={(e) => {
                handleDisplayAbout(e, id);
              }}
            >
              <div className={s.aboutCircle}>
                <LazyLoadImage src={picture} alt="about" />
              </div>
              <h5>{name}</h5>
            </div>
          );
        })}
      </div>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {isOpen && (
          <Modal>
            <div className={s.aboutContent} ref={ref}>
              <div className={s.aboutBtn}>
                <button className="btn" onClick={() => setIsOpen(false)}>
                  X
                </button>
              </div>
              <div className={`modalText about ${s.text}`}>
                <h3>{modalData.name}</h3>
                <div>
                  <RichTextToReact content={modalData.description} />
                </div>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </section>
  );
}
