import { getNote, createNotes, updateNote } from "../helper/axiosUrl";
import { getToken } from "../utils/userTokens"

const token = getToken("token");
let url = "http://localhost:4000/notes";

const notes = () => {
    console.log(token);
    return getNote(url, `bearer ${token}`)
    .then((response) => {
        console.log(response);
        return response;
    }).catch((err) => {
        throw err;
    });
}

const createNewNotes = (data) => {
    return createNotes(url,data,`bearer ${token}`);
}

const updateNotes = (data,id) => {
    url=`http://localhost:4000/notes/${id}`;
    return updateNote(url, data, `bearer ${token}`).then((response) => {
        return response;
    }).catch((err) => {
        throw err;
    })
}
export {notes, createNewNotes, updateNotes};