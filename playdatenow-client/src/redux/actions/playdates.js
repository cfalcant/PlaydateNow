import axios from 'axios';

export const FETCH_PLAYDATES_SUCCESS = 'FETCH_PLAYDATES_SUCCESS';
export const FETCH_PLAYDATES_FAIL = 'FAIL_PLAYDATES_FAIL';

const BASE_URL = 'http://localhost:8000/api'

export const fetchPlaydates = () => {
    return async dispatch => {
        try {
            let allPlaydates = await axios.get(`${BASE_URL}/playdates`)
                dispatch({
                    type: FETCH_PLAYDATES_SUCCESS,
                    payload: allPlaydates
                })
        } catch (error) {
            dispatch({
                type: FETCH_PLAYDATES_FAIL,
                payload: error    
            })
        }
    }
}