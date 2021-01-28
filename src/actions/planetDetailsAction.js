import axios from "axios";
// import PersonDetails from '../components/personDetails'
import {
  FETCH_PLANETDETAILS_REQUEST,
  FETCH_PLANETDETAILS_SUCCESS,
  FETCH_PLANETDETAILS_FAILURE,
} from "./actionType";

export const fetchPlanetDetails = () => {
  console.log("In Planets action");
  return (dispatch) => {
    dispatch(fetchPlanetsDetailsRequest());
    axios

      .get("https://swapi.dev/api/planets/1")
      .then((response) => {
        // response.data is the users
        const PlanetsDetails = response.data;
        dispatch(fetchPlanetDetailssSuccess(PlanetsDetails));
        console.log(PlanetsDetails);
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchPlanetsDetailsFailure(error.message));
      });
  };
};

export const fetchPlanetsDetailsRequest = () => {
  return {
    type: FETCH_PLANETDETAILS_REQUEST,
  };
};

export const fetchPlanetDetailssSuccess = (MoviesDetails) => {
  return {
    type: FETCH_PLANETDETAILS_SUCCESS,
    payload: MoviesDetails,
  };
};

export const fetchPlanetsDetailsFailure = (error) => {
  return {
    type: FETCH_PLANETDETAILS_FAILURE,
    payload: error,
  };
};
