import { baseUrl } from "../config/baseUrl";
import {userConnect} from "../helper/axiosUrl";

const userPost = (url, data) => {
  return userConnect(`${baseUrl}/${url}`,data );
}
export default userPost;

