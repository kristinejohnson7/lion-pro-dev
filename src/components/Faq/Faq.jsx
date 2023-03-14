import React, { useState, useContext } from "react";
import Header from "../Header/Header";
import s from "./Faq.module.scss";
import faqContext from "../../context/faq";
import { motion } from "framer-motion";
import RichTextToReact from "../RichTextToReact/RichTextToReact";
import { ReactComponent as Plus } from "../../assets/plus.svg";
import { ReactComponent as Minus } from "../../assets/minus.svg";

export default function Faq() {
  const { faq } = useContext(faqContext);
  const [activeId, setActiveId] = useState("");

  const handleFaqClick = (id) => {
    activeId === id ? setActiveId("") : setActiveId(id);
  };

  return (
    <section id="faq">
      <Header title="Frequently Asked Questions" variant="primary" />
      <div className={s.faqContainer}>
        {faq.map((item) => {
          const { id, question, description } = item;
          console.log("id", id);
          console.log("active Id", activeId);
          return (
            <motion.div
              layout
              key={id}
              className={`${s.card} ${activeId === id ? s.active : ""}`}
              onClick={() => handleFaqClick(id)}
            >
              <div className={s.cardHeader}>
                {question}
                {activeId === id ? (
                  <Minus className="icon" width="20px" />
                ) : (
                  <Plus className="icon" width="20px" />
                )}
              </div>
              <motion.div className={s.description}>
                <RichTextToReact content={description} />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
