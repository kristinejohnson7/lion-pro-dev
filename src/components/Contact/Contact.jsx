import React, { useState, useEffect, useRef } from "react";
import ContactCard from "./ContactCard";
import s from "./Contact.module.scss";
import HubspotForm from "../HubspotForm/HubspotForm";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "../Modal/Modal";
import Header from "../Header/Header";
import { LazyLoadComponent } from "react-lazy-load-image-component";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isOpen]);

  // useEffect(() => {
  //   const script = document.createElement("script");

  //   script.src = "https://cdn.oncehub.com/mergedjs/so.js";
  //   script.async = true;

  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

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
              {contactData.map((item, index) => {
                const { title, details } = item;
                return (
                  <div key={index}>
                    <ContactCard title={title} details={details} />
                  </div>
                );
              })}
            </div>

            <button
              id="SOIBTN_InitialProjectCall"
              className="btn outlined"
              data-height="580"
              data-psz="00"
              data-so-page="InitialProjectCall"
              data-delay="1"
            >
              Schedule an Appointment
            </button>
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
      {/* <AnimatePresence initial={false} exitBeforeEnter={true}>
        {isOpen && (
          <Modal>
            <div className={s.schedule}>
              <button className="btn" onClick={() => setIsOpen(false)}>
                X
              </button>
              <iframe
                ref={ref}
                title="title"
                src="https://meetings.hubspot.com/philip-cutting/zoom-call?embed=true"
                frameBorder="0"
              ></iframe>
            </div>
          </Modal>
        )}
      </AnimatePresence> */}
    </>
  );
}
