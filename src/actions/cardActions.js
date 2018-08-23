import { refreshStore } from "./globalActions";
import { redirectToDash } from "./dashboardActions";

export const ADD_CARD = "ADD_CARD";

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
