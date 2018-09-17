import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import styledNormalize from "styled-normalize";
import { injectGlobal } from "styled-components";
import { Provider } from "react-redux";
import { store } from "./store";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./store";

//CSS RESET INSERTION

injectGlobal`
  ${styledNormalize}

  html, body{
    height: 100%;
    width:100%;
    font-size: 10px;
    font-family: 'Work Sans', sans-serif;

  }
  input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
}

  `;

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
