import axios from 'axios'
import {
  FETCH_PEOPLE_REQUEST,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_FAILURE
} from './actionType'

export const fetchPeople = () => {
  console.log("Actions")
  return (dispatch) => {
    dispatch(fetchPeopleRequest())
    axios
      .get('https://swapi.dev/api/people')
      .then(response => {
        // response.data is the users
        const People = response.data
        dispatch(fetchPeoplesSuccess(People))
        console.log(People)
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchPeopleFailure(error.message))
      })
  }
}

export const fetchPeopleRequest = () => {
  return {
    type: FETCH_PEOPLE_REQUEST
  }
}

export const fetchPeoplesSuccess = People => {
  return {
    type: FETCH_PEOPLE_SUCCESS,
    payload: People
  }
}

export const fetchPeopleFailure = error => {
  return {
    type: FETCH_PEOPLE_FAILURE,
    payload: error
  }
}