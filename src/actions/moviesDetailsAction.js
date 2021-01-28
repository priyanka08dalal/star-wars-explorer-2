import axios from "axios";
// import PersonDetails from '../components/personDetails'
import {
  FETCH_MOVIESDETAILS_REQUEST,
  FETCH_MOVIESDETAILS_SUCCESS,
  FETCH_MOVIESDETAILS_FAILURE,
} from "./actionType";

export const fetchMoviesDetails = () => {
  console.log("In movies action");
  return (dispatch) => {
    dispatch(fetchMoviesDetailsRequest());
    axios

      .get("https://swapi.dev/api/films/1")
      .then((response) => {
        // response.data is the users
        const MoviesDetails = response.data;
        dispatch(fetchMoviesDetailssSuccess(MoviesDetails));
        console.log(MoviesDetails);
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchMoviesDetailsFailure(error.message));
      });
  };
};

export const fetchMoviesDetailsRequest = () => {
  return {
    type: FETCH_MOVIESDETAILS_REQUEST,
  };
};

export const fetchMoviesDetailssSuccess = (MoviesDetails) => {
  return {
    type: FETCH_MOVIESDETAILS_SUCCESS,
    payload: MoviesDetails,
  };
};

export const fetchMoviesDetailsFailure = (error) => {
  return {
    type: FETCH_MOVIESDETAILS_FAILURE,
    payload: error,
  };
};
