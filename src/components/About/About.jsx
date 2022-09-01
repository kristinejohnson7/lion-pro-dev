import React, { useContext, useRef, useState, useEffect } from "react";
import aboutContext from "../../context/about";
import "./About.css";
import Modal from "../Modal/Modal";
import { motion, useInView, AnimatePresence } from "framer-motion";

export default function About() {
  const { about } = useContext(aboutContext);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [modalData, setModalData] = useState("");
  const [isReady, setIsReady] = useState("");

  const handleDisplayAbout = (e, id) => {
    const modalPage = about.find((service) => service.id === id);
    setModalData(modalPage);
    setIsReady(true);
  };

  useEffect(() => {
    isReady
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isReady]);

  return (
    <div ref={ref} id="about" className={isInView ? "scrollAnimate" : null}>
      <motion.div>
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
      </motion.div>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {isReady && (
          <Modal
            modalOpen={isReady}
            handleClose={() => setIsReady(false)}
            text={modalData}
            type="about"
          ></Modal>
        )}
      </AnimatePresence>
    </div>
  );
}
