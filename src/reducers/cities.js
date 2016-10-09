import { 
  ADD_CITY,
  EDIT_DAYS,
  REMOVE_CITY } from '../constants';
       

const DEFAULT_DAYS = 2;

const city = (state = {}, action) => {
  switch (action.type) {
    case ADD_CITY:
      return {
        id: action.id,
        name: action.name,
        days: DEFAULT_DAYS
      }
    case EDIT_DAYS:
      if (state.id != action.id) {
        return state;
      }

      return Object.assign({}, state, {
        days: parseInt(action.days)
      })
    default:
      return state;
  }
}

const cities = (state = [], action) => {
  switch (action.type) {
    case ADD_CITY:
      return [
        ...state,
        city(undefined, action)
      ];
    case EDIT_DAYS:
      for (let i = 0; i < state.length; i++) {
        let c = state[i];
        state[i] = city(c, action);
      }
      return state;
    case REMOVE_CITY:
      return state.filter(c => {
        return c.id != action.id
      });
    default:
      return state;
  }
}

export default cities;
