import React, { useEffect } from "react";
import "./HubspotForm.scss";

export default function HubspotForm({ formId, id, target }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);
    const listener = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "21617810",
          formId: formId,
          target: target,
        });
      }
    };
    script.addEventListener("load", listener);

    return () => {
      script.removeEventListener("load", listener);
    };
  }, []);

  return <div id={id}></div>;
}
