import { refreshStore } from "./globalActions";
import { redirectToDash } from "./dashboardActions";
import { SERVER_API_ADDRESS } from "../config/configValues";
import { push } from "connected-react-router";
import axios from "axios";
import { clear } from "redux-localstorage-simple";

export const UPDATE_CARD_FIELD = "UPDATE_CARD";
export const DELETE_CARD = "DELETE_CARD";
export const ADD_CARD = "ADD_CARD";
export const OPEN_CARD = "OPEN_CARD";
export const RESET_OPEN_CARD = "RESET_OPEN_CARD";

export const deleteCard = cardToDelete => (dispatch, getState) => {
  axios({
    url: `${SERVER_API_ADDRESS}/api/cards`,
    method: "delete",
    headers: {
      authorization: getState().auth.login.token
    },
    data: {
      _id: cardToDelete
    }
  })
    .then(() => {
      dispatch(refreshStore());
    })
    .catch(err => {
      if (err.message.includes("401")) {
        dispatch(push("/"));
        clear();
      }
    });
};

export const updateCardField = (cardField, newValue, id) => (
  dispatch,
  getState
) => {
  //Submit updated Card

  axios({
    url: `${SERVER_API_ADDRESS}/api/cards`,
    method: "put",
    headers: {
      authorization: getState().auth.login.token
    },
    data: {
      cardId: id,
      cardFieldName: cardField,
      cardFieldValue: newValue
    }
  })
    .then(() => {
      dispatch(refreshStore());
    })
    .catch(err => {
      if (err.message.includes("401")) {
        dispatch(push("/"));
        clear();
      }
    });
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
      boardId: Object.keys(getState().boards)[0]
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

export const openCard = card => dispatch => {
  dispatch(openCardAction(card));
  dispatch(push(`/dashboard/card/${card.id}`));
};
