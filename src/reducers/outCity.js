import { SET_OUT_CITY } from '../constants';

const outCity = (state = {}, action) => {
  switch (action.type) {
    case SET_OUT_CITY:
      return {
        outCity: action.outCity
      };
    default:
      return state;
  }
}

export default outCity;
