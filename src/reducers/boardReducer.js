import { MOVE_CARD_WITHIN, MOVE_CARD_ACROSS } from "../actions/boardActions";
import { REFRESH_STORE_SUCCESS } from "../actions/globalActions";
import { ADD_CARD } from "../actions/cardActions";

const initialState = {
  "board-1": {
    id: "board-1",
    title: "Applied",
    cardIds: ["bf1050b6-0a2a-4fe0-8877-599412e593c0"]
  },
  "board-2": {
    id: "board-2",
    title: "Offer Received",
    cardIds: []
  },
  "board-3": {
    id: "board-3",
    title: "Phone Screen",
    cardIds: []
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MOVE_CARD_WITHIN:
      return {
        ...state,
        [action.newBoard.id]: action.newBoard
      };
    case MOVE_CARD_ACROSS:
      return {
        ...state,
        [action.startBoard.id]: action.startBoard,
        [action.finishBoard.id]: action.finishBoard
      };

    case REFRESH_STORE_SUCCESS:
      return {
        ...state,
        ...action.payload.boards
      };

    case ADD_CARD:
      return {
        ...state,
        ["board-1"]: {
          ...state["board-1"],
          cardIds: [...state["board-1"].cardIds, action.card.id]
        }
      };

    default:
      return state;
  }
};
