import axios from 'axios';

export const FETCH_PLAYDATES_SUCCESS = 'FETCH_PLAYDATES_SUCCESS';
export const FETCH_PLAYDATES_FAIL = 'FAIL_PLAYDATES_FAIL';
export const ADD_PLAYDATE_SUCCESS = 'ADD_PLAYDATE_SUCCESS';
export const ADD_PLAYDATE_FAIL = 'ADD_PLAYDATE_FAIL';
export const DELETE_PLAYDATE_SUCCESS = 'DELETE_PLAYDATE_SUCCESS';
export const DELETE_PLAYDATE_FAIL = 'DELETE_PLAYDATE_FAIL'

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

export const addPlaydate = newPlaydate => {
    return async dispatch => {
        try {
      let response = await fetch(`${BASE_URL}/playdates`, {
        method: 'post',
        body: JSON.stringify(newPlaydate),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      let playdates = await response.json()
      dispatch({
        type: ADD_PLAYDATE_SUCCESS,
        payload: playdates
      })
    } catch (error) {
      dispatch({
        type: ADD_PLAYDATE_FAIL,
        payload: error
      })
    }
    }
    }

    export const deletePlaydate = (deletedPlaydate, id) => {
    return async dispatch => {
        try {
      let response = await fetch(`${BASE_URL}/playdates/delete/${id}`, {
        method: 'delete',
        body: JSON.stringify(deletedPlaydate),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      let updatedPlaydates = await response.json()
      dispatch({
        type: DELETE_PLAYDATE_SUCCESS,
        payload: updatedPlaydates
      })
    } catch (error) {
      dispatch({
        type: DELETE_PLAYDATE_FAIL,
        payload: error
      })
    }
    }
    }

