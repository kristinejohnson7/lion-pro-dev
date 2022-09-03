import React, { useContext, useState, useEffect } from "react";
import servicesContext from "../../context/services";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "../Modal/Modal";
import "./Services.css";
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
        <div className="servicesContainer" id="services">
          <div className="servicesCardWrapper">
            {services.map((item) => {
              const { id, title, featuredPicture, icon } = item;
              return (
                <div key={id}>
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.9 }}
                    className="serviceCard"
                    onClick={(e) => {
                      handleDisplayService(e, id);
                    }}
                  >
                    <div className="cardHeaderImage">
                      <img src={featuredPicture} alt="services" />
                    </div>
                    <div className="cardIcon">
                      <img src={icon} alt="services icon" />
                    </div>
                    <div className="cardText">
                      <h3>{title.toUpperCase()}</h3>
                    </div>
                  </motion.div>
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
          <Modal
            modalOpen={isOpen}
            handleClose={() => setIsOpen(false)}
            text={modalData}
            type="services"
          ></Modal>
        )}
      </AnimatePresence>
    </>
  );
}
