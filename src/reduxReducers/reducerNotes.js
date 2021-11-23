import { ActionTypes } from "../reduxConstants/actionTypes";

const initialState = {
  notes: [],
  searchedNotes: [],
  viewList:false
};

export const reducerForNotes = (state = initialState, { type, payload } ) => {
  switch (type) {
    case ActionTypes.SET_ALL_NOTES:
      return { ...state, notes: payload };
    case ActionTypes.SET_SEARCHED_NOTES:
      return { ...state, searchedNotes: payload };
    case ActionTypes.ADD_NOTE:
      console.log(payload);
      return { ...state, notes: [...state.notes, payload] };
    case ActionTypes.VIEW_LIST:
      return { ...state, viewList: !state.viewList };
    case ActionTypes.UPDATE_ONE_NOTE:
      let newNote = [...state.notes];
      console.log(newNote);
      console.log(payload);
      let index = state.notes.findIndex(
        (note) => note._id === payload.data._id
      );
      newNote[index] = payload.data;
      return { ...state, notes: newNote };
    default:
      return state;
  }
};