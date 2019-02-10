import { INPUT_PLACENAME } from './actionTypes';

export const inputChange = placeName => {
  return {
    type: INPUT_PLACENAME,
    payload: {
      placeName
    }
  };
};
