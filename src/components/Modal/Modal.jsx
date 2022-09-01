import { motion } from "framer-motion";
import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import PortfolioItem from "../Portfolio/PortfolioItem";
import RichTextToReact from "../RichTextToReact/RichTextToReact";
import "./Modal.css";

export default function Modal({ handleClose, text, type }) {
  const dropIn = {
    hidden: {
      opacity: 0,
      scale: 0.75,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.15,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.75,
      transition: {
        ease: "easeIn",
        duration: 0.15,
      },
    },
  };

  const { title, featuredPicture, description } = text;

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {type === "services" || type === "about" ? (
          <div className="modalContent">
            <div className="modalImage">
              <button className="btn" onClick={handleClose}>
                X
              </button>
              {type === "services" && (
                <img src={featuredPicture} alt="services" />
              )}
            </div>
            <div className={`modalText ${type}`}>
              <h3>{title}</h3>
              <p>
                {type === "about" ? (
                  <RichTextToReact content={description} />
                ) : (
                  description
                )}
              </p>
            </div>
          </div>
        ) : null}
        {type === "portfolio" && (
          <PortfolioItem item={text} handleClose={handleClose} />
        )}
      </motion.div>
    </Backdrop>
  );
}
