import React, { useContext, useState, useEffect } from "react";
import aboutContext from "../../context/about";
import "./About.css";
import Modal from "../Modal/Modal";
import { motion, AnimatePresence } from "framer-motion";
import { Fade } from "react-awesome-reveal";

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
    <div id="about">
      <Fade>
        <h3 className="aboutHeader">Meet the Team</h3>
        <div className="aboutContainer">
          {about.map((item) => {
            const { id, name, picture } = item;
            return (
              <motion.div
                className="aboutCircleWrapper"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.9 }}
                key={id}
                onClick={(e) => {
                  handleDisplayAbout(e, id);
                }}
              >
                <div className="aboutCircle">
                  <img src={picture} alt="about" />
                </div>
                <h5>{name}</h5>
              </motion.div>
            );
          })}
        </div>
      </Fade>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {isOpen && (
          <Modal
            modalOpen={isOpen}
            handleClose={() => setIsOpen(false)}
            text={modalData}
            type="about"
          ></Modal>
        )}
      </AnimatePresence>
    </div>
  );
}
