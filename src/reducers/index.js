import { combineReducers } from 'redux';
import cities from './cities';
import date from './date';
import inCity from './inCity';
import outCity from './outCity';

const homeReducers = combineReducers({
  cities,
  date,
  inCity,
  outCity
});

export default homeReducers;
