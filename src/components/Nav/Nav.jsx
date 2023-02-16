import React, { useRef, useContext } from "react";
import logo from "../../assets/heroLogo.png";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { ReactComponent as Bars } from "../../assets/bars.svg";
import { NavContext } from "../../context/NavContext";
import "./Nav.scss";

export default function Nav() {
  const navRef = useRef();
  const { activeLinkId } = useContext(NavContext);

  const navOptions = ["services", "portfolio", "testimonials", "blog", "about"];

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleClickNav = (title) => {
    document
      .getElementById(title.toLowerCase())
      .scrollIntoView({ behavior: "smooth" });

    if (window.innerWidth < 900) {
      navRef.current.setAttribute("class", "navbar-collapse collapse");
    }
  };

  return (
    <Navbar sticky="top">
      <header className="navBar">
        <div className="logoContainer">
          <NavLink to="/">
            <img src={logo} alt="lpd logo" width="140" height="60" />
          </NavLink>
        </div>
        <div>
          <nav
            ref={navRef}
            className="collapse navbar-collapse navOptions navbar-toggleable-lg"
            id="navbarCollapse"
          >
            <ul className="navList">
              {navOptions.map((item, index) => (
                <li key={item}>
                  <button
                    onClick={() => handleClickNav(item)}
                    className={activeLinkId === item ? "activeClass" : ""}
                  >
                    {item.toUpperCase()}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleClickNav("contact")}
                  className={`btn project ${
                    activeLinkId === "contact" ? "contact" : ""
                  }`}
                >
                  START A PROJECT
                </button>
              </li>
            </ul>
            <button
              className="nav-btn nav-close-btn"
              aria-label="Close Navigation"
              onClick={showNavBar}
            >
              X
            </button>
          </nav>
          <button
            className="nav-btn"
            aria-label="Open Navigation"
            onClick={showNavBar}
          >
            <Bars className="icon" width="20px" path="white" />
          </button>
        </div>
      </header>
    </Navbar>
  );
}
