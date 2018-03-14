import {
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILED
} from '../actions/users'

let initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_SUCCESS:
            return [...state,...action.payload.data]
        case FETCH_USERS_FAILED:
            return action.payload
        default:
            return state

    }
}