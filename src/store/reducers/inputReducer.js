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
      break;
    default:
      break;
  }
};

export default inputReducer;
