import {
  GET_TRIP,
  TRIP_FETCH_SUCCESS,
  TRIP_FETCH_FAIL
} from '../constants';

const trip = (state = {}, action) => {
  switch (action.type) {
    case TRIP_FETCH_SUCCESS:
      console.log('trip action', action);
      return {
        status: TRIP_FETCH_SUCCESS,
        trips: action.trips
      }
    default:
      return state;
  }
}

export default trip;
