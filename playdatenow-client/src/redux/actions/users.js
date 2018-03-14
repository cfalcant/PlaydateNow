import axios from "axios";

export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";

const BASE_URL = `http://localhost:8000/api`

export const fetchUsers = () => {
    return async dispatch => {
        try {
            let allUsers = await axios.get(`${BASE_URL}/users`)
                dispatch({
                    type: FETCH_USERS_SUCCESS,
                    payload: allUsers
                })
        } catch (error) {
            dispatch({
                type:FETCH_USERS_FAILED,
                payload: error 
            })
        }
    }
}


//NICK G EXAMPLE IN G PONG
export const updateUser = (updateInfo, userID) => {
  return async dispatch => {
    try {
      let patch = axios.patch(`http://localhost:8000/api/users/${userID}`);
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: patch
      });
    } catch (error) {
      dispatch({
        type: UPDATE_USER_FAILURE,
        payload: error
      });
    }
  };
};


