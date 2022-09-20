import React, { useContext, useState, useEffect } from "react";
import servicesContext from "../../context/services";
import { AnimatePresence } from "framer-motion";
import Modal from "../Modal/Modal";
import s from "./Services.module.scss";
import "../../animation.scss";
import { Fade } from "react-awesome-reveal";

export default function Services() {
  const { services } = useContext(servicesContext);
  const [modalData, setModalData] = useState("");
  const [isOpen, setIsOpen] = useState("");

  const handleDisplayService = (e, id) => {
    const modalPage = services.find((service) => service.id === id);
    setModalData(modalPage);
    setIsOpen(true);
  };

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isOpen]);

  return (
    <>
      <Fade>
        <div className={s.servicesContainer} id="services">
          <div className={s.servicesCardWrapper}>
            {services.map((item) => {
              const { id, title, featuredPicture, icon } = item;
              return (
                <div
                  key={id}
                  className={`${s.serviceCard} grow`}
                  onClick={(e) => {
                    handleDisplayService(e, id);
                  }}
                >
                  <div className={s.cardHeaderImage}>
                    <img src={featuredPicture} alt="services" />
                  </div>
                  <div className={s.cardIcon}>
                    <img src={icon} alt="services icon" />
                  </div>
                  <div className={s.cardText}>
                    <h3>{title.toUpperCase()}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <h2>
            LEARN MORE ABOUT OUR <span>SERVICES</span>
          </h2>
        </div>
      </Fade>

      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {isOpen && (
          <Modal>
            <div className={s.servicesModal}>
              <div className={s.modalImage}>
                <button className="btn" onClick={() => setIsOpen(false)}>
                  X
                </button>
                <img src={modalData.featuredPicture} alt="services" />
              </div>
              <div className={s.modalText}>
                <h3>{modalData.title}</h3>
                <div>{modalData.description}</div>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}
