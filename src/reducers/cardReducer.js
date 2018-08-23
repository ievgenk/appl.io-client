import { REFRESH_STORE_SUCCESS } from "../actions/globalActions";
import { ADD_CARD } from "../actions/cardActions";

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        [action.card.id]: action.card
      };

    case REFRESH_STORE_SUCCESS:
      return action.payload.cards;

    default:
      return state;
  }
};
