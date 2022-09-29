import React, { useContext } from "react";
import phone from "../../assets/mobilePhone.svg";
import computer from "../../assets/computerHero.svg";
import homePageContext from "../../context/home-page";
import Tilt from "react-parallax-tilt";
import s from "./Hero.module.scss";
import { motion } from "framer-motion";
import heroBg from "../../assets/heroBckgrd.svg";
import heroPhones from "../../assets/heroPhones.svg";
import RichTextToReact from "../RichTextToReact/RichTextToReact";

function Hero() {
  const { hero } = useContext(homePageContext);
  return (
    <motion.div id="home" animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
      {hero.map((item) => {
        const { id, heroTitle } = item;

        return (
          <div key={id}>
            <div className={s.heroWrapper}>
              <div className={s.heroContainer}>
                <div className={s.heroText}>
                  <RichTextToReact content={heroTitle} />
                  <a href="#contact" className="btn">
                    START A PROJECT
                  </a>
                </div>
                <div className={s.heroImgs}>
                  <img src={heroBg} alt="background shapes" />
                  <div className={s.heroPhone}>
                    <Tilt
                      className="track-on-window"
                      transitionSpeed={2500}
                      scale={1.2}
                    >
                      <div className={s.heroPhoneImg}>
                        <img src={heroPhones} alt="hero header phones" />
                      </div>
                    </Tilt>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.heroBottomBanner}>
              <div className={s.nativeMobile}>
                <div className={s.heroBtmImage}>
                  <img src={phone} alt="phone icon" width="20px" />
                </div>
                <h5>Native Mobile Development</h5>
              </div>
              <div className={s.design}>
                <div className={s.heroBtmImage}>
                  <img
                    src={computer}
                    alt="computer icon"
                    width="30px"
                    height="30px"
                  />
                </div>
                <h5>Design</h5>
              </div>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}

export default Hero;
