import { AnimatePresence, motion, useInView } from "framer-motion";
import React, { useContext, useState, useRef } from "react";
import portfolioContext from "../../context/portfolio";
import Modal from "../Modal/Modal";
import "./Portfolio.css";

export default function Portfolio() {
  const { portfolio } = useContext(portfolioContext);
  const [isOpen, setIsOpen] = useState(false);
  const [portfolioData, setPortfolioData] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  const handleDisplayItem = (e, id) => {
    const modalPage = portfolio.find((item) => item.id === id);
    setPortfolioData(modalPage);
    setIsOpen(true);
  };

  return (
    <div
      ref={ref}
      className={`portfolioContainer ${isInView ? "scrollAnimate" : null}`}
      id="portfolio"
    >
      <motion.div>
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
              <>
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.9 }}
                  key={id}
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
              </>
            );
          })}
        </div>
      </motion.div>

      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {isOpen && (
          <Modal
            type="portfolio"
            text={portfolioData}
            handleClose={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
