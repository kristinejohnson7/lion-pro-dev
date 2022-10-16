import React, { useContext, useState, useEffect } from "react";
import aboutContext from "../../context/about";
import Modal from "../Modal/Modal";
import { AnimatePresence } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import RichTextToReact from "../RichTextToReact/RichTextToReact";
import Header from "../Header/Header";
import s from "./About.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function About() {
  const { about } = useContext(aboutContext);
  const [modalData, setModalData] = useState("");
  const [isOpen, setIsOpen] = useState("");

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

  return (
    <section id="about">
      <Fade>
        <Header title="Meet the Team" variant="primary" />
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
      </Fade>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {isOpen && (
          <Modal handleClose={() => setIsOpen(false)}>
            <div className={s.aboutContent}>
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
