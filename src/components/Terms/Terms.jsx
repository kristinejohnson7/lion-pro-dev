import React, { useContext } from "react";
import termsContext from "../../context/terms";
import RichTextToReact from "../RichTextToReact/RichTextToReact";
import s from "./Terms.module.scss";

export default function Terms() {
  const { terms } = useContext(termsContext);

  return (
    <>
      {terms.map((item) => (
        <div className={`container ${s.terms}`}>
          <h3>{item.title}</h3>
          <div>
            <RichTextToReact content={item.description} />
          </div>
        </div>
      ))}
    </>
  );
}
