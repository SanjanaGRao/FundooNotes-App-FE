import {
  getNote,
  createNotes,
  updateNote,
  deleteNote,
} from "../helper/axiosUrl";
import { getToken } from "../utils/userTokens";

const token = getToken("token");


const notes = () => {
let url = "http://localhost:4000/notes";
  console.log(token);
  return getNote(url, `bearer ${token}`)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

const createNewNotes = (data) => {
  let url = "http://localhost:4000/notes";
  return createNotes(url, data, `bearer ${token}`);
};

const updateNotes = (data, id) => {
  let url = `http://localhost:4000/notes/${id}`;
  return updateNote(url, data, `bearer ${token}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

const deleteNotes = (id) => {
  let url = `http://localhost:4000/notes/${id}`;
  return deleteNote(url, `bearer ${token}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};
export { notes, createNewNotes, updateNotes, deleteNotes };
