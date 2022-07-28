import React, { useContext } from "react";
import phone from "../../assets/mobilePhone.svg";
import computer from "../../assets/computerHero.svg";
import homePageContext from "../../context/home-page";
import { ProgressBar } from "react-bootstrap";
// import LocomotiveScroll from "locomotive-scroll";

import "./Hero.css";

function Hero() {
  const { hero } = useContext(homePageContext);

  return (
    <div id="home">
      {hero.map((item) => {
        const { id, heroTitle, heroBg } = item;
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
                <div className="heroImg scroll">
                  <img src={heroBg} alt="hero header phones" />
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
    </div>
  );
}

export default Hero;
