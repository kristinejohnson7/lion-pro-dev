import { AnimatePresence } from "framer-motion";
import React, { useContext, useState, useEffect } from "react";
import portfolioContext from "../../context/portfolio";
import Modal from "../Modal/Modal";
import PortfolioItem from "./PortfolioItem";
import Header from "../Header/Header";
import s from "./Portfolio.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNav } from "../../hooks/useNav";

export default function Portfolio() {
  const { portfolio } = useContext(portfolioContext);
  const [isOpen, setIsOpen] = useState(false);
  const [portfolioData, setPortfolioData] = useState(false);

  const portfolioRef = useNav("portfolio");

  const handleDisplayItem = (e, id) => {
    const modalPage = portfolio.find((item) => item.id === id);
    setPortfolioData(modalPage);
    setIsOpen(true);
  };

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isOpen]);

  return (
    <section className={s.portfolioContainer} id="portfolio" ref={portfolioRef}>
      <div className={s.portfolioHeader}>
        <Header title="Portfolio" variant="light" />
        <p>
          Check out some project we have done. Some of them are samples to
          develop creativity, some are hobbies and some are projects that our
          customers wanted to show off.
        </p>
      </div>
      <div className={s.cardContainer}>
        {portfolio.map((item) => {
          const { id, title, featuredPicture } = item;
          return (
            <div
              key={id}
              className={`${s.portfolioCard} grow`}
              onClick={(e) => handleDisplayItem(e, id)}
            >
              <div className={s.cardHeaderImage}>
                <LazyLoadImage src={featuredPicture} alt="portfolio item" />
              </div>
              <div className={s.cardText}>
                <h3>{title.toUpperCase()}</h3>
              </div>
            </div>
          );
        })}
      </div>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {isOpen && (
          <Modal handleClose={() => setIsOpen(false)}>
            <PortfolioItem
              item={portfolioData}
              handleClose={() => setIsOpen(false)}
            />
          </Modal>
        )}
      </AnimatePresence>
    </section>
  );
}
