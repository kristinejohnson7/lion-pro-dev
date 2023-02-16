import React from "react";
import HeroBanner from "./HeroBanner";
import s from "./Hero.module.scss";
import heroImage from "../../assets/heroAnimate.svg";
import Typewriter from "typewriter-effect";
import { useNav } from "../../hooks/useNav";

function Hero() {
  const heroRef = useNav("home");

  const handleClick = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className={s.box} ref={heroRef}>
      <svg
        className={s.svg}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,128L34.3,149.3C68.6,171,137,213,206,218.7C274.3,224,343,192,411,186.7C480,181,549,203,617,218.7C685.7,235,754,245,823,224C891.4,203,960,149,1029,154.7C1097.1,160,1166,224,1234,218.7C1302.9,213,1371,139,1406,101.3L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
      <div className={s.absolute}>
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
              <button onClick={handleClick} className="btn project">
                LET'S BUILD SOMETHING
              </button>
            </div>
            <div className={s.heroImg}>
              <img src={heroImage} alt="hero" />
            </div>
          </div>
          <div className={s.bottom}></div>
        </div>
        <HeroBanner />
      </div>
    </section>
  );
}

export default Hero;
