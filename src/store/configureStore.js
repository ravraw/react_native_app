import { createStore, combineReducers } from 'redux';
import placesReducer from './reducers/placesReducer';
import inputReducer from './reducers/inputReducer';

const rootReducer = combineReducers({
  places: placesReducer,
  placeName: inputReducer
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
