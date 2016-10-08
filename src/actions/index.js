import {
  ADD_CITY,
  EDIT_DAYS,
  REMOVE_CITY,
  SET_DATE,
  SET_OUT_CITY,
  SET_IN_CITY
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
  console.log('out city action');
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
