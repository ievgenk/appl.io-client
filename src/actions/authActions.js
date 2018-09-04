import axios from "axios";
import { SERVER_API_ADDRESS } from "../config/configValues";

export const REGISTER_USER_REQUEST = "REGISTER_USER_REQUEST";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";

export const sucessfullUserRegistration = message => {
  return {
    type: REGISTER_USER_SUCCESS,
    message
  };
};

export const failedUserRegistration = message => {
  return {
    type: REGISTER_USER_ERROR,
    message
  };
};

export const registerNewUser = ({ email, password }) => dispatch => {
  //Letting Reducer know we are about to send the request to server

  dispatch({
    type: REGISTER_USER_REQUEST
  });

  return axios
    .post(`${SERVER_API_ADDRESS}/users/signup`, { email, password })
    .then(result => {
      dispatch(sucessfullUserRegistration(result.data.message));
    })
    .catch(err => {
      if (err) {
        dispatch(failedUserRegistration(err.response.data.message));
      }
    });
};
