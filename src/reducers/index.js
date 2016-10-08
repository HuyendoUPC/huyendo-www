import { combineReducers } from 'redux';
import cities from './cities';
import date from './date';
import inCity from './inCity';
import outCity from './outCity';
import trip from './trip';

const homeReducers = combineReducers({
  cities,
  date,
  inCity,
  outCity,
  trip
});

export default homeReducers;
