import { ActionTypes } from "../reduxConstants/actionTypes";

export const setNotes = (notes) => {
  return {
    type: ActionTypes.SET_ALL_NOTES,
    payload: notes,
  };
};

export const setSearchedNotes = (notes) => {
  return {
    type: ActionTypes.SET_SEARCHED_NOTES,
    payload: notes,
  };
};

export const addNote = (note) => {
  return {
    type: ActionTypes.ADD_NOTE,
    payload: note,
  };
};

export const viewList = (flag) => {
  return {
    type: ActionTypes.VIEW_LIST,
    payload: flag,
  };
};

export const updateOneNote = (note) => {
  return {
    type: ActionTypes.UPDATE_ONE_NOTE,
    payload: note,
  };
};

export const deleteOneNote = (noteId) => {
  return {
    type: ActionTypes.DELETE_ONE_NOTE,
    payload: noteId,
  };
};