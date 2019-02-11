import * as actionTypes from '../actions/actionTypes';

const initialState = {
  placeName: ''
};

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INPUT_PLACENAME:
      return {
        ...state,
        placeName: action.payload.placeName
      };
    default:
      return state;
  }
};

export default inputReducer;
