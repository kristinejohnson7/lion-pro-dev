import React, { useContext, useState, useEffect } from "react";
import ContactCard from "./ContactCard";
import contactContext from "../../context/contact";
import s from "./Contact.module.scss";
import HubspotForm from "../HubspotForm/HubspotForm";
import { motion, AnimatePresence } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import Modal from "../Modal/Modal";
import Header from "../Header/Header";

export default function Contact() {
  const { contact } = useContext(contactContext);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isOpen]);

  return (
    <>
      <div id="contact" className={s.contact}>
        <Fade>
          <div className={`${s.contactContainer} container`}>
            <div className={s.getInTouch}>
              <Header title="Get In Touch" variant="light" />
              <p className={s.getInTouchIntro}>
                Lets discuss your project and give you some inspiration, and see
                if we can work together.
              </p>
              <div className={s.contactCardContainer}>
                {contact.map((item) => {
                  const { id, type, details, icon } = item;
                  return (
                    <ContactCard
                      key={id}
                      title={type}
                      details={details}
                      icon={icon}
                    />
                  );
                })}
              </div>
              <button className="btn outlined" onClick={() => setIsOpen(true)}>
                SCHEDULE A MEETING
              </button>
            </div>
            <motion.div className={s.formContainer}>
              <HubspotForm
                id="hubspotContactForm"
                target="#hubspotContactForm"
                formId="2129388b-778b-49a7-b596-7e918bb0dc0a"
              />
            </motion.div>
          </div>
        </Fade>
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
