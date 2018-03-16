import { FETCH_PLAYDATES_SUCCESS, FETCH_PLAYDATES_FAIL,ADD_PLAYDATE_SUCCESS, ADD_PLAYDATE_FAIL, DELETE_PLAYDATE_SUCCESS, DELETE_PLAYDATE_FAIL } from "../actions/playdates";

let initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLAYDATES_SUCCESS:
      return [...state, ...action.payload.data];

    case FETCH_PLAYDATES_FAIL:
      return action.payload;
    case ADD_PLAYDATE_SUCCESS:
      return [...state, ...action.payload];
    case ADD_PLAYDATE_FAIL:
      return action.payload;
    case DELETE_PLAYDATE_SUCCESS:
      return [...action.payload];
    case DELETE_PLAYDATE_FAIL:
      return action.payload;     
    default:
      return state;
  }
};
