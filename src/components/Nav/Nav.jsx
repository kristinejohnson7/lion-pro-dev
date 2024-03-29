import React, { useRef } from "react";
import logo from "../../assets/heroLogo.png";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { ReactComponent as Bars } from "../../assets/bars.svg";
import "./Nav.scss";
import ScrollHandler from "./ScrollHandle";

export default function Nav() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const hideBars = () => {
    navRef.current.setAttribute("class", "navbar-collapse collapse");
  };

  const navOptions = ["services", "testimonials", "faq", "blog"];

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
                <li key={index}>
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
                <Link to={"/about"} onClick={hideBars}>
                  ABOUT
                </Link>
              </li>
              <li>
                <Link to={"/projects"} onClick={hideBars}>
                  PROJECTS
                </Link>
              </li>
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
            <Bars className="icon" width="20px" />
          </button>
        </div>
      </header>
    </Navbar>
  );
}
