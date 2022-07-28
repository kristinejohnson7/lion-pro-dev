import React from "react";
import logo from "../../assets/lionlogo.png";
import "./Footer.css";
import { Link } from "react-router-dom";
import Blog from "../Blog/Blog";

export default function Footer() {
  return (
    <footer>
      <div className="footerContainer">
        <div className="footerMain">
          <div className="footerLogo">
            <img src={logo} alt="" />
          </div>
          <p>
            Behind the word mountains, far from the countries Vokalia and
            Consonantia, there live the blind texts they live
          </p>
          <div className="socialsContainer">
            <a className="socialCircle" href="#">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a className="socialCircle">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a className="socialCircle">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <div className="socialCircle">
              <i class="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
        <div className="usefulLinks">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <i className="fa-solid fa-angle-right"></i>
              <a href="#home">Home</a>
            </li>
            <li>
              <i className="fa-solid fa-angle-right"></i>
              <a href="#about">About</a>
            </li>
            <li>
              <i className="fa-solid fa-angle-right"></i>
              <a href="#services">Services</a>
            </li>
            <li>
              <i className="fa-solid fa-angle-right"></i>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <i className="fa-solid fa-angle-right"></i>
              <Link to="/blog" component={<Blog />}>
                Blog
              </Link>
            </li>
            <li>
              <i className="fa-solid fa-angle-right"></i>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footerBottom">
        ©2022. Kristine Johnson. All Rights Reserved.
      </div>
    </footer>
  );
}
