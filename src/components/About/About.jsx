import React, { useContext, useRef } from "react";
import aboutContext from "../../context/about";
import "./About.css";
import { motion, useInView } from "framer-motion";

export default function About() {
  const { about } = useContext(aboutContext);
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} id="about" className={isInView ? "scrollAnimate" : null}>
      <motion.div>
        <h3 className="aboutHeader">Meet the Team</h3>
        <div className="aboutContainer">
          {about.map((item) => {
            const { id, name, picture } = item;
            return (
              <div className="aboutCircleWrapper">
                <div key={id} className="aboutCircle">
                  <img src={picture} alt="about" />
                </div>
                <h5>{name}</h5>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
