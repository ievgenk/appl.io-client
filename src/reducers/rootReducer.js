import { combineReducers } from "redux";
import boardReducer from "./boardReducer";
import cardReducer from "./cardReducer";

export const rootReducer = combineReducers({
  boards: boardReducer,
  cards: cardReducer,
  boardOrder: ["board-1", "board-2", "board-3"]
});
