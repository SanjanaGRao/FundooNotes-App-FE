import { ActionTypes } from "../reduxConstants/actionTypes";

const initialState = {
  notes: [],
  searchedNotes: [],
  title: "Notes",
  viewList:false
};

export const reducerForNotes = (state = initialState, { type, payload } ) => {
  switch ( type ) {
    case ActionTypes.SET_ALL_NOTES:
      return {...state, 
              notes: payload }
    case ActionTypes.SET_SEARCHED_NOTES:
        return {...state,
                searchedNotes: payload }
    case ActionTypes.SET_NOTE_TITLE:
        return { ...state, 
                title: payload };
    case ActionTypes.ADD_NOTE:
        return { ...state, 
                notes: [...state.notes, payload] };
    case ActionTypes.VIEW_LIST:
        return {...state,
                viewList:!state.viewList}
    default:
      return state;
  }
};