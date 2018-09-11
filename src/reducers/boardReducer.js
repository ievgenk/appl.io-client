import { MOVE_CARD_WITHIN, MOVE_CARD_ACROSS } from "../actions/boardActions";
import { REFRESH_STORE_SUCCESS } from "../actions/globalActions";
import { ADD_CARD } from "../actions/cardActions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      const initialBoard = Object.values(state).find(
        board => board.title === "Applied"
      );
      return {
        ...state,
        [initialBoard.id]: {
          ...initialBoard,
          cardIds: [...initialBoard.cardIds, action.card.id]
        }
      };

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
        ...action.boards
      };

    default:
      return state;
  }
};
