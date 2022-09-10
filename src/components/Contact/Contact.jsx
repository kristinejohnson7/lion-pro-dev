import React, { useContext, useState, useEffect } from "react";
import ContactCard from "./ContactCard";
import contactContext from "../../context/contact";
import "./Contact.css";
import HubspotForm from "../HubspotForm/HubspotForm";
import { motion, AnimatePresence } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import Modal from "../Modal/Modal";

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
      <div id="contact">
        <Fade>
          <div className="contactContainer">
            <div className="getInTouch">
              <h3>Get In Touch</h3>
              <p className="getInTouchIntro">
                Lets discuss your project and give you some inspiration, and see
                if we can work together.
              </p>
              <div className="contactCardContainer">
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
            <motion.div className="formContainer">
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
            <div className="schedule">
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
