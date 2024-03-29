import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import { HelmetProvider } from "react-helmet-async";

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_KEY,
  integrations: [new Integrations.BrowserTracing()],

  tracesSampleRate: 1.0,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
