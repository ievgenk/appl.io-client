import { refreshStore } from "../actions/globalActions";
import { SERVER_API_ADDRESS } from "../config/configValues";
import { push } from "connected-react-router";
import axios from "axios";

export const MOVE_CARD_WITHIN = "MOVE_CARD_WITHIN";
export const MOVE_CARD_ACROSS = "MOVE_CARD_ACROSS";

export const moveCardWithinBoard = newBoard => (dispatch, getState) => {
  // Updating UI optimistically
  dispatch({
    type: MOVE_CARD_WITHIN,
    newBoard
  });

  //Sending new position to the server
  axios({
    url: `${SERVER_API_ADDRESS}/api/move/within`,
    method: "put",
    headers: {
      authorization: getState().auth.login.token
    },
    data: {
      cardIds: newBoard.cardIds,
      boardId: newBoard._id
    }
  })
    .then(() => {
      dispatch(refreshStore());
    })
    .catch(err => {
      if (err.message.includes("401")) {
        dispatch(push("/"));
      }
    });
};

export const moveCardToOtherBoard = (startBoard, finishBoard) => (
  dispatch,
  getState
) => {
  // Updating UI optimistically

  dispatch({
    type: MOVE_CARD_ACROSS,
    startBoard,
    finishBoard
  });

  //Sending new position to the server

  axios({
    url: `${SERVER_API_ADDRESS}/api/move/across`,
    method: "put",
    headers: {
      authorization: getState().auth.login.token
    },
    data: {
      startBoard,
      finishBoard
    }
  }).then(() => {
    dispatch(refreshStore());
  });
};
