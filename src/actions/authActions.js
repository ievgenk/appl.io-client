import axios from "axios";
import { SERVER_API_ADDRESS } from "../config/configValues";
import { push } from "connected-react-router";

export const REGISTER_USER_REQUEST = "REGISTER_USER_REQUEST";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";
export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";

export const dispatchLoginRequest = () => {
  return {
    type: LOGIN_USER_REQUEST
  };
};

export const successfullUserLogin = () => {
  return {
    type: LOGIN_USER_SUCCESS
  };
};

export const failedUserLogin = errorMessage => {
  return {
    type: LOGIN_USER_ERROR,
    errorMessage
  };
};

export const loginUser = (email, password) => dispatch => {
  //About to send async request to the API to login
  dispatch(dispatchLoginRequest());

  //Sending the request

  axios
    .post(`${SERVER_API_ADDRESS}/users/login`, { email, password })
    .then(user => {
      //Saving JWT auth token to local storage
      localStorage.setItem("token", user.data.token);
      localStorage.setItem("userId", user.data.user);
      dispatch(successfullUserLogin());
      console.log(user);
      if (user.status === 200) {
        localStorage.setItem("isLoggedIn", true);
      }
      dispatch(push("/dashboard"));
    })
    .catch(error => {
      dispatch(failedUserLogin(error.response.data.message));
    });
};

export const dispatchRegisterRequest = () => {
  return {
    type: REGISTER_USER_REQUEST
  };
};

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

  dispatch(dispatchRegisterRequest());

  return axios
    .post(`${SERVER_API_ADDRESS}/users/signup`, { email, password })
    .then(result => {
      dispatch(sucessfullUserRegistration(result.data.message));
      dispatch(push("/"));
    })
    .catch(err => {
      if (err) {
        dispatch(failedUserRegistration(err.response.data.message));
      }
    });
};
