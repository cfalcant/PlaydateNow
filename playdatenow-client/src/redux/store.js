import { createStore, combineReducers, applyMiddleware } from "redux";
import users from './reducers/users';
import playdates from './reducers/playdates';
import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({ users, playdates });

export default () => {
  return createStore(rootReducer, applyMiddleware(thunk, logger));
};
