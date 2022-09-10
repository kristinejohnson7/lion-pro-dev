import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useState, useEffect } from "react";
import portfolioContext from "../../context/portfolio";
import Modal from "../Modal/Modal";
import "./Portfolio.css";
import { Fade } from "react-awesome-reveal";
import PortfolioItem from "./PortfolioItem";

export default function Portfolio() {
  const { portfolio } = useContext(portfolioContext);
  const [isOpen, setIsOpen] = useState(false);
  const [portfolioData, setPortfolioData] = useState(false);

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
    <div className="portfolioContainer" id="portfolio">
      <Fade>
        <div className="portfolioHeader">
          <h2>Portfolio</h2>
          <p>
            Here are some projects , some of them are just samples to develop
            creativity, some are hobbies and some are projects that our
            customers wanted to show off.
          </p>
        </div>
        <div className="pCardContainer">
          {portfolio.map((item) => {
            const { id, title, featuredPicture } = item;
            return (
              <div key={id}>
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.9 }}
                  className="portfolioCard"
                  onClick={(e) => handleDisplayItem(e, id)}
                >
                  <div className="cardHeaderImage">
                    <img src={featuredPicture} alt="portfolio item"></img>
                  </div>
                  <div className="pCardText">
                    <h3>{title.toUpperCase()}</h3>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </Fade>

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
    </div>
  );
}
