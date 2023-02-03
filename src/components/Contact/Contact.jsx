import React, { useState, useEffect } from "react";
import ContactCard from "./ContactCard";
import s from "./Contact.module.scss";
import HubspotForm from "../HubspotForm/HubspotForm";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "../Modal/Modal";
import Header from "../Header/Header";
import { LazyLoadComponent } from "react-lazy-load-image-component";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isOpen]);

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://cdn.oncehub.com/mergedjs/so.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const contactData = [
    { key: 1, title: "Email", details: "lionprodev@gmail.com" },
    { key: 2, title: "Phone", details: "614-285-6112" },
    { key: 3, title: "Address", details: "New Albany, Ohio, 43054" },
  ];

  return (
    <>
      <div id="contact" className={s.contact}>
        <div className={`${s.contactContainer} container`}>
          <div className={s.getInTouch}>
            <Header title="Get In Touch" variant="light" />
            <p className={s.getInTouchIntro}>
              Lets discuss your project and give you some inspiration, and see
              if we can work together.
            </p>
            <div className={s.contactCardContainer}>
              {contactData.map((item) => {
                const { id, title, details } = item;
                return <ContactCard key={id} title={title} details={details} />;
              })}
            </div>

            <button
              id="SOIBTN_InitialProjectCall"
              className="btn outlined"
              // style={{background: #006DAF; color: #ffffff; padding: 10px 20px; border: 1px solid #c8c8c8; font: bold 14px Arial; cursor: pointer;"
              data-height="580"
              data-psz="00"
              data-so-page="InitialProjectCall"
              data-delay="1"
            >
              Schedule an Appointment
            </button>

            {/* <button className="btn outlined" onClick={() => setIsOpen(true)}>
              SCHEDULE A MEETING
            </button> */}
          </div>
          <motion.div className={s.formContainer}>
            <LazyLoadComponent>
              <HubspotForm
                id="hubspotContactForm"
                target="#hubspotContactForm"
                formId="2129388b-778b-49a7-b596-7e918bb0dc0a"
              />
            </LazyLoadComponent>
          </motion.div>
        </div>
      </div>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {isOpen && (
          <Modal handleClose={() => setIsOpen(false)}>
            <div className={s.schedule}>
              <button className="btn" onClick={() => setIsOpen(false)}>
                X
              </button>
              <iframe
                title="title"
                src="https://meetings.hubspot.com/philip-cutting/zoom-call?embed=true"
                frameborder="0"
                webkitallowfullscreen
                mozallowfullscreen
                allowfullscreen
              ></iframe>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}
