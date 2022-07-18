import React from "react";
import logo from "../../assets/lionlogo.png";
import "./Nav.css";

export default function Nav() {
  return (
    <>
      <nav className="navBar">
        <div className="logoContainer">
          <img src={logo} alt="" />
        </div>
        <div className="navOptions">
          <ul className="navList">
            <li>
              <a href="#services">SERVICES</a>
            </li>
            <li>
              <a href="#portfolio">PORTFOLIO</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
            <li>BLOG</li>
            <li>
              <a href="#contact" className="btn project">
                START A PROJECT
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
