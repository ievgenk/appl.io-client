import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import styledNormalize from "styled-normalize";
import { injectGlobal } from "styled-components";

//CSS RESET INSERTION

injectGlobal`
  ${styledNormalize}

  html, body{
    height: 100%;
    width:100%;
  }

  `;

ReactDOM.render(<App />, document.getElementById("root"));
