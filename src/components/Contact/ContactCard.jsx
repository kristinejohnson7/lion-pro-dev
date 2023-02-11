import React from "react";
import s from "./ContactCard.module.scss";
import { ReactComponent as EnvelopeOpen } from "../../assets/envelope-open.svg";
import { ReactComponent as Phone } from "../../assets/phone.svg";
import { ReactComponent as LocationArrow } from "../../assets/location-arrow.svg";

export default function ContactCard({ title, details, key }) {
  return (
    <div key={key} className={s.contactCard}>
      <div className={s.contactIcon}>
        {title === "Email" && <EnvelopeOpen className="icon" width="22px" />}
        {title === "Phone" && <Phone className="icon" width="22px" />}
        {title === "Address" && <LocationArrow className="icon" width="22px" />}
      </div>
      <div className={s.contactText}>
        <h5>{title}</h5>
        <p>{details}</p>
      </div>
    </div>
  );
}
