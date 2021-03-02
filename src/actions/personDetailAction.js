import axios from "axios";
import {
  FETCH_PERSONDETAILS_REQUEST,
  FETCH_PERSONDETAILS_SUCCESS,
  FETCH_PERSONDETAILS_FAILURE,
} from "./actionType";

export const fetchPersonDetails = (id) => {
  return (dispatch) => {
    console.log("ID ->", id);
    dispatch(fetchPersonDetailsRequest());
    axios
      .get(`https://swapi.dev/api/people/${id}`)// Use axios to get data deom API
    
      .then((response) => {
        // response.data is the users
        const PersonDetails = response.data;
        console.log("People Details -> ", response)
        dispatch(fetchPersonDetailssSuccess(PersonDetails));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchPersonDetailsFailure(error.message));
      });
  };
};

export const fetchPersonDetailsRequest = () => {
  return {
    type: FETCH_PERSONDETAILS_REQUEST,
  };
};

export const fetchPersonDetailssSuccess = (PersonDetails) => {
  return {
    type: FETCH_PERSONDETAILS_SUCCESS,

    payload: PersonDetails,
  };
};

export const fetchPersonDetailsFailure = (error) => {
  return {
    type: FETCH_PERSONDETAILS_FAILURE,
    payload: error,
  };
};
