import { SET_OUT_CITY } from '../constants';

const outCity = (state = {}, action) => {
  console.log('out city enter', action);
  switch (action.type) {
    case SET_OUT_CITY:
      console.log('out city');
      return {
        outCity: action.outCity
      };
    default:
      return state;
  }
}

export default outCity;
