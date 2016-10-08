import { SET_DATE } from '../constants';

const date = (state = {}, action) => {
  switch (action.type) {
    case SET_DATE:
      return {
        date: action.date
      };
    default:
      return state;
  }
}

export default date;
