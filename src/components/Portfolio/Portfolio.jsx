import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import portfolioContext from "../../context/portfolio";
import Header from "../Header/Header";
import s from "./Portfolio.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";

export default function Portfolio() {
  const { portfolio } = useContext(portfolioContext);

  let navigate = useNavigate();
  const routeChange = (slug) => {
    let pathName = `/project/${slug}`;
    navigate(pathName);
  };

  return (
    <section className={`${s.portfolioContainer} container`} id="portfolio">
      <div className={s.portfolioHeader}>
        <Header title="Check out our projects" />
        <p>
          Check out some projects we have done. Some of them are samples to
          develop creativity, some are hobbies and some are projects that our
          customers wanted to show off.
        </p>
      </div>
      <div className={s.cardContainer}>
        {portfolio.map((item) => {
          const { id, title, cardImage, slug } = item;
          return (
            <motion.div
              key={id}
              className={`${s.portfolioCard} grow`}
              onClick={() => routeChange(slug)}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className={s.cardText}>
                <h3>{title.toUpperCase()}</h3>
              </div>
              <div className={s.cardHeaderImage}>
                {cardImage.map((photo, index) => (
                  <LazyLoadImage
                    key={index}
                    src={photo.fields?.file.url}
                    alt="portfolio item"
                  />
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
