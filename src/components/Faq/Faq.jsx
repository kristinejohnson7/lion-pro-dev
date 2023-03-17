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
  const [activeIdIsOpen, setActiveIdIsOpen] = useState(false);

  const handleFaqClick = (id) => {
    activeId === id ? setActiveId("") : setActiveId(id);
    setActiveIdIsOpen(!activeIdIsOpen);
  };

  return (
    <section id="faq">
      <Header title="Frequently Asked Questions" variant="primary" />
      <div className={s.faqContainer}>
        {faq.map((item) => {
          const { id, question, description } = item;
          return (
            <motion.div
              layout
              transition={{ layout: { duration: 1, type: "spring" } }}
              key={id}
              className={`${s.card}`}
              onClick={() => handleFaqClick(id)}
            >
              <motion.div layout="position" className={s.cardHeader}>
                <p>{question}</p>
                {activeId === id ? (
                  <Minus className="icon" width="20px" />
                ) : (
                  <Plus className="icon" width="20px" />
                )}
              </motion.div>
              {activeId === id && activeIdIsOpen ? (
                <motion.div className={s.description}>
                  <RichTextToReact content={description} />
                </motion.div>
              ) : null}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
