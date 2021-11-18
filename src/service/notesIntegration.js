import { getNote } from "../helper/axiosUrl";
import { getToken } from "../utils/userTokens"

const token = getToken("token");
const url = "http://localhost:4000/notes";

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

const createNotes = (data) => {
    return createNotes(url,data,`bearer ${token}`).then((response)=>{
        console.log(response)
    }).catch((err)=>{
        console.log(err)
    }); 
}

export {notes, createNotes};