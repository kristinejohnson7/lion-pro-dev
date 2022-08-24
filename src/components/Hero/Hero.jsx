import React, { useContext } from "react";
import phone from "../../assets/mobilePhone.svg";
import computer from "../../assets/computerHero.svg";
import homePageContext from "../../context/home-page";
import Tilt from "react-parallax-tilt";
import "./Hero.css";
import { motion } from "framer-motion";
import heroBg from "../../assets/heroBckgrd.svg";
import heroPhones from "../../assets/heroPhones.png";

function Hero() {
  const { hero } = useContext(homePageContext);

  return (
    <motion.div id="home" animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
      {hero.map((item) => {
        const { id, heroTitle } = item;
        return (
          <>
            <div key={id} className="heroWrapper">
              <div className="heroContainer">
                <div className="heroText">
                  <h1>{heroTitle}</h1>
                  <a href="#contact" className="btn">
                    START A PROJECT
                  </a>
                </div>
                <div className="heroImgsContainer">
                  <img src={heroBg} alt="" />
                  <div className="heroPhoneContainer">
                    <Tilt
                      className="track-on-window"
                      transitionSpeed={2500}
                      scale={1.2}
                    >
                      <div className="heroPhoneImg">
                        <img src={heroPhones} alt="hero header phones" />
                      </div>
                    </Tilt>
                  </div>
                </div>
              </div>
            </div>
            <div className="heroBottomBanner">
              <div className="nativeMobile">
                <div className="heroBtmImage">
                  <img src={phone} alt="" />
                </div>
                <h5>Native Mobile Development</h5>
              </div>
              <div className="design">
                <div className="heroBtmImage">
                  <img src={computer} alt="" />
                </div>
                <h5>Design</h5>
              </div>
            </div>
          </>
        );
      })}
    </motion.div>
  );
}

export default Hero;
