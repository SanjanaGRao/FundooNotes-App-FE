import { baseUrl } from "../config/baseUrl";
import userConnect from "../helper/axiosUrl";

const userPost = (url, data) => {
  userConnect("post",`${baseUrl}/${url}`,data );
}
export default userPost;

