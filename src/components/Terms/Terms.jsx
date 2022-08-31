import React, { useContext } from "react";
import termsContext from "../../context/terms";
import RichTextToReact from "../RichTextToReact/RichTextToReact";
import "./Terms.css";

export default function Terms() {
  const { terms } = useContext(termsContext);

  return (
    <>
      {terms.map((item) => (
        <div className="container terms">
          <h3>{item.title}</h3>
          <div>
            <RichTextToReact content={item.description} />
          </div>
        </div>
      ))}
    </>
  );
}
