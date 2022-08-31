import React from "react";
import logo from "../../assets/lionlogo.png";
import "./Footer.css";
import { Link } from "react-router-dom";
import HubspotForm from "../HubspotForm/HubspotForm";
import ScrollHandler from "../Nav/ScrollHandle";

export default function Footer() {
  const usefulLinks = [
    { to: "/", title: "Home", key: 1 },
    { to: "/#about", title: "About", key: 2 },
    { to: "/#services", title: "Services", key: 3 },
    { to: "/#portfolio", title: "Portfolio", key: 4 },
    { to: "/blog", title: "Blog", key: 5 },
    { to: "/#contact", title: "Contact", key: 6 },
  ];
  return (
    <footer>
      <div className="footerContainer">
        <div>
          <div className="footerMain">
            <div className="footerSocialsAndLogo">
              <div className="footerLogo">
                <img src={logo} alt="" />
              </div>
              <p>
                Behind the word mountains, far from the countries Vokalia and
                Consonantia, there live the blind texts they live
              </p>
              <div className="socialsContainer">
                <a
                  className="socialCircle"
                  target="_blank"
                  href="https://www.facebook.com/LionProDev"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a
                  className="socialCircle"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/@philipjcutting?is_from_webapp=1&sender_device=pc"
                >
                  <i className="fa-brands fa-tiktok"></i>
                </a>
              </div>
            </div>
            <div className="usefulLinks">
              <h4>Useful Links</h4>
              <ul>
                {usefulLinks.map((link) => (
                  <li key={link.key}>
                    <ScrollHandler>
                      <i className="fa-solid fa-angle-right"></i>
                      <Link to={link.to}>{link.title}</Link>
                    </ScrollHandler>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="footerTerms">
            <Link to="/terms-of-use">Terms of Use</Link>
            <span>|</span>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>

        <div className="newsletterSubscribe">
          <h4>Sign up for our newsletter</h4>
          <HubspotForm
            id="hubspotNewsletter"
            target="#hubspotNewsletter"
            formId="63556e80-90fa-49ba-bda9-264d9f952030"
          />
        </div>
      </div>

      <div className="footerBottom">
        ©2022. Kristine Johnson. All Rights Reserved.
      </div>
    </footer>
  );
}
