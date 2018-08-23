import { combineReducers } from "redux";
import boardReducer from "./boardReducer";
import cardReducer from "./cardReducer";
import { dashboardReducer } from "./dashboardReducers";

export const rootReducer = combineReducers({
  boards: boardReducer,
  cards: cardReducer,
  toDashboard: dashboardReducer
});
