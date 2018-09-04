import { combineReducers } from "redux";
import boardReducer from "./boardReducer";
import cardReducer from "./cardReducer";
import { dashboardReducer } from "./dashboardReducers";
import openCardReducer from "./openCardReducer";
import authReducer from "./authReducer";

export const rootReducer = combineReducers({
  boards: boardReducer,
  cards: cardReducer,
  toDashboard: dashboardReducer,
  openCard: openCardReducer,
  auth: authReducer
});
