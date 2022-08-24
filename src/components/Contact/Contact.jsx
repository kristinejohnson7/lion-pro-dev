import React, { useContext, useRef } from "react";
import ContactCard from "./ContactCard";
import contactContext from "../../context/contact";
import "./Contact.css";
import HubspotForm from "../HubspotForm/HubspotForm";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const { contact } = useContext(contactContext);
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} className={isInView ? "scrollAnimate" : null} id="contact">
      <motion.div className="contactContainer">
        <div className="getInTouch">
          <h3>Get In Touch</h3>
          <p className="getInTouchIntro">
            Lets discuss your project and give you some inspiration, and see if
            we can work together.
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
        </div>
        <div className="formContainer">
          <HubspotForm
            id="hubspotContactForm"
            target="#hubspotContactForm"
            formId="2129388b-778b-49a7-b596-7e918bb0dc0a"
          />
        </div>
      </motion.div>
    </div>
  );
}
