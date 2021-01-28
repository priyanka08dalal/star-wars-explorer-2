import axios from 'axios'
import {
  FETCH_PLANET_REQUEST,
  FETCH_PLANET_SUCCESS,
  FETCH_PLANET_FAILURE
} from './actionType'

export const fetchPlanet = () => {
  console.log("Actions")
  return (dispatch) => {
    dispatch(fetchPlanetRequest())
    axios
      .get('https://swapi.dev/api/planets')
      .then(response => {
        // response.data is the users
        const Planet = response.data
        dispatch(fetchPlanetsSuccess(Planet))
        console.log(Planet)
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchPlanetFailure(error.message))
      })
  }
}

export const fetchPlanetRequest = () => {
  return {
    type: FETCH_PLANET_REQUEST
  }
}

export const fetchPlanetsSuccess = Planet => {
  return {
    type: FETCH_PLANET_SUCCESS,
    payload: Planet
  }
}

export const fetchPlanetFailure = error => {
  return {
    type: FETCH_PLANET_FAILURE,
    payload: error
  }
}