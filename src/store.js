import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { save, load } from "redux-localstorage-simple";
import thunk from "redux-thunk";

export const history = createBrowserHistory();

const createStoreWithMiddleware = composeWithDevTools(
  applyMiddleware(
    routerMiddleware(history),
    thunk,
    save({
      states: ["auth"]
    })
  )
)(createStore);

export const store = createStoreWithMiddleware(
  connectRouter(history)(rootReducer),
  load()
);
