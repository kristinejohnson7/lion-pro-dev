import React, { useState } from "react";
import s from "./Services.module.scss";
import Header from "../Header/Header";
import idea from "../../assets/idea.svg";
import data from "../../assets/data.svg";
import refine from "../../assets/refine.svg";
import ideaPortfolio from "../../assets/portfolio1.png";
import dataPortfolio from "../../assets/dataPortfolio.png";
import refinePortfolio from "../../assets/refinePortfolio.png";
import { content } from "../../content/services";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Services() {
  const [active, setActive] = useState({
    type: content[0].type,
    paragraph: content[0].paragraph,
    header: content[0].header,
    portfolio: content[0].portfolio,
  });

  useEffect(() => {}, [active, window.innerWidth]);

  const handleContactClick = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className={s.services}>
      <div className={`${s.servicesWrapper} container`}>
        <Header title="What challenge are you facing?" variant="light" />
        <hr />
        <div className={s.cardWrapper}>
          {content.map((item) => {
            const { type, paragraph, header, portfolio } = item;
            return (
              <div
                key={type}
                className={`${s.card} ${
                  active.type === type ? s.activeBox : ""
                }`}
                onClick={() =>
                  setActive({
                    type,
                    paragraph,
                    header,
                    portfolio,
                  })
                }
              >
                <div className={s.img}>
                  <img
                    src={
                      type === "idea" ? idea : type === "refine" ? refine : data
                    }
                    className={s.idea}
                    alt="light bulb icon"
                  />
                </div>
                <p>{header}</p>
              </div>
            );
          })}
        </div>
        {window.innerWidth > 815 ? (
          <div className={s.portfolioWrapper}>
            <div className={s.portfolioCard}>
              <div className={s.portfolioCardDescription}>
                <div>
                  <h2>{active.header}</h2>
                  <p>{active.paragraph}</p>
                  <button onClick={handleContactClick} className="btn project">
                    LET'S BUILD SOMETHING
                  </button>
                </div>
                <div className={s.portfolioCTA}>
                  <p>{active.portfolio}</p>
                  <Link to="/projects">Learn more about our work</Link>
                </div>
              </div>
              <LazyLoadImage
                src={
                  active.type === "idea"
                    ? ideaPortfolio
                    : active.type === "data"
                    ? dataPortfolio
                    : refinePortfolio
                }
                alt="portfolio item"
              />
            </div>
          </div>
        ) : (
          <>
            {content.map((item, index) => {
              return (
                <div key={index} className={s.portfolioWrapper}>
                  <div className={s.portfolioCard}>
                    <h2>{item.header}</h2>
                    <p>{item.paragraph}</p>
                    <button
                      onClick={handleContactClick}
                      className="btn project"
                    >
                      LET'S BUILD SOMETHING
                    </button>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </section>
  );
}
