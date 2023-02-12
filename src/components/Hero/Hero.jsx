import React, { useContext } from "react";
import rating from "../../assets/toprated.svg";
import homePageContext from "../../context/home-page";
import s from "./Hero.module.scss";
import heroImage from "../../assets/heroAnimate.svg";
import Typewriter from "typewriter-effect";

function Hero() {
  const { hero } = useContext(homePageContext);
  return (
    <section
      id="home"
      className={s.box}
      style={{ "--r1": "126%", "--r2": "72.2%" }}
    >
      <div>
        <div className={s.heroWrapper}>
          <div className={s.heroContainer}>
            <div className={s.heroText}>
              <h2>
                We
                <Typewriter
                  options={{
                    strings: ["design", "maintain", "create"],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                  }}
                />
                your apps <br /> hassle free.
              </h2>
              <div className={s.description}>
                <p>
                  We work closely with you to understand your unique needs and
                  bring your vision to life. So whether you're looking to revamp
                  an existing website, or create a custom app, we're here to
                  help.
                </p>
                <p>
                  Join the ranks of businesses who have trusted us to help them
                  succeed online.
                </p>
              </div>
              <a href="#contact" className="btn project">
                LET'S BUILD SOMETHING
              </a>
            </div>
            <div className={s.heroImg}>
              <img src={heroImage} alt="hero" />
            </div>
          </div>
        </div>
        <div className={s.heroBottomBanner}>
          <div className={s.btmBannerTrusted}>
            <img src={rating} alt="rating icon" />
            <div className={s.bannerText}>
              <h2>Top Rated</h2>
              <p>and trusted amongst our customers</p>
            </div>
          </div>
          <div className={s.divider}></div>
          <div className={s.companiesWrapper}>
            <div className={s.image}>
              {hero.map((item) => {
                const { id, companyImg } = item;
                return <img key={id} src={companyImg} alt="company logo" />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
