import axios from "axios";
import { SERVER_API_ADDRESS } from "../config/configValues";

export const REFRESH_STORE_SUCCESS = " REFRESH_STORE_SUCCESS";

export const shapeRetrievedBoard = retrievedBoards => {
  //Restructuring Redux Store to the needed shape, giving boards cardIds property

  let newBoardArray = retrievedBoards.map(board => {
    let cardIds = [];

    board.cards.forEach(card => cardIds.push(card._id));

    return {
      ...board,
      cardIds
    };
  });

  //Creating a seperate main level Card Object

  let cardArr = [];
  let cardObj = {};

  retrievedBoards.forEach(board => {
    if (board.cards.length !== 0) {
      board.cards.forEach(card => cardArr.push(card));
    }
  });

  cardArr.forEach(card => (cardObj[card._id] = { ...card, id: card._id }));

  //Creating board property on a global object for Redux store

  let boardObj = {};
  newBoardArray.forEach(
    board => (boardObj[board._id] = { ...board, id: board._id })
  );

  return {
    boards: boardObj,
    cards: cardObj
  };
};

export const refreshStore = () => (dispatch, getState) => {
  // Gettin whole store from server

  axios({
    url: `${SERVER_API_ADDRESS}/api/boards`,
    method: "get",
    headers: {
      authorization: getState().auth.login.token
    }
  }).then(({ data: retrievedBoards }) => {
    let shaped = shapeRetrievedBoard(retrievedBoards);

    dispatch({
      type: REFRESH_STORE_SUCCESS,
      ...shaped
    });
  });
};
