export const REGISTER_USER_REQUEST = "REGISTER_USER_REQUEST";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";

export const registerNewUser = newUser => dispatch => {
  //Letting Reducer know we are about to send the request to server

  dispatch({
    type: REGISTER_USER_REQUEST
  });
};
