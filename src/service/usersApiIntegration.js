import { baseUrl } from "../config/baseUrl";
import {userConnect} from "../helper/axiosUrl";

const userPost = (url, data) => {
  return userConnect("post",`${baseUrl}/${url}`,data );
}
export default userPost;

