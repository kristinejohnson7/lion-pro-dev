import React from "react";
import "./ContactCard.css";

export default function ContactCard({ title, details, icon }) {
  return (
    <div className="contactCard">
      <div className="contactIcon">
        <i className={`fa-solid ${icon} fa-lg`}></i>
      </div>
      <div className="contactText">
        <h5>{title}</h5>
        <p>{details}</p>
      </div>
    </div>
  );
}
