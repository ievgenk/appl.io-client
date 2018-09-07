import axios from "axios";
import { SERVER_API_ADDRESS } from "../config/configValues";

export const REFRESH_STORE_SUCCESS = " REFRESH_STORE_SUCCESS";

export const refreshStore = () => (dispatch, getState) => {
  // Gettin whole store from server

  axios({
    url: `${SERVER_API_ADDRESS}/api/boards`,
    method: "get",
    headers: {
      authorization: getState().auth.login.token
    }
  }).then(({ data: retrievedBoards }) => {
    dispatch({
      type: REFRESH_STORE_SUCCESS,
      retrievedBoards
    });
  });
};
