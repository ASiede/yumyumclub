// import {
//   SET_LOGGED_IN,
//   SET_USER,
//   RESET_USER,
//   SET_LOG_IN_IN_PROGRESS
// } from '../actions';

export const initialState = {};

export const spots = (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    // case SET_LOGGED_IN:
    //   return {
    //     ...state,
    //     loggedIn: payload
    //   };
    default:
      return state;
  }
};

export default spots;
