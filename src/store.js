import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import thunk from "redux-thunk";

const history = createBrowserHistory();

export const store = createStore(
  connectRouter(history)(rootReducer),
  composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk))
);
