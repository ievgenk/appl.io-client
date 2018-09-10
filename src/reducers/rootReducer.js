import { combineReducers } from "redux";
import boardReducer from "./boardReducer";
import cardReducer from "./cardReducer";
import { dashboardReducer } from "./dashboardReducers";
import openCardReducer from "./openCardReducer";
import authReducer from "./authReducer";
import globalReducer from "./globalReducer";
import { LOGOUT_USER } from "../actions/authActions";

const appReducer = combineReducers({
  boards: boardReducer,
  cards: cardReducer,
  toDashboard: dashboardReducer,
  openCard: openCardReducer,
  auth: authReducer,
  global: globalReducer
});

export const rootReducer = (state, action) => {
  switch (action.type) {
    case LOGOUT_USER:
      return (state = undefined);
    default:
      return appReducer(state, action);
  }
};
