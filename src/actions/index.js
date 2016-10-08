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
    console.log(JSON.stringify(tripData));
    return fetch('http://localhost:8080/api/best_route', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(tripData)
      }).then((response) => {
        return response.json().then((json) => {
          console.log(json);
          dispatch(tripFetchSuccess(json));
        });
      });
    }
}
