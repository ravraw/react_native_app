import Calgary from '../../assets/calgary.jpeg';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  placeName: '',
  selectedPlace: null,
  places: [
    {
      key: `${Math.random()}`,
      placeName: 'Calgary',
      placeImage: Calgary
    }
  ]
};

const placesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PLACE:
      return {
        ...state,
        places: [
          ...state.places,
          {
            key: `${Math.random()}`,
            placeName: action.payload.placeName,
            placeImage: {
              uri:
                'https://www.959chfm.com/wp-content/uploads/sites/12/2017/02/Tower-e1487706581799.png'
            }
          }
        ]
      };
    case actionTypes.DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => place.key !== action.payload.key),
        selectedPlace: null
      };

    case actionTypes.SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(
          place => place.key === action.payload.key
        )
      };

    case actionTypes.DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      };

    default:
      return state;
  }
};

export default placesReducer;
