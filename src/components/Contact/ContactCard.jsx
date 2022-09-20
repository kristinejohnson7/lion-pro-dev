import React from "react";
import s from "./ContactCard.module.scss";

export default function ContactCard({ title, details, icon }) {
  return (
    <div className={s.contactCard}>
      <div className={s.contactIcon}>
        <i className={`fa-solid ${icon} fa-lg`}></i>
      </div>
      <div className={s.contactText}>
        <h5>{title}</h5>
        <p>{details}</p>
      </div>
    </div>
  );
}
