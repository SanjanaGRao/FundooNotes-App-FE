import axios from "axios";

const userConnect = (method, url, infos) => {
  axios({
    method: method,
    url: url,
    data: infos,
  })
  .then(function (response) {
      console.log(response.data);
      if(response.status === 200)
      {
        alert("Operation Successful");
      }  
    })
  .catch(function (error) {
      alert("An Error was encountered")
      console.log(error);
    });
};

export default userConnect;
