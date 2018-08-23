export const REFRESH_STORE_SUCCESS = " REFRESH_STORE_SUCCESS";

export const refreshStore = () => (dispatch, getState) => {
  // Gettin whole store from server

  const retrieveStore = () => {
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

  retrieveStore().then(() => {
    dispatch({
      type: REFRESH_STORE_SUCCESS,
      payload: getState()
    });
  });
};
