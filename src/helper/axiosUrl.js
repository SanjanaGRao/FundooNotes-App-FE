import axios from "axios";
import { setToken } from "../utils/userTokens";

const userConnect = (url, infos) => {
  return axios({
    method: "post",
    url: url,
    data: infos,
    headers: {
      "Content-type": "application/json",
    },
  })
    .then(function (response) {
      console.log(response.data.message.Token);
      console.log(response.data);
      setToken(response.data.message.Token);
      return response;
    })
    .catch(function (error) {
      console.log(error);
      throw new error();
    });
};

const getNote = (url, token) => {
  console.log(token);
  return axios({
    method: "get",
    url: url,
    headers: {
      Authorization: token,
    },
  });
};

const createNotes = (url, data, token) => {
  return axios({
    method: "post",
    url: url,
    data: data,
    headers: {
      Authorization: token,
    },
  });
};

const updateNote = (url, data, token) => {
  console.log(data);
  return axios({
    method: "put",
    url: url,
    data: data,
    headers: {
      Authorization: token,
    },
  });
};

const deleteNote = (url, token) => {
  return axios({
    method: "delete",
    url: url,
    headers: {
      Authorization: token,
    },
  });
};

export { userConnect, getNote, createNotes, updateNote, deleteNote };
