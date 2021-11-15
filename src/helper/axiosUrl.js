import axios from "axios";
import {setToken} from "../utils/userTokens";

const userConnect = (method, url, infos) => {
  axios({
    method: method,
    url: url,
    data: infos,
    headers: {
      "Content-type": "application/json"
    }
  })
    .then(function (response) {
      setToken(response.data.message.Token);
      console.log(response.data.message.Token);
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const getNote = (url, token) => {
  console.log(token);
  return( axios ({
    method: "get",
    url: url,
    headers: {
        Authorization: token
    }
}))  
};

export {userConnect, getNote} ;
