import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import s from "./NotFound.module.scss";
import notFound from "../../assets/not-found.svg";

export default function NotFound() {
  return (
    <section className={s.notFoundWrapper}>
      <div className={s.notFoundText}>
        <Header title="Sorry, the page you're looking for doesn't exist." />
        <Link to="/" className="btn project">
          Go back to Home Page
        </Link>
      </div>
      <div className={s.image}>
        <img src={notFound} alt="not found icon" />
      </div>
    </section>
  );
}
