import React, { useEffect } from "react";
import "./HubspotContactForm.css";

export default function HubspotContactForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);
    const listener = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "21617810",
          formId: "2129388b-778b-49a7-b596-7e918bb0dc0a",
          target: "#hubspotForm",
        });
      }
    };
    script.addEventListener("load", listener);

    return () => {
      script.removeEventListener("load", listener);
    };
  }, []);

  return <div id="hubspotForm"></div>;
}
