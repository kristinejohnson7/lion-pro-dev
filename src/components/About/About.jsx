import React, { useContext } from "react";
import aboutContext from "../../context/about";
import "./About.css";

export default function About() {
  const { about } = useContext(aboutContext);
  console.log("about", about);

  return (
    <div id="about">
      <h3 className="aboutHeader">Meet the Team</h3>
      <div className="aboutContainer">
        {about.map((item) => {
          const { description, id, name, picture } = item;
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
    </div>
  );
}
