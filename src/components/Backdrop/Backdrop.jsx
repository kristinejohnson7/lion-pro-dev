import React from "react";
import { motion } from "framer-motion";
import s from "./Backdrop.module.scss";

export default function Backdrop({ children, onClick }) {
  return (
    <motion.div
      className={s.backdrop}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}
