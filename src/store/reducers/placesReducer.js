import Calgary from '../../assets/calgary.jpeg';

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
    case addPlace:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};

export default placesReducer;
