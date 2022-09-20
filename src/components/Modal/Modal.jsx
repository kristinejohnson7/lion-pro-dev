import { motion } from "framer-motion";
import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import s from "./Modal.module.scss";

export default function Modal({ handleClose, children }) {
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

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={s.modal}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.div>
    </Backdrop>
  );
}
