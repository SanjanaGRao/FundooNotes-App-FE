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