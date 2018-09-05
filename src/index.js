import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import styledNormalize from "styled-normalize";
import { injectGlobal } from "styled-components";
import { Provider } from "react-redux";
import { store } from "./store";
import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";

//CSS RESET INSERTION

injectGlobal`
  ${styledNormalize}

  html, body{
    height: 100%;
    width:100%;
    font-size: 10px;
    font-family: 'Work Sans', sans-serif;
  }

  `;

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
