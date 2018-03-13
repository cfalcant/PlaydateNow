import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({ });

export default () => {
  return createStore(rootReducer, applyMiddleware(thunk, logger));
};
