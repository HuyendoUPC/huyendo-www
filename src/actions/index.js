import 'whatwg-fetch';
import thunk from 'redux-thunk';

import {
  ADD_CITY,
  EDIT_DAYS,
  REMOVE_CITY,
  SET_DATE,
  SET_OUT_CITY,
  SET_IN_CITY,
  GET_TRIP,
  TRIP_FETCH_SUCCESS
} from '../constants';


let nextCityId = 0;

export const addCity = (name) => {
  return {
    type: ADD_CITY,
    id: nextCityId++,
    name
  }
}

export const editDays = (id, days) => {
  return {
    type: EDIT_DAYS,
    id,
    days
  }
}

export const removeCity = (id) => {
  return {
    type: REMOVE_CITY,
    id
  }
}

export const setOutCity = (outCity) => {
  return {
    type: SET_OUT_CITY,
    outCity
  }
}

export const setInCity = (inCity) => {
  return {
    type: SET_IN_CITY,
    inCity
  }
}

export const setDate = (date) => {
  return {
    type: SET_DATE,
    date
  }
}

const tripFetchSuccess = (data) => {
  return {
    type: TRIP_FETCH_SUCCESS,
    trips: data
  }
}

export const getTrip = (tripData) => {
  return (dispatch) => {
    return fetch('http://localhost:8080/api/best_route', {
          type: "POST",
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          body: tripData,
        }).then((response) => {
          response.json();
        }).then((json) => {
          console.log('success', response);
          dispatch(tripFetchSuccess(respnse));
        });
  }
}
