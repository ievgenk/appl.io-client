import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import styledNormalize from "styled-normalize";
import { injectGlobal } from "styled-components";
import { Provider } from "react-redux";
import { store } from "./store";

//CSS RESET INSERTION

injectGlobal`
  ${styledNormalize}

  html, body{
    height: 100%;
    width:100%;
    font-size: 10px;
  }

  `;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
