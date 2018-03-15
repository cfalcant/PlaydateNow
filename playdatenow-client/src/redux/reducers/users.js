import {
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILED,
    FETCH_USER_PLAYDATES_SUCCESS,
    FETCH_USER_PLAYDATES_FAIL
} from '../actions/users'

let initialState = {
    authedUser: {
        email: "carlos@aol.com",
        firstname: "Carlos",
        id: 1,
        lastname: "Alcantar",
        password: "carlos"
    },
    allUsers: [],
    myPlaydates: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_SUCCESS:
            return { ...state, allUsers: action.payload.data };
        case FETCH_USERS_FAILED:
            return action.payload
        case FETCH_USER_PLAYDATES_SUCCESS:
            return { ...state, myPlaydates: action.payload.data };
        case FETCH_USER_PLAYDATES_FAIL:
            return action.payload    
        default:
            return state

    }
}