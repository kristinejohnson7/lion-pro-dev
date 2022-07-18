import React, { useRef } from "react";
import logo from "../../assets/lionlogo.png";
import "./Nav.css";
import Navbar from "react-bootstrap/Navbar";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Nav() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <Navbar sticky="top">
      <header className="navBar">
        <div className="logoContainer">
          <img src={logo} alt="" />
        </div>
        <div>
          <nav className="navOptions" ref={navRef}>
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
            <button className="nav-btn nav-close-btn" onClick={showNavBar}>
              <FaTimes />
            </button>
          </nav>
          <button className="nav-btn" onClick={showNavBar}>
            <FaBars />
          </button>
        </div>
      </header>
    </Navbar>
  );
}
