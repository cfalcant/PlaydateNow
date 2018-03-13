// import axios from "axios";

export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";

// export const updateUser = (updateInfo, userID) => {
//   return async dispatch => {
//     try {
//       let patch = axios.patch(`http://localhost:8000/api/users/${userID}`);
//       dispatch({
//         type: UPDATE_USER_SUCCESS,
//         payload: patch
//       });
//     } catch (error) {
//       dispatch({
//         type: UPDATE_USER_FAILURE,
//         payload: error
//       });
//     }
//   };
// };

export const updateUser = () => {
    return (dispatch) => dispatch({
        type: UPDATE_USER_SUCCESS,
    })
};