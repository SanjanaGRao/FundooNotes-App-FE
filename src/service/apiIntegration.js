import userConnect from "../helper/axiosUrl";

const userPost = (url, data) => {
  userConnect("post",`http://localhost:4000/${url}`,data );
}
export default userPost;

