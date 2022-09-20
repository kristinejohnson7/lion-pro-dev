import React from "react";
import s from "./Header.module.scss";

export default function Header({ title, variant }) {
  return <h3 className={s[variant]}>{title}</h3>;
}
