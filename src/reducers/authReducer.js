const initialState = {
  login: {
    loggedIn: false,
    error: null,
    success: false
  },
  register: {
    success: false,
    error: null
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
