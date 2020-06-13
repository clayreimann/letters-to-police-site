import React from "react";
import { render, hydrate } from "react-dom";
import "./index.css";
import App from "./App";
import "./index.footer.css";
import * as serviceWorker from "./serviceWorker";

const root = document.getElementById("root");

// support react-snap
if (root?.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    root
  );
} else {
  render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    root
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
