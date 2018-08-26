import { refreshStore } from "./globalActions";
import { redirectToDash } from "./dashboardActions";

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

  const sendCard = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.9) {
          reject("Failed :(");
        } else {
          resolve();
        }
      }, 500);
    });
  };

  sendCard().then(() => {
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
