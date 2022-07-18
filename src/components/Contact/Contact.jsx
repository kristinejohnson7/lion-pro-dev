import React, { useContext } from "react";
import ContactCard from "./ContactCard";
import contactContext from "../../context/contact";

import "./Contact.css";

export default function Contact() {
  const { contact } = useContext(contactContext);

  console.log("contact", contact);

  return (
    <div className="contactContainer" id="contact">
      <div className="getInTouch">
        <h3>Get In Touch</h3>
        <p className="getInTouchIntro">
          Lets discuss your project and give you some inspiration, and see if we
          can work together.
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
      <div className="formContainer">FORM</div>
    </div>
  );
}
