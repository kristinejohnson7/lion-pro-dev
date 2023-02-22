import React, { useState } from "react";
import s from "./Services.module.scss";
import Header from "../Header/Header";
import idea from "../../assets/idea.svg";
import data from "../../assets/data.svg";
import refine from "../../assets/refine.svg";
import { content } from "../../content/services";
import { useEffect } from "react";

export default function Services() {
  const [active, setActive] = useState({
    type: content[0].type,
    paragraph: content[0].paragraph,
    header: content[0].header,
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
          <div
            className={`${s.card} ${active.type === "idea" ? s.activeBox : ""}`}
            onClick={() =>
              setActive({
                type: content[0].type,
                paragraph: content[0].paragraph,
                header: content[0].header,
              })
            }
          >
            <div className={s.img}>
              <img src={idea} className={s.idea} alt="light bulb icon" />
            </div>
            <p>
              I have an <span>app idea</span> but need help making it come to
              life
            </p>
          </div>
          <div
            className={`${s.card} ${
              active.type === "refine" ? s.activeBox : ""
            }`}
            onClick={() =>
              setActive({
                type: content[1].type,
                paragraph: content[1].paragraph,
                header: content[1].header,
              })
            }
          >
            <div className={s.img}>
              <img src={refine} className={s.refine} alt="refine icon" />
            </div>
            <p>
              I have an <span>existing product</span> that needs to be refined
            </p>
          </div>
          <div
            className={`${s.card} ${active.type === "data" ? s.activeBox : ""}`}
            onClick={() =>
              setActive({
                type: content[2].type,
                paragraph: content[2].paragraph,
                header: content[2].header,
              })
            }
          >
            <div className={s.img}>
              <img src={data} className={s.data} alt="database icon" />
            </div>
            <p>
              I need help turning <span>my data</span> into something valuable.
            </p>
          </div>
        </div>
        {window.innerWidth > 720 ? (
          <div className={s.portfolioWrapper}>
            <div className={s.portfolioCard}>
              <h2>{active.header}</h2>
              <p>{active.paragraph}</p>
              <button onClick={handleContactClick} className="btn project">
                LET'S BUILD SOMETHING
              </button>
            </div>
          </div>
        ) : (
          <>
            {content.map((item) => {
              return (
                <div className={s.portfolioWrapper}>
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
