import { SET_IN_CITY } from '../constants';

const inCity = (state = {}, action) => {
  switch (action.type) {
    case SET_IN_CITY:
      return {
        inCity: action.inCity
      };
    default:
      return state;
  }
}

export default inCity;
