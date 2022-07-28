import React, { useContext, useState } from "react";
import servicesContext from "../../context/services";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "../Modal/Modal";
import "./Services.css";

export default function Services() {
  const { services } = useContext(servicesContext);
  const [modalData, setModalData] = useState("");
  const [isReady, setIsReady] = useState("");

  const handleDisplayService = (e, id) => {
    const modalPage = services.find((service) => service.id === id);
    setModalData(modalPage);
    setIsReady(true);
  };

  return (
    <>
      <div className="services" id="services">
        <div className="servicesCardWrapper">
          {services.map((item) => {
            const { id, title, featuredPicture, icon } = item;
            return (
              <>
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.9 }}
                  key={id}
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
              </>
            );
          })}
        </div>
        <h2>
          LEARN MORE ABOUT OUR <span>SERVICES</span>
        </h2>
      </div>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {isReady && (
          <Modal
            modalOpen={isReady}
            handleClose={() => setIsReady(false)}
            text={modalData}
            type="services"
          ></Modal>
        )}
      </AnimatePresence>
    </>
  );
}
