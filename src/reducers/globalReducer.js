import { REFRESH_STORE_SUCCESS } from "../actions/globalActions";

export default (state = {}, action) => {
  switch (action.type) {
    case REFRESH_STORE_SUCCESS:
      return {
        ...state,
        boards: action.boards,
        cards: action.cards
      };

    default:
      return state;
  }
};
