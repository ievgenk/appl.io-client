import { refreshStore } from "./globalActions";
import { redirectToDash } from "./dashboardActions";
import { SERVER_API_ADDRESS } from "../config/configValues";
import axios from "axios";

export const UPDATE_CARD_FIELD = "UPDATE_CARD";
export const DELETE_CARD = "DELETE_CARD";
export const ADD_CARD = "ADD_CARD";
export const OPEN_CARD = "OPEN_CARD";
export const RESET_OPEN_CARD = "RESET_OPEN_CARD";

export const deleteCard = cardToDelete => {
  return {
    type: DELETE_CARD,
    cardToDelete
  };
};

export const updateCardField = (cardField, newValue, id) => {
  return {
    type: UPDATE_CARD_FIELD,
    cardId: id,
    cardFieldName: cardField,
    cardFieldValue: newValue
  };
};

export const resetOpenCard = () => {
  return {
    type: RESET_OPEN_CARD
  };
};

export const addCard = card => (dispatch, getState) => {
  // Adding card to store
  dispatch({
    type: ADD_CARD,
    card
  });

  // Dispatching card to server

  axios({
    url: `${SERVER_API_ADDRESS}/api/cards`,
    method: "post",
    headers: {
      authorization: getState().auth.login.token
    },
    data: {
      ...card,
      boardId: Object.keys(getState().global.boards)[0]
    }
  }).then(() => {
    dispatch(redirectToDash());
    dispatch(refreshStore());
    dispatch(redirectToDash());
  });
};

export const openCardAction = card => {
  return {
    type: OPEN_CARD,
    card
  };
};
