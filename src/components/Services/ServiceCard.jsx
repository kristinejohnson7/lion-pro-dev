import React, { useContext } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import servicesContext from "../../context/services";
import { LazyLoadImage } from "react-lazy-load-image-component";
import s from "./Services.module.scss";

export default function ServiceCard({ handleDisplayService }) {
  const { services } = useContext(servicesContext);

  return (
    <LazyLoadComponent>
      {services.map((item) => {
        const { id, title, featuredPicture, icon } = item;
        return (
          <div
            key={id}
            className={`${s.serviceCard} grow`}
            onClick={(e) => {
              handleDisplayService(e, id);
            }}
          >
            <div className={s.cardHeaderImage}>
              <LazyLoadImage src={featuredPicture} alt="services" />
            </div>
            <div className={s.cardIcon}>
              <LazyLoadImage src={icon} alt="services icon" />
            </div>
            <div className={s.cardText}>
              <h3>{title.toUpperCase()}</h3>
            </div>
          </div>
        );
      })}
    </LazyLoadComponent>
  );
}
