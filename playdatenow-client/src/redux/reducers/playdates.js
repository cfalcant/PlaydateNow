import { FETCH_PLAYDATES_SUCCESS, FETCH_PLAYDATES_FAIL } from "../actions/playdates";

let initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLAYDATES_SUCCESS:
      return [...state, ...action.payload.data];
    case FETCH_PLAYDATES_FAIL:
      return action.payload;
    default:
      return state;
  }
};
