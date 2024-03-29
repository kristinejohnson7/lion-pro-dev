import React, { useContext } from "react";
import privacyContext from "../../context/privacy";
import RichTextToReact from "../RichTextToReact/RichTextToReact";
import s from "../Terms/Terms.module.scss";

export default function Privacy() {
  const { privacy } = useContext(privacyContext);

  return (
    <>
      {privacy.map((item) => (
        <div className={`container ${s.terms}`} key={item.id}>
          <h3>{item.title}</h3>
          <div>
            <RichTextToReact content={item.description} />
          </div>
        </div>
      ))}
    </>
  );
}
