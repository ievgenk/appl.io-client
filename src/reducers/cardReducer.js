import { REFRESH_STORE_SUCCESS } from "../actions/globalActions";
import {
  ADD_CARD,
  UPDATE_CARD_FIELD,
  DELETE_CARD
} from "../actions/cardActions";

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        [action.card.id]: action.card
      };

    case REFRESH_STORE_SUCCESS:
      return action.payload.cards;

    case UPDATE_CARD_FIELD:
      return {
        ...state,
        [action.cardId]: {
          ...state[action.cardId],
          [action.cardFieldName]: action.cardFieldValue
        }
      };

    case DELETE_CARD:
      const newState = {
        ...state
      };
      delete newState[action.cardToDelete];
      return newState;

    default:
      return state;
  }
};
