import React from "react";
import logo from "../../assets/footerlogo.png";
import { Link } from "react-router-dom";
import HubspotForm from "../HubspotForm/HubspotForm";
import s from "./Footer.module.scss";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as TikTok } from "../../assets/tiktok.svg";
import { ReactComponent as Facebook } from "../../assets/facebook-f.svg";
import { ReactComponent as AngleRight } from "../../assets/angle-right.svg";
import { LazyLoadComponent } from "react-lazy-load-image-component";

export default function Footer() {
  const usefulLinks = [
    { to: "home", title: "Home", key: 1 },
    { to: "about", title: "About", key: 2 },
    { to: "services", title: "Services", key: 3 },
    { to: "portfolio", title: "Portfolio", key: 4 },
    { to: "blog", title: "Blog", key: 5 },
    { to: "contact", title: "Contact", key: 6 },
  ];

  const date = new Date().getFullYear();

  const handleClick = (title) => {
    document.getElementById(title).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer>
      <div className={s.footerContainer}>
        <div>
          <div className={s.footerMain}>
            <div className={s.footerSocialsAndLogo}>
              <div className={s.footerLogo}>
                <img
                  src={logo}
                  alt="lion pro dev logo"
                  width="100px"
                  height="62px"
                />
              </div>
              <p>
                Empowering businesses with creative and effective web and mobile
                solutions that drive growth and engage audiences.
              </p>
              <div className={s.socialsContainer}>
                <a
                  className="socialCircle"
                  target="_blank"
                  href="https://www.facebook.com/LionProDev"
                  rel="noreferrer"
                  aria-label="Lion Pro Dev Facebook Account"
                >
                  <Facebook className="icon" width="13px" />
                </a>
                <a
                  className="socialCircle"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/lionprodev/"
                  aria-label="Lion Pro Dev Instagram Account"
                >
                  <Instagram className="icon" width="15px" />
                </a>
                <a
                  className="socialCircle"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Lion Pro Dev TikTok Account"
                  href="https://www.tiktok.com/@philipjcutting?is_from_webapp=1&sender_device=pc"
                >
                  <TikTok className="icon" width="15px" />
                </a>
              </div>
            </div>
            <div className={s.usefulLinks}>
              <h4>Useful Links</h4>
              <ul>
                {usefulLinks.map((link) => (
                  <li key={link.key} onClick={() => handleClick(link.to)}>
                    <AngleRight className="icon" width="13px" />
                    {link.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={s.footerTerms}>
            <Link to="/terms-of-use">Terms of Use</Link>
            <span>|</span>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
        <div className={s.newsletterSubscribe}>
          <h4>Sign up for our newsletter</h4>
          <LazyLoadComponent>
            <HubspotForm
              id="hubspotNewsletter"
              target="#hubspotNewsletter"
              formId="63556e80-90fa-49ba-bda9-264d9f952030"
            />
          </LazyLoadComponent>
        </div>
      </div>
      <div className={s.footerBottom}>©{date}. All Rights Reserved.</div>
    </footer>
  );
}
