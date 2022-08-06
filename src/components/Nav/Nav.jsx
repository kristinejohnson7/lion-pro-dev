import React, { useRef } from "react";
import logo from "../../assets/lionlogo.png";
import "./Nav.css";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";
import { ScrollHandler } from "./ScrollHandle";

export default function Nav() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <Navbar sticky="top">
      <header className="navBar">
        <div className="logoContainer">
          <NavLink to="/">
            <img src={logo} alt="lpd logo" />
          </NavLink>
        </div>
        <div>
          <nav className="navOptions" ref={navRef}>
            <ul className="navList">
              <li>
                <ScrollHandler>
                  <Link to="/#services">SERVICES</Link>
                </ScrollHandler>
              </li>
              <li>
                <ScrollHandler>
                  <Link to="/#portfolio">PORTFOLIO</Link>
                </ScrollHandler>
              </li>
              <li>
                <ScrollHandler>
                  <Link to="/#contact">CONTACT</Link>
                </ScrollHandler>
              </li>
              <li>
                <NavLink to="/blog">BLOG</NavLink>
              </li>
              <li>
                <ScrollHandler>
                  <Link to="/#contact" className="btn project">
                    START A PROJECT
                  </Link>
                </ScrollHandler>
              </li>
            </ul>
            <button className="nav-btn nav-close-btn" onClick={showNavBar}>
              <i className="fa-solid fa-x"></i>
            </button>
          </nav>
          <button className="nav-btn" onClick={showNavBar}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </header>
    </Navbar>
  );
}
