import { OPEN_CARD, RESET_OPEN_CARD } from "../actions/cardActions";

export default (state = {}, action) => {
  switch (action.type) {
    case OPEN_CARD:
      return action.card;

    case RESET_OPEN_CARD:
      return {};

    default:
      return state;
  }
};
