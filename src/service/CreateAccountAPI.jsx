import axios from 'axios'

const userConnect = (data) => {
    console.log(data);
    axios.post(`http://localhost:5000/users`, data)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
export default userConnect