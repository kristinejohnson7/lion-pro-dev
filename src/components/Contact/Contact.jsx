import React, { lazy, useState, useEffect, useRef } from "react";
import ContactCard from "./ContactCard";
import s from "./Contact.module.scss";
import Header from "../Header/Header";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const ContactFormLazy = lazy(() => import("./ContactForm"));

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isOpen]);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isOpen]);

  const contactData = [
    { title: "Email", details: "lionprodev@gmail.com" },
    { title: "Phone", details: "614-285-6112" },
    { title: "Address", details: "New Albany, Ohio, 43054" },
  ];

  return (
    <section id="contact" className={s.contact}>
      <LazyLoadComponent>
        <div className={`${s.contactContainer} container`}>
          <div className={s.getInTouch}>
            <Header title="Get In Touch" variant="light" />
            <p className={s.getInTouchIntro}>
              Lets discuss your project and give you some inspiration, and see
              if we can work together.
            </p>
            <div className={s.contactCardContainer}>
              {contactData.map((item, index) => {
                const { title, details } = item;
                return (
                  <div key={index}>
                    <ContactCard title={title} details={details} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className={s.formContainer}>
            <ContactFormLazy />
          </div>
        </div>
      </LazyLoadComponent>
    </section>
  );
}
