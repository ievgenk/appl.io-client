import { REFRESH_STORE_SUCCESS } from "../actions/globalActions";
import { ADD_CARD } from "../actions/cardActions";

export default (
  state = {
    "bf1050b6-0a2a-4fe0-8877-599412e593c0": {
      companyName: "test company",
      contactEmail: "ekasian@outlook.com",
      contactName: "Ievgen Kasian",
      contactPhone: "+1 07789805853",
      date: "24 August 2018",
      id: "bf1050b6-0a2a-4fe0-8877-599412e593c0",
      postingURL: "http://www.google.ca"
    }
  },
  action
) => {
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
