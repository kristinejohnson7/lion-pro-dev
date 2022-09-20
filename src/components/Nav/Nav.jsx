import React, { useRef } from "react";
import logo from "../../assets/lionlogo.png";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";
import ScrollHandler from "./ScrollHandle";
import "./Nav.scss";

export default function Nav() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const hideBars = () => {
    navRef.current.setAttribute("class", "navbar-collapse collapse");
  };

  const navOptions = ["services", "portfolio", "testimonials", "about", "blog"];

  return (
    <Navbar sticky="top">
      <header className="navBar">
        <div className="logoContainer">
          <NavLink to="/">
            <img src={logo} alt="lpd logo" />
          </NavLink>
        </div>
        <div>
          <nav
            ref={navRef}
            className="collapse navbar-collapse navOptions navbar-toggleable-lg"
            id="navbarCollapse"
          >
            <ul className="navList">
              {navOptions.map((item) => (
                <li>
                  <ScrollHandler>
                    <Link
                      to={item === "blog" ? "/blog" : `/#${item}`}
                      onClick={hideBars}
                    >
                      {item.toUpperCase()}
                    </Link>
                  </ScrollHandler>
                </li>
              ))}
              <li>
                <ScrollHandler>
                  <Link
                    className="btn project"
                    to="/#contact"
                    onClick={hideBars}
                  >
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
