import { ActionTypes } from "../reduxConstants/actionTypes";

const initialState = {
  notes: [],
  searchedNotes: []
};

export const reducerForNotes = (state = initialState, { type, payload } ) => {
  switch ( type ) {
    case ActionTypes.SET_ALL_NOTES:
      return {...state, 
              notes: payload }
    case ActionTypes.SET_SEARCHED_NOTES:
        return {...state,
                searchedNotes: payload }
    default:
      return state;
  }
};